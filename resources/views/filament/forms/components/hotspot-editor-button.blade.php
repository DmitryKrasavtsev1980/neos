@php
    // Извлекаем путь к файлу из массива или объекта
    if (is_array($panoramaUrl)) {
        // Filament FileUpload возвращает массив с UUID ключами
        $panoPath = !empty($panoramaUrl) ? reset($panoramaUrl) : null;
    } else {
        $panoPath = $panoramaUrl;
    }
@endphp

{{-- Debug info removed from edit form --}}

@if($panoPath)
@once
    <!-- Use Vite bundle that exposes window.PhotoSphereViewer to avoid duplicate Three.js -->
    @vite(['resources/js/app.js'])

    <!-- Alpine x-cloak стили -->
    <style>
        [x-cloak] { display: none !important; }
    </style>

    <!-- Глобальная функция для Alpine компонента -->
    <script>
        if (!window.hotspotEditorComponents) {
            window.hotspotEditorComponents = {};
        }

        window.createHotspotEditor = function(panoramaUrl, panoramaId, allPanoramas, existingHotspots) {
            return {
                editorOpen: false,
                mode: 'view',
                viewer: null,
                markersPlugin: null,
                hotspots: [],
                selectedHotspotIndex: null,
                allPanoramas: allPanoramas || [], // Список всех панорам для выбора цели

                init() {
                    console.log('HotspotEditor инициализирован для panorama:', panoramaId);
                    console.log('Доступные панорамы для выбора:', this.allPanoramas);
                    console.log('Переданные existingHotspots:', existingHotspots);

                    // Загружаем существующие hotspots из переданных данных
                    if (existingHotspots && Array.isArray(existingHotspots) && existingHotspots.length > 0) {
                        // Создаем глубокую копию hotspots для корректной реактивности Alpine
                        this.hotspots = JSON.parse(JSON.stringify(existingHotspots));
                        console.log('Загружено hotspots из переданных данных:', this.hotspots.length);
                    }
                },

                findHotspotsInput() {
                    console.log('🔍 Поиск поля hotspots для panoramaId:', panoramaId);

                    // Способ 1: По data-атрибуту
                    const container = this.$root.closest('.fi-fo-repeater-item') || this.$root.closest('li');
                    if (container) {
                        const input = container.querySelector('input[data-hotspots-field="true"]');
                        if (input) {
                            console.log('✅ Найдено поле hotspots через data-hotspots-field:', input);
                            return input;
                        }
                    }

                    console.error('❌ Поле hotspots не найдено!');
                    return null;
                },

                selectHotspot(index) {
                    this.selectedHotspotIndex = index;
                    this.mode = 'view';
                    console.log('Выбран hotspot:', this.hotspots[index]);
                },

                updateSelectedHotspot(field, value) {
                    if (this.selectedHotspotIndex !== null) {
                        const hotspot = this.hotspots[this.selectedHotspotIndex];
                        // Обрабатываем вложенные поля вида "target_camera.yaw"
                        const keys = field.split('.');
                        if (keys.length > 1) {
                            if (!hotspot[keys[0]]) hotspot[keys[0]] = {};
                            hotspot[keys[0]][keys[1]] = value;
                        } else {
                            hotspot[field] = value;
                        }

                        // Принудительно обновляем hotspots для реактивности Alpine
                        this.hotspots = [...this.hotspots];

                        // Перерисовываем маркеры при изменении позиции
                        if (field.includes('position') || field.includes('yaw') || field.includes('pitch')) {
                            this.renderMarkers();
                        }
                    }
                },

                openEditor() {
                    console.log('Открытие редактора hotspots...');
                    this.editorOpen = true;
                    this.$nextTick(() => {
                        this.initViewer();
                    });
                },

                closeEditor() {
                    if (this.viewer) {
                        this.viewer.destroy();
                        this.viewer = null;
                        this.markersPlugin = null;
                    }
                    this.editorOpen = false;
                },

                initViewer() {
                    // Ждем загрузки PhotoSphereViewer
                    const checkAndInit = () => {
                        if (!window.PhotoSphereViewer || !window.PhotoSphereViewer.Viewer || !window.PhotoSphereViewer.MarkersPlugin) {
                            console.log('Ожидание загрузки PhotoSphereViewer и MarkersPlugin...');
                            setTimeout(checkAndInit, 100);
                            return;
                        }

                        try {
                            const panoramaPath = '/storage/' + panoramaUrl;
                            console.log('Инициализация viewer с панорамой:', panoramaPath);

                            this.viewer = new window.PhotoSphereViewer.Viewer({
                                container: document.getElementById('panorama-viewer-' + panoramaId),
                                panorama: panoramaPath,
                                defaultYaw: 0, // Начальный азимут (0 = север)
                                navbar: ['zoom', 'fullscreen'],
                                plugins: [
                                    [window.PhotoSphereViewer.MarkersPlugin, {
                                        markers: []
                                    }]
                                ]
                            });

                            this.markersPlugin = this.viewer.getPlugin(window.PhotoSphereViewer.MarkersPlugin);

                            console.log('MarkersPlugin получен:', this.markersPlugin);
                            console.log('Текущие hotspots перед отрисовкой:', this.hotspots);

                            // Обработчик кликов
                            this.viewer.addEventListener('click', (event) => {
                                if (this.mode === 'add-navigation' || this.mode === 'add-info' || this.mode === 'add-toggle') {
                                    this.addHotspot(event.data.yaw, event.data.pitch);
                                }
                            });

                            // Ждем готовности viewer и отображаем существующие hotspot'ы
                            this.viewer.addEventListener('ready', () => {
                                console.log('Viewer готов, отрисовываем маркеры...');
                                setTimeout(() => {
                                    this.renderMarkers();
                                }, 100); // Небольшая задержка для гарантии готовности
                            });

                            console.log('Photo Sphere Viewer с MarkersPlugin инициализирован');
                        } catch (error) {
                            console.error('Ошибка инициализации viewer:', error);
                            // alert удалён; оставляем лог в консоли
                        }
                    };

                    checkAndInit();
                },

                renderMarkers() {
                    if (!this.markersPlugin) {
                        console.warn('⚠️ MarkersPlugin не инициализирован');
                        return;
                    }

                    console.log('🎨 Отрисовка маркеров, всего hotspots:', this.hotspots.length);

                    // Очищаем все маркеры
                    this.markersPlugin.clearMarkers();

                    // Добавляем маркеры для каждого hotspot'а
                    this.hotspots.forEach((hotspot, index) => {
                        // Конвертируем градусы в радианы для отображения в редакторе
                        const yawRad = parseFloat(hotspot.position.yaw) * Math.PI / 180;
                        const pitchRad = parseFloat(hotspot.position.pitch) * Math.PI / 180;
                        
                        console.log(`Добавление маркера ${index}:`, {
                            yaw_deg: hotspot.position.yaw,
                            pitch_deg: hotspot.position.pitch,
                            yaw_rad: yawRad,
                            pitch_rad: pitchRad
                        });

                        const markerConfig = {
                            id: hotspot.id,
                            position: {
                                yaw: yawRad,
                                pitch: pitchRad
                            },
                            html: hotspot.type === 'navigation'
                                ? `<div style="position: relative;">
                                    <svg width="60" height="60" viewBox="0 0 60 60" style="cursor: pointer; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));">
                                        <circle cx="30" cy="30" r="25" fill="rgba(0,0,0,0.2)" stroke="white" stroke-width="6" style="backdrop-filter: blur(2px);"/>
                                    </svg>
                                    <div style="position: absolute; top: 65px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.75); color: white; padding: 4px 12px; border-radius: 4px; white-space: nowrap; font-size: 13px; pointer-events: none;">${hotspot.tooltip || 'Переход'}</div>
                                </div>`
                                : hotspot.type === 'toggle'
                                    ? `<div style="position: relative;">
                                        <svg width="60" height="60" viewBox="0 0 60 60" style="cursor: pointer; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));">
                                            <circle cx="30" cy="30" r="25" fill="rgba(37,99,235,0.2)" stroke="white" stroke-width="6" style="backdrop-filter: blur(2px);"/>
                                        </svg>
                                        <div style="position: absolute; top: 65px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.75); color: white; padding: 4px 12px; border-radius: 4px; white-space: nowrap; font-size: 13px; pointer-events: none;">${hotspot.tooltip || 'Переключить'}</div>
                                    </div>`
                                    : `<svg width="60" height="60" viewBox="0 0 60 60" style="cursor: pointer; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));">
                                        <circle cx="30" cy="30" r="25" fill="rgba(255,255,255,0.4)" stroke="white" stroke-width="6" style="backdrop-filter: blur(2px);"/>
                                        <text x="30" y="40" font-size="32" fill="black" text-anchor="middle" font-weight="bold" font-family="Arial, sans-serif">?</text>
                                    </svg>`,
                            tooltip: hotspot.type === 'info' ? hotspot.tooltip : { content: hotspot.tooltip, className: 'hidden' },
                            data: hotspot
                        };

                        try {
                            this.markersPlugin.addMarker(markerConfig);
                            console.log('✅ Маркер добавлен:', hotspot.id);
                        } catch (error) {
                            console.error('❌ Ошибка добавления маркера:', error);
                        }
                    });

                    console.log('✅ Всего маркеров отрендерено:', this.hotspots.length);
                },

                addHotspot(yaw, pitch) {
                    // Конвертируем в градусы для хранения в БД
                    let yawDeg = yaw * 180 / Math.PI;
                    let pitchDeg = pitch * 180 / Math.PI;
                    
                    // Нормализуем yaw в диапазон 0-360
                    yawDeg = yawDeg % 360;
                    if (yawDeg < 0) {
                        yawDeg += 360;
                    }
                    
                    console.log('Создание hotspot из координат:', {
                        yaw_rad: yaw,
                        pitch_rad: pitch,
                        yaw_deg: yawDeg,
                        pitch_deg: pitchDeg
                    });

                    const baseHotspot = {
                        id: 'hotspot-' + Date.now(),
                        type: this.mode === 'add-navigation' ? 'navigation' : (this.mode === 'add-toggle' ? 'toggle' : 'info'),
                        position: {
                            yaw: yawDeg,  // сохраняем в градусах!
                            pitch: pitchDeg // сохраняем в градусах!
                        },
                        tooltip: `Точка ${this.hotspots.length + 1}`
                    };

                    // Инициализируем тип-специфичные поля, чтобы избежать ошибок доступа
                    const hotspot = (
                        baseHotspot.type === 'navigation'
                            ? { ...baseHotspot, target_panorama_id: '', target_camera: { yaw: 0, pitch: 0, zoom: 30 } }
                            : baseHotspot.type === 'toggle'
                                ? { ...baseHotspot, target_panorama_id: '' }
                                : { ...baseHotspot, content: { description: '' } }
                    );

                    this.hotspots.push(hotspot);
                    // Выбираем только что добавленный hotspot, чтобы шаблон имел валидный индекс
                    this.selectedHotspotIndex = this.hotspots.length - 1;
                    this.renderMarkers();
                    console.log('Добавлен hotspot:', hotspot);
                    this.mode = 'view';
                },

                removeHotspot(index) {
                    if (index < 0 || index >= this.hotspots.length) return;
                    const removed = this.hotspots.splice(index, 1);
                    console.log('🗑️ Удалён hotspot:', removed[0]);

                    // Пересчитать выбранный индекс
                    if (this.selectedHotspotIndex === index) {
                        this.selectedHotspotIndex = null;
                    } else if (this.selectedHotspotIndex > index) {
                        this.selectedHotspotIndex -= 1;
                    }

                    // Принудительное обновление массива для Alpine
                    this.hotspots = [...this.hotspots];
                    this.renderMarkers();
                },

                saveHotspots() {
                    console.log('💾 Сохранение hotspots:', this.hotspots);

                    // Преобразуем hotspots в простой объект (убираем Proxy)
                    const hotspotsPlain = JSON.parse(JSON.stringify(this.hotspots));
                    console.log('Hotspots как простой объект:', hotspotsPlain);

                    // Находим и обновляем поле hotspots
                    const hotspotsInput = this.findHotspotsInput();
                    if (hotspotsInput) {
                        hotspotsInput.value = JSON.stringify(hotspotsPlain);

                        // Триггерим события для Filament/Livewire
                        hotspotsInput.dispatchEvent(new Event('input', { bubbles: true }));
                        hotspotsInput.dispatchEvent(new Event('change', { bubbles: true }));

                        console.log('✅ Hotspots сохранены в поле:', hotspotsInput);

                        // alert удалён; информация доступна в консоли
                        this.closeEditor();
                    } else {
                        console.error('❌ Поле hotspots не найдено при сохранении');
                    }
                }
            };
        };
    </script>
@endonce

<div
    x-data="createHotspotEditor({{ json_encode($panoPath) }}, {{ json_encode($panoramaId) }}, {{ json_encode($allPanoramas ?? []) }}, {{ json_encode($existingHotspots ?? []) }})"
>
    <div class="space-y-2">
        <button
            type="button"
            @click="openEditor"
            class="inline-flex items-center justify-center font-medium rounded-lg border transition-colors focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset min-h-[2.25rem] px-4 text-sm shadow-sm bg-primary-600 text-white border-transparent hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700"
        >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            Редактировать точки навигации
        </button>
        <p class="text-sm text-gray-500">
            Нажмите, чтобы добавить точки перехода между панорамами и информационные метки
        </p>
    </div>

    <!-- Модальное окно редактора -->
    <template x-teleport="body">
        <div
            x-show="editorOpen"
            x-cloak
            class="fixed inset-0 z-50"
        >
            <!-- Overlay -->
            <div
                class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
                @click="closeEditor"
            ></div>

            <!-- Modal -->
            <div class="fixed inset-4 bg-white rounded-lg shadow-xl flex flex-col">
                <!-- Header -->
                <div class="flex items-center justify-between p-4 border-b">
                    <h3 class="text-lg font-semibold">
                        Редактор навигации: {{ $panoramaTitle }}
                    </h3>
                    <button
                        type="button"
                        @click="closeEditor"
                        class="text-gray-400 hover:text-gray-500"
                    >
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <!-- Body -->
                <div class="flex-1 flex overflow-hidden">
                    <!-- Левая панель - Панорама -->
                    <div class="flex-1 relative">
                        <div id="panorama-viewer-{{ $panoramaId }}" class="w-full h-full"></div>
                    </div>

                    <!-- Правая панель - Инструменты -->
                    <div class="w-80 border-l p-4 overflow-y-auto bg-gray-50">
                        <div class="space-y-4">
                            <div>
                                <h4 class="font-semibold mb-2">Режим работы</h4>
                                <div class="space-y-1">
                                    <button
                                        type="button"
                                        @click="mode = 'view'"
                                        :class="mode === 'view' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700'"
                                        class="w-full px-3 py-2 text-sm rounded-lg border transition-colors"
                                    >
                                        👁️ Просмотр
                                    </button>
                                    <button
                                        type="button"
                                        @click="mode = 'add-navigation'"
                                        :class="mode === 'add-navigation' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700'"
                                        class="w-full px-3 py-2 text-sm rounded-lg border transition-colors"
                                    >
                                        ➕ Добавить переход
                                    </button>
                                    <button
                                        type="button"
                                        @click="mode = 'add-info'"
                                        :class="mode === 'add-info' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700'"
                                        class="w-full px-3 py-2 text-sm rounded-lg border transition-colors"
                                    >
                                        ℹ️ Добавить метку
                                    </button>
                                    <button
                                        type="button"
                                        @click="mode = 'add-toggle'"
                                        :class="mode === 'add-toggle' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700'"
                                        class="w-full px-3 py-2 text-sm rounded-lg border transition-colors"
                                    >
                                        🔁 Добавить переключение
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h4 class="font-semibold mb-2">Точки навигации</h4>
                                <div class="text-sm text-gray-500 mb-2">
                                    Всего: <span x-text="hotspots.length"></span> точек
                                </div>

                                <div class="space-y-2">
                                    <template x-for="(hotspot, index) in hotspots" :key="hotspot.id">
                                        <div
                                            class="p-2 bg-white rounded border text-sm cursor-pointer transition-colors"
                                            :class="selectedHotspotIndex === index ? 'border-primary-500 bg-primary-50' : 'hover:border-gray-400'"
                                            @click="selectHotspot(index)"
                                        >
                                            <div class="flex items-start justify-between">
                                                <div class="flex-1">
                                                    <div class="font-medium">
                                                        <span x-text="hotspot.type === 'navigation' ? '➡️' : 'ℹ️'"></span>
                                                        <span x-text="hotspot.tooltip"></span>
                                                    </div>
                                                    <div class="text-xs text-gray-500 mt-1">
                                                        Yaw: <span x-text="hotspot.position.yaw.toFixed(1)"></span>°
                                                        Pitch: <span x-text="hotspot.position.pitch.toFixed(1)"></span>°
                                                    </div>
                                                </div>
                                                <button
                                                    type="button"
                                                    @click.stop="removeHotspot(index)"
                                                    class="ml-2 text-red-500 hover:text-red-700"
                                                >
                                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </template>

                                    <div x-show="hotspots.length === 0" class="text-sm text-gray-400 italic">
                                        Нет добавленных точек
                                    </div>
                                </div>
                            </div>

                            <!-- Форма настроек выбранного hotspot -->
                            <div x-show="selectedHotspotIndex !== null && hotspots[selectedHotspotIndex]" x-cloak>
                                <h4 class="font-semibold mb-2">Настройки точки</h4>
                                <template x-if="hotspots[selectedHotspotIndex]">
                                    <div class="space-y-3">
                                        <!-- Общие настройки -->
                                        <div>
                                            <label class="block text-xs font-medium text-gray-700 mb-1">Название</label>
                                            <input
                                                type="text"
                                                :value="hotspots[selectedHotspotIndex].tooltip"
                                                @input="updateSelectedHotspot('tooltip', $event.target.value)"
                                                class="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                                            />
                                        </div>

                                        <!-- Настройки для navigation hotspot -->
                                        <template x-if="hotspots[selectedHotspotIndex].type === 'navigation'">
                                            <div class="space-y-3">
                                                <div>
                                                    <label class="block text-xs font-medium text-gray-700 mb-1">Целевая панорама</label>
                                                    <select
                                                        :value="hotspots[selectedHotspotIndex]?.target_panorama_id || ''"
                                                        @change="updateSelectedHotspot('target_panorama_id', $event.target.value)"
                                                        class="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                                                    >
                                                        <option value="">-- Выберите панораму --</option>
                                                        <template x-for="pano in allPanoramas" :key="pano.id">
                                                            <option
                                                                :value="pano.id"
                                                                x-text="pano.title"
                                                                :selected="String(pano.id) === String(hotspots[selectedHotspotIndex]?.target_panorama_id || '')"
                                                            ></option>
                                                        </template>
                                                    </select>
                                                </div>

                                                <div>
                                                    <label class="block text-xs font-medium text-gray-700 mb-1">Камера при переходе</label>
                                                    <div class="grid grid-cols-3 gap-2">
                                                        <div>
                                                            <label class="block text-xs text-gray-600">Yaw (°)</label>
                                                            <input
                                                                type="number"
                                                                :value="hotspots[selectedHotspotIndex]?.target_camera?.yaw ?? 0"
                                                                @input="updateSelectedHotspot('target_camera.yaw', parseFloat($event.target.value))"
                                                                min="0" max="360" step="1"
                                                                class="w-full px-1 py-1 text-xs border border-gray-300 rounded"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label class="block text-xs text-gray-600">Pitch (°)</label>
                                                            <input
                                                                type="number"
                                                                :value="hotspots[selectedHotspotIndex]?.target_camera?.pitch ?? 0"
                                                                @input="updateSelectedHotspot('target_camera.pitch', parseFloat($event.target.value))"
                                                                min="-90" max="90" step="1"
                                                                class="w-full px-1 py-1 text-xs border border-gray-300 rounded"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label class="block text-xs text-gray-600">Zoom</label>
                                                            <input
                                                                type="number"
                                                                :value="hotspots[selectedHotspotIndex]?.target_camera?.zoom ?? 30"
                                                                @input="updateSelectedHotspot('target_camera.zoom', parseFloat($event.target.value))"
                                                                min="0" max="100" step="1"
                                                                class="w-full px-1 py-1 text-xs border border-gray-300 rounded"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </template>

                                        <!-- Настройки для toggle hotspot -->
                                        <template x-if="hotspots[selectedHotspotIndex].type === 'toggle'">
                                            <div class="space-y-3">
                                                <div>
                                                    <label class="block text-xs font-medium text-gray-700 mb-1">Целевая панорама</label>
                                                    <select
                                                        :value="hotspots[selectedHotspotIndex]?.target_panorama_id || ''"
                                                        @change="updateSelectedHotspot('target_panorama_id', $event.target.value)"
                                                        class="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                                                    >
                                                        <option value="">-- Выберите панораму --</option>
                                                        <template x-for="pano in allPanoramas" :key="pano.id">
                                                            <option
                                                                :value="pano.id"
                                                                x-text="pano.title"
                                                                :selected="String(pano.id) === String(hotspots[selectedHotspotIndex]?.target_panorama_id || '')"
                                                            ></option>
                                                        </template>
                                                    </select>
                                                </div>
                                            </div>
                                        </template>

                                        <!-- Настройки для info hotspot -->
                                        <template x-if="hotspots[selectedHotspotIndex].type === 'info'">
                                            <div class="space-y-3">
                                                <div>
                                                    <label class="block text-xs font-medium text-gray-700 mb-1">Описание</label>
                                                    <textarea
                                                        :value="hotspots[selectedHotspotIndex].content?.description || ''"
                                                        @input="updateSelectedHotspot('content.description', $event.target.value)"
                                                        rows="3"
                                                        class="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </template>

                                        <button
                                            type="button"
                                            @click="selectedHotspotIndex = null"
                                            class="w-full px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50"
                                        >
                                            Закрыть настройки
                                        </button>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="flex items-center justify-end gap-2 p-4 border-t">
                    <button
                        type="button"
                        @click="closeEditor"
                        class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                        Отмена
                    </button>
                    <button
                        type="button"
                        @click="saveHotspots"
                        class="px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-lg hover:bg-primary-500"
                    >
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    </template>
</div>
@else
<div class="p-4 bg-gray-50 rounded-lg">
    <p class="text-sm text-gray-600">
        Сначала загрузите панораму, чтобы добавить точки навигации
    </p>
</div>
@endif

@if(!$panoPath && $panoramaUrl)
<div class="p-4 bg-yellow-50 rounded-lg mt-2">
    <p class="text-sm text-yellow-700">
        Сохраните панораму сначала, затем вернитесь для настройки навигации
    </p>
</div>
@endif
