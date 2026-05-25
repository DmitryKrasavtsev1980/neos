<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $personalPageData['page_title'] ?? $tour->name }}</title>
    <link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}">
    <!-- Vite scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <!-- Leaflet CSS -->
    <link rel="stylesheet" href="/css/leaflet.css">

    <!-- jQuery 3.7.1 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

    <!-- Swiper CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">

    <style>
        .tour-viewer {
            height: 800px;
        }

        .map-container {
            height: 400px;
        }

        @media (max-width: 768px) {
            .tour-viewer {
                height: 600px;
            }

            .map-container {
                height: 300px;
            }
        }
    </style>
    @if(config('app.env') == 'production')
        <script type="text/javascript" >
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            var z = null;m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(90242859, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
        });
        </script>
        <noscript><div><img src="https://mc.yandex.ru/watch/90242859" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    @endif
</head>
<body class="bg-white font-sans">
    <div class="max-w-7xl mx-auto p-2 sm:p-6">
        <div class="space-y-12">
            <!-- Информационный блок -->
            <div class="bg-white border border-gray-100 rounded-lg p-2 sm:p-8">
                <h1 class="text-4xl font-light text-gray-900 mb-8">{{ $personalPageData['page_title'] ?? $tour->name }}</h1>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
                    <!-- Галерея фотографий -->
                    @if(isset($personalPageData['gallery']) && $personalPageData['gallery'] && count($personalPageData['gallery']) > 0)
                    <div class="space-y-6">
                        <h3 class="text-lg font-medium text-gray-800 border-b border-gray-200 pb-3">Галерея фотографий</h3>
                        <div class="rounded-lg overflow-hidden">
                            <div class="swiper tour-gallery-swiper">
                                <div class="swiper-wrapper">
                                    @foreach($personalPageData['gallery'] as $photo)
                                        <div class="swiper-slide">
                                            <img src="{{ $photo['image'] }}" alt="{{ $photo['title'] ?? 'Фото' }}" class="w-full h-[400px] object-cover">
                                        </div>
                                    @endforeach
                                </div>
                                <div class="swiper-pagination"></div>
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>
                            </div>
                            @if(count($personalPageData['gallery']) > 1)
                            <div class="swiper tour-gallery-thumbs mt-2">
                                <div class="swiper-wrapper">
                                    @foreach($personalPageData['gallery'] as $photo)
                                        <div class="swiper-slide" style="width:80px;height:60px;">
                                            <img src="{{ $photo['image'] }}" alt="{{ $photo['title'] ?? 'Фото' }}" class="w-full h-full object-cover rounded cursor-pointer">
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                            @endif
                        </div>
                    </div>
                    @endif

                    <!-- Карта -->
                    @if($personalPageData['latitude'] && $personalPageData['longitude'])
                    <div class="space-y-6">
                        <h3 class="text-lg font-medium text-gray-800 border-b border-gray-200 pb-3">Расположение на карте</h3>
                        <div id="map" class="map-container rounded-lg overflow-hidden border border-gray-200"></div>
                    </div>
                    @endif
                </div>

                <!-- Описание -->
                @if($personalPageData['description'])
                <div class="mt-12 prose max-w-none text-gray-600 leading-relaxed">
                    {!! $personalPageData['description'] !!}
                </div>
                @endif
            </div>

            <!-- Секция виртуального тура -->
            <div class="bg-white border border-gray-100 rounded-lg p-2 sm:p-8">
                <h2 class="text-2xl font-light text-gray-900 mb-8 border-b border-gray-200 pb-4">Виртуальный тур</h2>
                <div id="viewer" class="tour-viewer w-full rounded-lg overflow-hidden border border-gray-200 relative">
                    <!-- Планировка как модальное окно привязанное к блоку тура -->
                    @if($floorPlan)
                    <div id="floor-plan" class="absolute top-4 right-4 w-80 h-80 bg-black bg-opacity-80 rounded-lg p-2 hidden z-50">
                        <img src="{{ $floorPlan }}" alt="Планировка" class="w-full h-full object-contain rounded">
                    </div>
                    @endif
                </div>
            </div>
        </div>
    </div>

    <!-- Leaflet JS -->
    <script src="/js/leaflet.js"></script>

    <!-- Swiper JS -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Инициализация Swiper галереи
            var thumbsEl = document.querySelector('.tour-gallery-thumbs');
            var thumbsConfig = thumbsEl ? { thumbs: { swiper: new Swiper(thumbsEl, { spaceBetween: 4, slidesPerView: 'auto', freeMode: true, watchSlidesProgress: true }) } } : {};
            new Swiper('.tour-gallery-swiper', Object.assign({
                spaceBetween: 8,
                navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
                pagination: { el: '.swiper-pagination', clickable: true }
            }, thumbsConfig));

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

            // Планировка как модальное окно
            @if($floorPlan)
            function toggleFloorPlan() {
                const floorPlan = document.getElementById('floor-plan');
                if (floorPlan) {
                    if (floorPlan.style.display === 'none' || floorPlan.style.display === '') {
                        floorPlan.style.display = 'block';
                    } else {
                        floorPlan.style.display = 'none';
                    }
                }
            }

            // Кастомная кнопка планировки для navbar
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
                caption: '{{ $personalPageData["page_title"] ?? $tour->name }}',
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
                moveSpeed: 4.0,
                zoomSpeed: 1.0,
                plugins: plugins
            });

            console.log('Photo Sphere Viewer инициализирован');

            // Инициализация карты Leaflet
            @if($personalPageData['latitude'] && $personalPageData['longitude'])
            const map = L.map('map').setView([{{ $personalPageData['latitude'] }}, {{ $personalPageData['longitude'] }}], 15);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([{{ $personalPageData['latitude'] }}, {{ $personalPageData['longitude'] }}])
                .addTo(map)
                .bindPopup('{{ $personalPageData["page_title"] ?? $tour->name }}')
                .openPopup();
            @endif
        });
    </script>

</body>
</html>