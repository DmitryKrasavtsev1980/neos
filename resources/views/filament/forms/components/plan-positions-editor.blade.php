@php
    // Обрабатываем floor_plan
    if (is_array($floorPlan ?? null)) {
        $floorPlanPath = !empty($floorPlan) ? reset($floorPlan) : null;
    } else {
        $floorPlanPath = $floorPlan ?? null;
    }

    // Подготавливаем список панорам для редактора
    $panoramasList = collect($members)->map(function($member) {
        $planPosition = $member['plan_position'] ?? null;

        // Если plan_position - строка JSON, декодируем её
        if (is_string($planPosition) && !empty($planPosition)) {
            $planPosition = json_decode($planPosition, true);
        }

        return [
            'id' => $member['id'] ?? null,
            'title' => $member['title'] ?? 'Без названия',
            'plan_position' => $planPosition,
        ];
    })->filter(fn($m) => !empty($m['id']))->values()->toArray();
@endphp

@if($floorPlanPath)
@once
    <!-- Alpine x-cloak стили -->
    <style>
        [x-cloak] { display: none !important; }

        .plan-panorama-marker {
            position: absolute;
            width: 32px;
            height: 32px;
            background: #3b82f6;
            color: white;
            border: 3px solid white;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            cursor: pointer;
            transition: all 0.2s;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: bold;
        }

        .plan-panorama-marker:hover {
            transform: translate(-50%, -50%) scale(1.2);
            z-index: 10;
        }

        .plan-panorama-marker.selected {
            background: #ef4444;
            width: 40px;
            height: 40px;
            border-width: 4px;
        }
    </style>

    <script>
        if (!window.planPositionsEditorComponents) {
            window.planPositionsEditorComponents = {};
        }

        window.createPlanPositionsEditor = function(floorPlanPath, initialPanoramas) {
            return {
                editorOpen: false,
                panoramas: [],
                selectedPanoramaIndex: null,
                floorPlanPath: floorPlanPath, // Добавляем путь к плану в данные компонента

                init() {
                    console.log('PlanPositionsEditor инициализирован');
                    console.log('Панорамы:', initialPanoramas);

                    // Загружаем панорамы с их позициями
                    this.panoramas = JSON.parse(JSON.stringify(initialPanoramas));
                },

                openEditor() {
                    this.editorOpen = true;
                    console.log('Открытие редактора позиций на плане');
                },

                closeEditor() {
                    this.editorOpen = false;
                    this.selectedPanoramaIndex = null;
                },

                selectPanorama(index) {
                    this.selectedPanoramaIndex = index;
                    console.log('Выбрана панорама:', this.panoramas[index]);
                },

                handlePlanClick(event) {
                    if (this.selectedPanoramaIndex === null) {
                        console.warn('Сначала выберите панораму из списка слева');
                        return;
                    }

                    const rect = event.currentTarget.getBoundingClientRect();
                    const x = ((event.clientX - rect.left) / rect.width) * 100;
                    const y = ((event.clientY - rect.top) / rect.height) * 100;

                    console.log('Клик по плану:', { clientX: event.clientX, clientY: event.clientY, rect, x, y });

                    // Обновляем позицию выбранной панорамы
                    if (!this.panoramas[this.selectedPanoramaIndex].plan_position) {
                        this.panoramas[this.selectedPanoramaIndex].plan_position = {};
                    }
                    this.panoramas[this.selectedPanoramaIndex].plan_position.x = x;
                    this.panoramas[this.selectedPanoramaIndex].plan_position.y = y;

                    // Обновляем массив для реактивности
                    this.panoramas = [...this.panoramas];

                    console.log('Позиция установлена:', { x, y, panorama: this.panoramas[this.selectedPanoramaIndex] });
                },

                savePositions() {
                    console.log('💾 Сохранение позиций панорам:', this.panoramas);

                    // Находим все поля plan_position в repeater и обновляем их
                    const form = this.$root.closest('form');
                    if (!form) {
                        console.error('❌ Ошибка: форма не найдена');
                        return;
                    }

                    // Находим все скрытые поля plan_position по id
                    const allHiddenInputs = form.querySelectorAll('input[type="hidden"]');
                    console.log('🔍 Всего скрытых полей в форме:', allHiddenInputs.length);

                    // Поиск полей plan_position по id
                    const planPositionInputs = Array.from(allHiddenInputs).filter(input => {
                        return input.id && input.id.includes('plan_position');
                    });
                    console.log('✅ Найдено полей plan_position:', planPositionInputs.length);
                    console.log('Input с id plan_position:', planPositionInputs.map(i => i.id));

                    // Проверяем соответствие количества
                    if (planPositionInputs.length !== this.panoramas.length) {
                        console.error(`❌ Несоответствие: ${this.panoramas.length} панорам, но ${planPositionInputs.length} полей plan_position`);
                        return;
                    }

                    let savedCount = 0;

                    // Обновляем поля по порядку (они идут в том же порядке, что и панорамы в repeater)
                    this.panoramas.forEach((panorama, index) => {
                        const planPositionInput = planPositionInputs[index];

                        if (planPositionInput) {
                            const positionValue = panorama.plan_position ? JSON.stringify(panorama.plan_position) : '';
                            planPositionInput.value = positionValue;

                            // Триггерим события для Filament/Livewire
                            planPositionInput.dispatchEvent(new Event('input', { bubbles: true }));
                            planPositionInput.dispatchEvent(new Event('change', { bubbles: true }));

                            console.log(`✅ Позиция панорамы "${panorama.title}" обновлена:`, positionValue);
                            console.log(`   Поле ID: ${planPositionInput.id}`);
                            savedCount++;
                        } else {
                            console.warn(`⚠️ Поле plan_position не найдено для панорамы ${index} (${panorama.title})`);
                        }
                    });

                    if (savedCount > 0) {
                        console.log(`✅ Позиции панорам сохранены (${savedCount} из ${this.panoramas.length}).`);
                        this.closeEditor();
                    } else {
                        console.error('❌ Не удалось сохранить позиции. Проверьте консоль для деталей.');
                    }
                }
            };
        };
    </script>
@endonce

<div
    x-data="createPlanPositionsEditor(@js($floorPlanPath), @js($panoramasList))"
>
    <div class="space-y-2">
        <button
            type="button"
            @click="openEditor"
            class="inline-flex items-center justify-center font-medium rounded-lg border transition-colors focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset min-h-[2.25rem] px-4 text-sm shadow-sm bg-primary-600 text-white border-transparent hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700"
        >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
            </svg>
            Редактировать позиции панорам на плане
        </button>
        <p class="text-sm text-gray-500">
            Укажите где какая панорама находится на плане помещения (<span x-text="panoramas.filter(p => p.plan_position).length"></span>/<span x-text="panoramas.length"></span> установлено)
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
                        Редактор позиций панорам на плане
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
                    <!-- Левая панель - Список панорам -->
                    <div class="w-80 border-r p-4 overflow-y-auto bg-gray-50">
                        <div class="space-y-2">
                            <h4 class="font-semibold mb-3">Панорамы</h4>
                            <p class="text-xs text-gray-600 mb-4">
                                Выберите панораму, затем кликните по плану чтобы установить её позицию
                            </p>

                            <template x-for="(panorama, index) in panoramas" :key="panorama.id">
                                <div
                                    @click="selectPanorama(index)"
                                    class="p-3 rounded border cursor-pointer transition-all"
                                    :class="selectedPanoramaIndex === index ? 'border-primary-500 bg-primary-50' : 'border-gray-300 bg-white hover:border-gray-400'"
                                >
                                    <div class="flex items-center justify-between">
                                        <div class="flex-1">
                                            <div class="font-medium text-sm" x-text="panorama.title"></div>
                                            <div class="text-xs text-gray-500 mt-1">
                                                <template x-if="panorama.plan_position">
                                                    <span class="text-green-600">✓ Позиция установлена</span>
                                                </template>
                                                <template x-if="!panorama.plan_position">
                                                    <span class="text-gray-400">Позиция не задана</span>
                                                </template>
                                            </div>
                                        </div>
                                        <div
                                            class="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                                            :class="selectedPanoramaIndex === index ? 'bg-red-500' : 'bg-blue-500'"
                                            x-text="index + 1"
                                        ></div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>

                    <!-- Правая панель - План помещения -->
                    <div class="flex-1 p-4 overflow-auto flex items-center justify-center bg-gray-100">
                        <div class="relative max-w-full max-h-full">
                            <div
                                @click="handlePlanClick($event)"
                                class="relative cursor-crosshair border-2 border-primary-300 rounded overflow-hidden bg-white"
                                style="max-width: 100%; max-height: calc(100vh - 200px);"
                            >
                                <img
                                    :src="'/storage/' + floorPlanPath"
                                    alt="План помещения"
                                    class="max-w-full max-h-full object-contain pointer-events-none"
                                />

                                <!-- Маркеры панорам на плане -->
                                <template x-for="(panorama, index) in panoramas" :key="panorama.id">
                                    <div
                                        x-show="panorama.plan_position"
                                        class="plan-panorama-marker"
                                        :class="selectedPanoramaIndex === index ? 'selected' : ''"
                                        :style="`left: ${panorama.plan_position?.x || 0}%; top: ${panorama.plan_position?.y || 0}%;`"
                                        :title="panorama.title"
                                        @click.stop="selectPanorama(index)"
                                        x-text="index + 1"
                                    ></div>
                                </template>
                            </div>

                            <div class="mt-4 text-center text-sm text-gray-600">
                                <template x-if="selectedPanoramaIndex !== null">
                                    <div class="bg-blue-50 border border-blue-200 rounded p-2">
                                        <strong>Выбрана:</strong> <span x-text="panoramas[selectedPanoramaIndex]?.title"></span>
                                        <br>
                                        <span class="text-xs">Кликните по плану чтобы установить позицию</span>
                                    </div>
                                </template>
                                <template x-if="selectedPanoramaIndex === null">
                                    <div class="text-gray-500">
                                        ← Выберите панораму из списка слева
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
                        @click="savePositions"
                        class="px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-lg hover:bg-primary-500"
                    >
                        Сохранить позиции
                    </button>
                </div>
            </div>
        </div>
    </template>
</div>
@else
<div class="p-4 bg-gray-50 rounded-lg">
    <p class="text-sm text-gray-600">
        Сначала загрузите план помещения, чтобы расставить панорамы на плане
    </p>
</div>
@endif
