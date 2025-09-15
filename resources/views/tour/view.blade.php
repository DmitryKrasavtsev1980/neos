<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $tour->name }} - Виртуальный тур</title>

    <!-- TailwindCSS для стилизации -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Vite scripts -->
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
            z-index: 10;
            width: 400px;
            height: 400px;
            background: rgba(0, 0, 0, 0.8);
            border-radius: 8px;
            padding: 10px;
            display: none;
        }

        .floor-plan-overlay img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 4px;
        }

        /* Мобильные устройства */
        @media (max-width: 768px) {
            .floor-plan-overlay {
                top: 10px;
                right: 10px;
                left: 10px;
                width: auto;
                height: 300px;
            }
        }
    </style>
</head>
<body>
    <!-- Контейнер для панорамы на весь экран -->
    <div id="viewer"></div>


    <!-- Планировка как модальное окно -->
    @if($floorPlan)
    <div id="floor-plan" class="floor-plan-overlay">
        <img src="{{ $floorPlan }}" alt="Планировка">
    </div>
    @endif

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

            // Подготавливаем данные для Gallery плагина
            const galleryItems = panoramas.map(panorama => ({
                id: panorama.id.toString(),
                panorama: panorama.url,
                thumbnail: panorama.thumbnail,
                name: panorama.title
            }));

            // Подготавливаем плагины
            const plugins = [];

            // Gallery плагин для навигации между панорамами
            @if(count($panoramas) > 1)
            if (PhotoSphereViewer.GalleryPlugin) {
                plugins.push(
                    PhotoSphereViewer.GalleryPlugin.withConfig({
                        items: galleryItems,
                        hideOnClick: true,
                        visibleOnLoad: true
                    })
                );
            }
            @endif

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

            // Инициализация Photo Sphere Viewer с плагинами
            const viewer = new PhotoSphereViewer.Viewer({
                container: document.querySelector('#viewer'),
                panorama: firstPanorama.url,
                caption: '{{ $tour->name }} <b>&bull;</b> Виртуальный тур &bull; {{ count($panoramas) }} панорам{{ count($panoramas) === 1 ? "а" : (count($panoramas) < 5 ? "ы" : "") }}',
                // Добавляем кастомную кнопку планировки в navbar
                @if($floorPlan)
                navbar: [
                    'zoom',
                    'move',
                    floorPlanButton,
                    @if(count($panoramas) > 1)'gallery',@endif
                    'description',
                    'caption',
                    'fullscreen'
                ],
                @endif
                defaultZoomLvl: 50,
                moveSpeed: 5.0,
                zoomSpeed: 2.0,
                plugins: plugins
            });

            console.log('Photo Sphere Viewer инициализирован с плагинами:', {
                gallery: {{ count($panoramas) > 1 ? 'true' : 'false' }},
                map: {{ $floorPlan ? 'true' : 'false' }}
            });
        });
    </script>
</body>
</html>
