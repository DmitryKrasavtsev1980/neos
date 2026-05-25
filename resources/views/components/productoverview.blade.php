@isset($product)
<div class="py-16 sm:py-24">
    <x-breadcrumbs :databreadcrumbs="$databreadcrumbs"/>
    <div class="mx-auto max-w-2xl py-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <!-- Image gallery -->
            <div class="flex flex-col-reverse">
                <div class="aspect-w-1 aspect-h-1 min-h-[500px] w-full">
                    <!-- Tab panel, show/hide based on tab state. -->
                    <div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                        @if($product->images)
                            <div class="swiper product-gallery-swiper">
                                <div class="swiper-wrapper">
                                    @foreach($product->images as $image)
                                        <div class="swiper-slide">
                                            <img src="{{ $image }}" class="w-full h-[450px] object-cover rounded" alt=""/>
                                        </div>
                                    @endforeach
                                </div>
                                <div class="swiper-pagination"></div>
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>
                            </div>
                            @if(count($product->images) > 1)
                            <div class="swiper product-gallery-thumbs mt-2">
                                <div class="swiper-wrapper">
                                    @foreach($product->images as $image)
                                        <div class="swiper-slide" style="width:80px;height:60px;">
                                            <img src="{{ $image }}" class="w-full h-full object-cover rounded cursor-pointer" alt=""/>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                            @endif
                        @else
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 class="stroke-1 h-full w-full object-cover object-center sm:h-full sm:w-full"
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                        @endif
                    </div>
                </div>
            </div>

            <!-- Product info -->
            <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ $product->title }}</h1>

                <div class="mt-3">
                    <h2 class="sr-only">Информация</h2>
                    <p class="text-3xl tracking-tight text-gray-900">
                        ₽ {{ number_format($product->price, 0, '', ' ') }}</p>
                </div>

                <div class="mt-6 border-t border-gray-200 pt-6">
                    <h2 class="text-xl font-bold tracking-tight text-gray-700">{{ $product->address }}</h2>
                    <div class="prose prose-sm mt-4 text-gray-500">
                        <ul role="list">
                            @if($product->flat_rooms_count)
                                <li>Количество комнат {{ $product->flat_rooms_count }}</li>
                            @endif
                            @if($product->floor)
                                <li>Этаж {{ $product->floor }}</li>
                            @endif
                            @if($product->floors)
                                <li>Этажность {{ $product->floors }}</li>
                            @endif
                            @if($product->total_area)
                                <li>Общая площадь {{ $product->total_area }} м2</li>
                            @endif
                            @if($product->total_area)
                                <li>Жилая площадь {{ $product->living_area }} м2</li>
                            @endif
                            @if($product->total_area)
                                <li>Площадь кухни {{ $product->kitchen_area }} м2</li>
                            @endif
                            @if($product->total_area)
                                <li>Площадь участка {{ $product->land_area }} соток</li>
                            @endif
                        </ul>
                    </div>
                </div>

                <div class="mt-6 border-t border-gray-200 pt-6">
                    <h3 class="sr-only">Description</h3>
                    <div class="space-y-6 text-base text-gray-700">
                        @if($product->text)
                            {!! $product->text !!}
                        @endif
                    </div>
                </div>
            </div>

        </div>
        @if($product->lat && $product->lng)
            <!-- Map info -->
            <div class="mt-6">
                <div id="map" style="width:100%; height:400px"></div>
            </div>
        @endif
    </div>
</div>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var thumbsEl = document.querySelector('.product-gallery-thumbs');
        var thumbsConfig = thumbsEl ? { thumbs: { swiper: new Swiper(thumbsEl, { spaceBetween: 4, slidesPerView: 'auto', freeMode: true, watchSlidesProgress: true }) } } : {};
        new Swiper('.product-gallery-swiper', Object.assign({
            spaceBetween: 8,
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            pagination: { el: '.swiper-pagination', clickable: true }
        }, thumbsConfig));
    });

    @if($product->lat && $product->lng)
    var map = L.map('map').setView([{{ $product->lat }}, {{ $product->lng }}], 16);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([{{ $product->lat }}, {{ $product->lng }}]).addTo(map);
    @endif
</script>
@endisset
