<div class="">
    <div class="mx-auto max-w-7xl space-y-6">
        {{--категории домов--}}
        <div class="border-b border-gray-200 pb-5 sm:pb-0">
            <div class="border-b border-gray-200 pb-10">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900">Каталог домов</h1>
            </div>
            <div class="mt-3 sm:mt-4">
                <!-- Dropdown menu on small screens -->
                <div class="sm:hidden">
                    <label for="tab" class="sr-only">Select a tab</label>
                    <select id="tab" wire:model="filtersselect"
                            class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base sm:text-sm">
                        @if($filters['categories'] != [])
                            <option value="">Все</option>
                        @else
                            <option value="" selected>Все</option>
                        @endif
                        @foreach($categories as $item)

                            @if($filters['categories'] != [$item->id])
                                <option value="{{ $item->id }}">{{ $item->title }}</option>

                            @else
                                <option value="{{ $item->id }}" selected>{{ $item->title }}</option>
                            @endif
                        @endforeach
                    </select>
                </div>
                <!-- Tabs at small breakpoint and up -->
                <div class="hidden sm:block">
                    <nav class="-mb-px flex space-x-8">
                        @if($filters['categories'] != [])
                            <button wire:click="filterCategory()"
                                    class="border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">
                                Все
                            </button>
                        @else
                            <button wire:click="filterCategory()"
                                    class="border-gray-900 text-gray-900 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                                    aria-current="page">Все
                            </button>
                        @endif
                        @foreach($categories as $item)
                            @if($filters['categories'] != [] && $filters['categories'][0][0] == $item->id)
                                    <button wire:click="filterCategory({{ $item->id }})"
                                            class="border-gray-900 text-gray-900 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                                            aria-current="page">{{ $item->title }}</button>
                            @else
                                    <button wire:click="filterCategory({{ $item->id }})"
                                            class="border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">{{ $item->title }}</button>

                            @endif
                        @endforeach
                    </nav>
                </div>
            </div>
        </div>
            <!-- Building grid -->
            <div class="relative mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
                <!-- Replace with your content -->
                <div class="rounded-lg h-full">
                    <div class="mb-6">
                        {{ $buildings->onEachSide(1)->links('livewire.centered-pagination-links-view') }}
                    </div>
                    <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-3 lg:gap-x-8 sm:gap-y-8">
                        @foreach($buildings as $building)
                            <div class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
                                <div class="aspect-w-3 aspect-h-3 bg-gray-200 group-hover:opacity-85 sm:aspect-none sm:h-72">
                                    @if($building->images)
                                        <img src="{{ $building->images[0] }}" alt="foto" class="h-full w-full object-cover object-center sm:h-full sm:w-full">
                                    @else
                                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-1 h-full w-full object-cover object-center sm:h-full sm:w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    @endif
                                </div>
                                <div class="flex flex-1 flex-col space-y-2 p-4">
                                    @if($building->title)
                                        <h3 class="text-sm font-medium text-gray-900">
                                            <a href="{{ route('filamentPage', ['building', $building->id]) }}" target="_blank">
                                                <span aria-hidden="true" class="absolute inset-0"></span>
                                                {{ $building->title }}
                                            </a>
                                        </h3>
                                    @elseif($building->name)
                                        <h3 class="text-sm font-medium text-gray-900">
                                            <a href="{{ route('filamentPage', ['building', $building->id]) }}" target="_blank">
                                                <span aria-hidden="true" class="absolute inset-0"></span>
                                                {{ $building->name }}
                                            </a>
                                        </h3>
                                    @endif

                                        @if($building->complex->name)
                                            <p class="text-sm text-gray-800">{{ $building->complex->name }}</p>
                                        @endif

                                    @if($building->address)
                                        <p class="text-sm italic text-gray-800">{{ $building->address }}</p>
                                    @endif
                                    @if($building->start_period)
                                        <p class="text-sm italic text-gray-700">Начало: {{ $building->start_period }}</p>
                                    @endif
                                    @if($building->end_period)
                                        <p class="text-sm italic text-gray-700">Окончание: {{ $building->end_period }}</p>
                                    @endif
                                    <div class="flex flex-1 flex-col justify-end">
                                        @if($building->floor_count)
                                            <p class="text-sm italic text-gray-500">Этажей: {{ $building->floor_count }}</p>
                                        @endif
                                        @if($building->flat_count)
                                            <p class="text-sm italic text-gray-500">Квартир в доме: {{ $building->flat_count }}</p>
                                        @endif
                                        @if($building->total_area)
                                            <p class="text-sm italic text-gray-500">Площадь дома {{ $building->total_area }}м2</p>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                    <div class="mt-6">
                        {{ $buildings->onEachSide(1)->links('livewire.centered-pagination-links-view') }}
                    </div>
                </div>
            </div>
    </div>
</div>
