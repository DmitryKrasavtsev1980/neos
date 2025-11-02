<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $tour->name }} - Виртуальный тур</title>

    <!-- TailwindCSS для стилизации -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Use Vite bundle that exposes window.PhotoSphereViewer to avoid duplicate Three.js -->
    @vite(['resources/js/app.js'])

    <!-- Leaflet для Plan плагина -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css">

    <style>
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
        }

        #viewer {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100vw;
            height: 100vh;
            z-index: 1;
        }


        /* Планировка как модальное окно */
        .floor-plan-overlay {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 99999;
            max-width: 400px;
            max-height: 400px;
            background: rgba(0, 0, 0, 0.9);
            border-radius: 8px;
            padding: 10px;
            display: none;
        }

        .floor-plan-container {
            position: relative;
            display: inline-block;
            max-width: 100%;
            max-height: 100%;
        }

        .floor-plan-overlay img {
            max-width: 380px;
            max-height: 380px;
            display: block;
            border-radius: 4px;
        }

        /* Маркеры панорам на плане */
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
            z-index: 10;
        }

        .plan-panorama-marker:hover {
            transform: translate(-50%, -50%) scale(1.3);
            background: #2563eb;
            z-index: 20;
        }

        .plan-panorama-marker.active {
            background: #ef4444;
            width: 40px;
            height: 40px;
            border-width: 4px;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% {
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
            }
            50% {
                box-shadow: 0 0 20px rgba(239, 68, 68, 0.8);
            }
        }

        /* Мобильные устройства */
        @media (max-width: 768px) {
            /* Корректируем высоту viewer чтобы navbar влезала */
            #viewer {
                height: 100dvh !important; /* dvh учитывает мобильные панели браузера */
            }

            /* Гарантируем что navbar видна */
            .psv-container .psv-navbar {
                position: absolute !important;
                bottom: 0 !important;
            }

            /* Планировка */
            .floor-plan-overlay {
                top: 10px;
                right: 10px;
                left: 10px;
                max-width: calc(100vw - 20px);
                max-height: calc(100vh - 100px);
            }

            .floor-plan-overlay img {
                max-width: calc(100vw - 40px);
                max-height: calc(100vh - 120px);
            }
        }

        /* calibration UI удалён из просмотра */
    </style>
</head>
<body>
    <!-- Контейнер для панорамы на весь экран -->
    <div id="viewer"></div>


    <!-- Планировка как модальное окно -->
    @if($floorPlan)
    <div id="floor-plan" class="floor-plan-overlay">
        <div class="floor-plan-container">
            <img src="{{ $floorPlan }}" alt="Планировка">
            <!-- Контейнер для маркеров hotspots -->
            <div id="plan-hotspots-container"></div>
        </div>
    </div>
    @endif

    <!-- calibration UI удалён из просмотра -->

    <script>
        // Функция для показа/скрытия планировки
        function toggleFloorPlan() {
            const floorPlan = document.getElementById('floor-plan');
            if (floorPlan.style.display === 'none' || floorPlan.style.display === '') {
                floorPlan.style.display = 'block';
            } else {
                floorPlan.style.display = 'none';
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            // Ждем полной загрузки Vite
            if (typeof PhotoSphereViewer === 'undefined') {
                console.log('Ожидание загрузки PhotoSphereViewer...');
                setTimeout(arguments.callee, 100);
                return;
            }

            console.log('PhotoSphereViewer загружен:', PhotoSphereViewer);

            // Данные панорам из Laravel
            const panoramas = @json($panoramas->values());
            const firstPanorama = @json($firstPanorama);
            const floorPlan = @json($floorPlan);

            // Отладочная информация
            console.log('=== ДАННЫЕ ТУРА ===');
            console.log('Всего панорам:', panoramas.length);
            console.log('Панорамы:', panoramas);
            console.log('Первая панорама:', firstPanorama);
            console.log('План помещения:', floorPlan);
            console.log('Панорамы с plan_position:', panoramas.filter(p => p.plan_position));
            console.log('==================');

            // Подготавливаем данные для Gallery плагина
            const galleryItems = panoramas
                .filter(p => !p.hide_in_gallery)
                .map(panorama => ({
                id: panorama.id.toString(),
                panorama: panorama.url,
                thumbnail: panorama.thumbnail,
                name: panorama.title
            }));

            // Подготавливаем плагины
            const plugins = [];

            // MarkersPlugin для отображения hotspots
            if (PhotoSphereViewer.MarkersPlugin) {
                plugins.push([PhotoSphereViewer.MarkersPlugin, {
                    markers: []
                }]);
            }

            // Gallery плагин для навигации между панорамами
            if (PhotoSphereViewer.GalleryPlugin) {
                const hasMultiple = Array.isArray(galleryItems) && galleryItems.length > 1;
                if (hasMultiple) {
                    plugins.push(
                        PhotoSphereViewer.GalleryPlugin.withConfig({
                            items: galleryItems,
                            hideOnClick: true,
                            visibleOnLoad: false
                        })
                    );
                }
            }

            // Простое отображение планировки без Map плагина
            // Map плагин всегда показывает позицию панорамы, поэтому используем HTML элемент

            // Кастомная кнопка планировки для navbar
            @if($floorPlan)
            const floorPlanButton = {
                id: 'floorPlan',
                content: 'ПЛАНИРОВКА',
                title: 'Показать планировку',
                className: 'custom-floor-plan-btn',
                onClick: () => {
                    toggleFloorPlan();
                }
            };
            @endif

            // (калибровка осуществляется в интерфейсе редактирования тура)

            // Инициализация Photo Sphere Viewer с плагинами
            const viewer = new PhotoSphereViewer.Viewer({
                container: document.querySelector('#viewer'),
                panorama: firstPanorama.url,
                caption: '{{ $tour->name }} <b>&bull;</b> Виртуальный тур &bull; {{ count($panoramas) }} панорам{{ count($panoramas) === 1 ? "а" : (count($panoramas) < 5 ? "ы" : "") }}',

                // Начальная позиция камеры из данных первой панорамы
                defaultYaw: (firstPanorama.camera?.yaw || 0) * Math.PI / 180,  // конвертация в радианы
                defaultPitch: (firstPanorama.camera?.pitch || 0) * Math.PI / 180,
                defaultZoomLvl: firstPanorama.camera?.zoom || 30,

                moveSpeed: 4.0,
                zoomSpeed: 2.0,

                // Добавляем кастомную кнопку планировки в navbar
                @if($floorPlan)
                navbar: [
                    @if(count($panoramas) > 1)'gallery',@endif
                    floorPlanButton,
                    'caption',
                    'zoom',
                    'move',
                    'description',
                    'fullscreen'
                ],
                @else
                navbar: [
                    @if(count($panoramas) > 1)'gallery',@endif
                    'caption',
                    'zoom',
                    'move',
                    'description',
                    'fullscreen'
                ],
                @endif

                plugins: plugins
            });

            // Флаг подавления анимации при программном переключении (toggle)
            let suppressNextPanoramaAnimation = false;

            // Вспомогательная функция: градусы → радианы
            function degToRad(d) { return d * Math.PI / 180; }

            // Кэш предзагруженных панорам
            const preloadedPanoramas = new Map();

            // Функция предзагрузки панорамы через PhotoSphereViewer
            function preloadPanorama(url) {
                if (preloadedPanoramas.has(url)) {
                    return; // Уже загружается или загружена
                }

                console.log('⏬ Предзагрузка панорамы:', url);

                // Помечаем что началась загрузка
                preloadedPanoramas.set(url, false);

                // Используем встроенный метод PhotoSphereViewer для предзагрузки
                viewer.textureLoader.preloadPanorama(url)
                    .then(() => {
                        preloadedPanoramas.set(url, true);
                        console.log('✅ Панорама предзагружена:', url);
                    })
                    .catch((error) => {
                        console.warn('❌ Ошибка предзагрузки панорамы:', url, error);
                        preloadedPanoramas.delete(url); // Удаляем из кэша чтобы можно было повторить
                    });
            }

            // Получаем MarkersPlugin
            let markersPlugin = null;
            if (PhotoSphereViewer.MarkersPlugin) {
                markersPlugin = viewer.getPlugin(PhotoSphereViewer.MarkersPlugin);
            }

            // Переменная для отслеживания последней отрендеренной панорамы
            let lastRenderedPanoramaId = null;

            // Функция для отображения маркеров текущей панорамы
            function renderHotspots(panorama) {
                // Защита от повторного рендеринга той же панорамы
                if (lastRenderedPanoramaId === panorama.id) {
                    return;
                }
                lastRenderedPanoramaId = panorama.id;
                if (!markersPlugin || !panorama.hotspots || panorama.hotspots.length === 0) {
                    return;
                }

                // Очищаем старые маркеры
                markersPlugin.clearMarkers();

                // Добавляем новые маркеры
                panorama.hotspots.forEach(hotspot => {
                    const markerConfig = {
                        id: hotspot.id,
                        position: {
                            yaw: (hotspot.position.yaw || 0) * Math.PI / 180,  // конвертация градусов в радианы
                            pitch: (hotspot.position.pitch || 0) * Math.PI / 180
                        },
                        html: '',
                        // Встраиваем ID исходной панорамы для корректного возврата
                        data: { ...hotspot, origin_panorama_id: panorama.id }
                    };

                    // Разные стили для разных типов hotspots
                    if (hotspot.type === 'navigation') {
                        markerConfig.html = `
                            <div style="position: relative;">
                                <svg width="60" height="60" viewBox="0 0 60 60" style="cursor: pointer; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4)); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">
                                    <circle cx="30" cy="30" r="25" fill="rgba(0,0,0,0.2)" stroke="white" stroke-width="6"/>
                                </svg>
                                <div style="position: absolute; top: 65px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.8); color: white; padding: 6px 14px; border-radius: 6px; white-space: nowrap; font-size: 14px; font-weight: 500; pointer-events: none; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">
                                    ${hotspot.tooltip || 'Переход'}
                                </div>
                            </div>
                        `;
                    } else if (hotspot.type === 'info') {
                        markerConfig.html = `
                            <svg width="60" height="60" viewBox="0 0 60 60" style="cursor: pointer; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4)); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">
                                <circle cx="30" cy="30" r="25" fill="rgba(255,255,255,0.4)" stroke="white" stroke-width="6"/>
                                <text x="30" y="40" font-size="32" fill="black" text-anchor="middle" font-weight="bold" font-family="Arial, sans-serif">?</text>
                            </svg>
                        `;
                        markerConfig.tooltip = hotspot.tooltip || 'Информация';
                    } else if (hotspot.type === 'toggle') {
                        // Переключатель: круг как у перехода, но с синим внутренним цветом и постоянной подписью
                        markerConfig.html = `
                            <div style="position: relative;">
                                <svg width="60" height="60" viewBox="0 0 60 60" style="cursor: pointer; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4)); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">
                                    <circle cx="30" cy="30" r="25" fill="rgba(37,99,235,0.2)" stroke="white" stroke-width="6"/>
                                </svg>
                                <div style="position: absolute; top: 65px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.8); color: white; padding: 6px 14px; border-radius: 6px; white-space: nowrap; font-size: 14px; font-weight: 500; pointer-events: none; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">
                                    ${hotspot.tooltip || 'Переключить панораму'}
                                </div>
                            </div>
                        `;
                        // Отключаем всплывающую подсказку у переключателя — подпись уже есть под иконкой
                        markerConfig.tooltip = '';
                    }

                    markersPlugin.addMarker(markerConfig);
                });

                console.log(`Отрендерено ${panorama.hotspots.length} hotspot(ов) для панорамы ${panorama.title}`);

                // Предзагружаем целевые панорамы для toggle-hotspots
                panorama.hotspots.forEach(hotspot => {
                    if (hotspot.type === 'toggle' && hotspot.target_panorama_id) {
                        const targetPanorama = panoramas.find(p => p.id === hotspot.target_panorama_id);
                        if (targetPanorama && targetPanorama.url) {
                            preloadPanorama(targetPanorama.url);
                        }
                    }
                });

                // Также обновляем hotspots на плане
                renderPlanHotspots(panorama);
            }

            // Функция для отображения hotspots на плане помещения
            function renderPlanHotspots(currentPanorama) {
                const planContainer = document.getElementById('plan-hotspots-container');
                if (!planContainer) return;

                // Очищаем старые маркеры на плане
                planContainer.innerHTML = '';

                // Отображаем ВСЕ панорамы на плане (не hotspots)
                panoramas.forEach((panorama, index) => {
                    if (!panorama.plan_position) return;

                    const marker = document.createElement('div');
                    marker.className = 'plan-panorama-marker';

                    // Подсвечиваем текущую панораму
                    if (panorama.id === currentPanorama.id) {
                        marker.classList.add('active');
                    }

                    marker.style.left = `${panorama.plan_position.x}%`;
                    marker.style.top = `${panorama.plan_position.y}%`;
                    marker.title = panorama.title;
                    marker.textContent = (index + 1).toString();

                    // Обработчик клика - переход к панораме
                    marker.addEventListener('click', () => {
                        // Закрываем план
                        toggleFloorPlan();

                        // Переходим на выбранную панораму
                        if (panorama.id === currentPanorama.id) {
                            // Уже на этой панораме, ничего не делаем
                            return;
                        }

                        viewer.setPanorama(panorama.url, {
                            transition: {
                                speed: 1500,
                                rotation: true,
                                effect: 'fade'
                            },
                            position: {
                                yaw: (panorama.camera?.yaw || 0) * Math.PI / 180,
                                pitch: (panorama.camera?.pitch || 0) * Math.PI / 180
                            },
                            zoom: panorama.camera?.zoom || 30,
                            caption: '{{ $tour->name }} <b>&bull;</b> ' + panorama.title
                        }).then(() => {
                            // Отображаем hotspots для новой панорамы
                            renderHotspots(panorama);

                            // TODO: Обработка автовращения
                            // if (panorama.autorotate?.enabled) {
                            //     // Будет реализовано через AutorotatePlugin
                            // }
                        });
                    });

                    planContainer.appendChild(marker);
                });

                console.log(`Отрендерено ${panoramas.filter(p => p.plan_position).length} маркеров панорам на плане`);
            }

            // Функция перехода к панораме
            function navigateToPanorama(targetPanoramaId, targetCamera) {
                const targetPanorama = panoramas.find(p => p.id === targetPanoramaId);

                if (!targetPanorama) {
                    console.warn('Целевая панорама не найдена:', targetPanoramaId);
                    return;
                }

                console.log('Переход на панораму:', targetPanorama.title);

                // Используем камеру из hotspot или дефолтную камеру панорамы
                const cameraYaw = (targetCamera?.yaw !== undefined ? targetCamera.yaw : targetPanorama.camera?.yaw || 0) * Math.PI / 180;
                const cameraPitch = (targetCamera?.pitch !== undefined ? targetCamera.pitch : targetPanorama.camera?.pitch || 0) * Math.PI / 180;
                const cameraZoom = targetCamera?.zoom !== undefined ? targetCamera.zoom : targetPanorama.camera?.zoom || 30;

                viewer.setPanorama(targetPanorama.url, {
                    transition: {
                        speed: 1500,
                        rotation: true,
                        effect: 'fade'
                    },
                    position: {
                        yaw: cameraYaw,
                        pitch: cameraPitch
                    },
                    zoom: cameraZoom,
                    sphereCorrection: {
                        pan: degToRad(targetPanorama.calibration?.pan || 0),
                        tilt: degToRad(targetPanorama.calibration?.tilt || 0),
                        roll: 0
                    },
                    caption: '{{ $tour->name }} <b>&bull;</b> ' + targetPanorama.title
                }).then(() => {
                    // Отображаем hotspots для новой панорамы
                    renderHotspots(targetPanorama);

                    // TODO: Обработка автовращения
                    // if (targetPanorama.autorotate?.enabled) {
                    //     // Будет реализовано через AutorotatePlugin
                    // }
                });
            }

            // Обработка кликов по маркерам
            if (markersPlugin) {
                markersPlugin.addEventListener('select-marker', ({ marker }) => {
                    const hotspot = marker.data;

                    if (hotspot.type === 'navigation' && hotspot.target_panorama_id) {
                        navigateToPanorama(hotspot.target_panorama_id, hotspot.target_camera);
                    } else if (hotspot.type === 'info') {
                        // Можно добавить модальное окно с информацией
                        console.log('Info hotspot clicked:', hotspot);
                    } else if (hotspot.type === 'toggle' && hotspot.target_panorama_id) {
                        // Мгновенное переключение между текущей и целевой панорамой
                        console.time('⚡ Toggle переключение');
                        const currentUrl = viewer.config.panorama;
                        const current = panoramas.find(p => p.url === currentUrl) || firstPanorama;
                        const target = panoramas.find(p => p.id === hotspot.target_panorama_id);
                        if (!target) return;

                        console.log('🔄 Toggle клик:', {
                            from: current.title,
                            to: target.title,
                            preloaded: preloadedPanoramas.get(target.url)
                        });

                        // Проверяем загружена ли целевая панорама
                        const isPreloaded = preloadedPanoramas.get(target.url) === true;

                        // Если панорама ещё не загружена, запускаем загрузку и показываем loader
                        if (!isPreloaded) {
                            console.warn('⚠️ Панорама ещё не загружена, ждём...');
                            // Запускаем предзагрузку если она ещё не началась
                            if (!preloadedPanoramas.has(target.url)) {
                                preloadPanorama(target.url);
                            }
                        }

                        // Текущая камера в градусах на момент клика
                        const pos = viewer.getPosition();
                        const yawDeg = pos.yaw * 180 / Math.PI;
                        const pitchDeg = pos.pitch * 180 / Math.PI;
                        const zoom = viewer.getZoomLevel();

                        // Исходная панорама для этого переключателя
                        const originId = marker.data.origin_panorama_id || current.id;
                        const origin = panoramas.find(p => p.id === originId) || firstPanorama;

                        if (current && current.id === hotspot.target_panorama_id) {
                        // Возврат на исходную панораму с тем же углом обзора, что был при первом переключении
                        const originCam = marker.data._origin_camera;
                        const backYaw = (originCam?.yaw ?? yawDeg) * Math.PI / 180;
                        const backPitch = (originCam?.pitch ?? pitchDeg) * Math.PI / 180;
                        const backZoom = originCam?.zoom ?? zoom;

                            // Подавить анимацию позиции, задать точный ракурс
                            suppressNextPanoramaAnimation = true;
                            viewer.setPanorama(origin.url, {
                                transition: false, // Полностью отключаем переход
                                showLoader: !isPreloaded, // Показываем loader только если не предзагружена
                                position: { yaw: backYaw, pitch: backPitch },
                                zoom: backZoom,
                                sphereCorrection: {
                                    pan: degToRad(origin.calibration?.pan || 0),
                                    tilt: degToRad(origin.calibration?.tilt || 0),
                                    roll: 0
                                },
                                caption: '{{ $tour->name }} <b>&bull;</b> ' + origin.title
                            });
                            // renderHotspots вызовется в обработчике panorama-loaded
                        } else {
                            // Переход на целевую панораму: запомнить камеру исходной
                            marker.data._origin_camera = { yaw: yawDeg, pitch: pitchDeg, zoom };

                            suppressNextPanoramaAnimation = true;
                            viewer.setPanorama(target.url, {
                                transition: false, // Полностью отключаем переход
                                showLoader: !isPreloaded, // Показываем loader только если не предзагружена
                                position: { yaw: yawDeg * Math.PI / 180, pitch: pitchDeg * Math.PI / 180 },
                                zoom,
                                sphereCorrection: {
                                    pan: degToRad(target.calibration?.pan || 0),
                                    tilt: degToRad(target.calibration?.tilt || 0),
                                    roll: 0
                                },
                                caption: '{{ $tour->name }} <b>&bull;</b> ' + target.title
                            });
                            // renderHotspots вызовется в обработчике panorama-loaded
                        }
                    }
                });
            }

            // Ждем готовности viewer перед отрисовкой hotspots
            viewer.addEventListener('ready', () => {
                console.log('Viewer готов, отрисовываем hotspots для первой панорамы...');
                renderHotspots(firstPanorama);
                // Коррекция для первой панорамы задаётся через sphereCorrection при последующих setPanorama

                // TODO: Автовращение для первой панорамы (требует AutorotatePlugin)
                // if (firstPanorama.autorotate?.enabled) {
                //     setTimeout(() => {
                //         // Будет реализовано через AutorotatePlugin
                //     }, firstPanorama.autorotate.delay || 3000);
                // }
            });

            // Обработка переключения между панорамами в Gallery
            @if(count($panoramas) > 1)
            const galleryPlugin = viewer.getPlugin(PhotoSphereViewer.GalleryPlugin);

            // Слушаем событие загрузки панорамы после клика в Gallery
            viewer.addEventListener('panorama-loaded', () => {
                // Получаем текущую панораму по URL
                const currentUrl = viewer.config.panorama;
                const currentPanorama = panoramas.find(p => p.url === currentUrl);

                if (!currentPanorama) return;

                // Коррекция применяется через setPanorama

                if (suppressNextPanoramaAnimation) {
                    // Пропустить анимацию камеры, просто перерендерить хотспоты
                    suppressNextPanoramaAnimation = false;
                    renderHotspots(currentPanorama);
                    console.timeEnd('⚡ Toggle переключение');
                    return;
                }

                console.log('Панорама загружена через Gallery:', currentPanorama.title);

                // Устанавливаем правильную позицию камеры (только для действий галереи)
                viewer.animate({
                    yaw: (currentPanorama.camera?.yaw || 0) * Math.PI / 180,
                    pitch: (currentPanorama.camera?.pitch || 0) * Math.PI / 180,
                    zoom: currentPanorama.camera?.zoom || 30,
                    speed: '20rpm'
                }).then(() => {
                    console.log('Камера установлена, отображаем hotspots...');
                    renderHotspots(currentPanorama);
                });
            });
            @endif

            console.log('Photo Sphere Viewer инициализирован с плагинами:', {
                gallery: {{ count($panoramas) > 1 ? 'true' : 'false' }},
                map: {{ $floorPlan ? 'true' : 'false' }},
                camera: firstPanorama.camera,
                autorotate: firstPanorama.autorotate
            });
        });
    </script>
</body>
</html>
