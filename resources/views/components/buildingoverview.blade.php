<div class="py-16 sm:py-24">
    <x-breadcrumbs :databreadcrumbs="$databreadcrumbs"/>
    <div class="mx-auto max-w-2xl py-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <!-- Image gallery -->
            <div class="flex flex-col-reverse">
                <div class="aspect-w-1 aspect-h-1 min-h-[500px] w-full">
                    <!-- Tab panel, show/hide based on tab state. -->
                    <div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                        @if($building->images)
                            <div class="fotorama"
                                 data-ratio="800/600"
                                 data-width="100%"
                                 data-height="450"
                                 data-allowfullscreen="true"
                                 data-nav="thumbs">
                                @foreach($building->images as $image)
                                    <a href="{{ $image }}"><img src="{{ $image }}"/></a>
                                @endforeach
                            </div>
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
                <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ $building->title }}</h1>

                {{--<div class="mt-3">
                    <h2 class="sr-only">Информация</h2>
                    <p class="text-3xl tracking-tight text-gray-900">
                        ₽ {{ number_format($building->price, 0, '', ' ') }}</p>
                </div>--}}

                <div class="mt-6 border-t border-gray-200 pt-6">
                    <h2 class="text-xl font-bold tracking-tight text-gray-700">{{ $building->address }}</h2>
                    <div class="prose prose-sm mt-4 text-gray-500">
                        <ul role="list">
                            @if($building->flat_rooms_count)
                                <li>Количество квартир: {{ $building->flat_count }}</li>
                            @endif
                            @if($building->floor)
                                <li>Этажей: {{ $building->floor_count }}</li>
                            @endif
                            @if($building->total_area)
                                <li>Общая площадь: {{ $building->total_area }} м2</li>
                            @endif
                            @if($building->start_period)
                                <li>Начало строительства: {{ $building->start_period }}</li>
                            @endif
                            @if($building->end_period)
                                <li>Окончание строительства: {{ $building->end_period }}</li>
                            @endif
                        </ul>
                    </div>
                    @if($building->attachments)
                    <h2 class="text-xl font-bold tracking-tight text-gray-700">Документы:</h2>
                    <div class="prose prose-sm mt-4 text-gray-500">
                        <ul role="list">
                            @foreach($building->attachments as $attachment)
                                <li><a href="{{ asset('storage/'.$attachment) }}" target="_blank">{{ $building->attachment_file_names[$attachment] }}</a></li>
                            @endforeach

                        </ul>
                    </div>
                    @endif
                </div>
                @if($building->text)
                <div class="mt-6 border-t border-gray-200 pt-6">
                    <h3 class="sr-only">Description</h3>
                    <div class="space-y-6 text-base text-gray-700">
                        <p>{!! $building->text !!}</p>
                    </div>
                </div>
                @endif
            </div>

        </div>
        @if($building->lat && $building->lng)
            <!-- Map info -->
            <div class="mt-6">
                <div id="map" style="width:100%; height:400px"></div>
            </div>
        @endif
    </div>
</div>
<script>
    @if($building->lat && $building->lng)
    var map = L.map('map').setView([{{ $building->lat }}, {{ $building->lng }}], 16);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([{{ $building->lat }}, {{ $building->lng }}]).addTo(map);
    @endif
</script>

