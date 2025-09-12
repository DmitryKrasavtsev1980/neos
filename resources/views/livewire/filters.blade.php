<div id="start-block" x-data="{filterbutton: 0}">
    <!--Mobile filter dialog-->
    <div x-show="filterbutton === 1" class="relative z-40" role="dialog" aria-modal="true">
        <!--
          Off-canvas menu backdrop, show/hide based on off-canvas menu state.

          Entering: "transition-opacity ease-linear duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "transition-opacity ease-linear duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="fixed inset-0 bg-black bg-opacity-25"></div>

        <div class="fixed inset-0 z-40 flex">
            <!--
              Off-canvas menu, show/hide based on off-canvas menu state.

              Entering: "transition ease-in-out duration-300 transform"
                From: "translate-x-full"
                To: "translate-x-0"
              Leaving: "transition ease-in-out duration-300 transform"
                From: "translate-x-0"
                To: "translate-x-full"
            -->
            <div
                class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-gray-100 pt-4 shadow-xl">
                <div class="flex items-center justify-between px-4">
                    <h2 class="text-lg font-medium text-gray-900">Фильтры</h2>
                    <button type="button" @click.prevent="filterbutton = 0"
                            class="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Close menu</span>
                        <!-- Heroicon name: outline/x-mark -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>

                <!-- Filters -->
                <form class="mt-4 bg-gray-100">
                    <div class="border-t border-gray-200 pt-4 pb-4">
                        {{--<fieldset>
                            <legend class="w-full px-2">
                                <!-- Expand/collapse section button -->
                                <button type="button"
                                        class="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500"
                                        aria-controls="filter-section-1" aria-expanded="false">
                                    <span class="text-sm font-medium text-gray-900">Я хочу</span>
                                    --}}{{--<span class="ml-6 flex h-7 items-center">
                                                  <!--
                                                    Expand/collapse icon, toggle classes based on section open state.

                                                    Heroicon name: mini/chevron-down

                                                    Open: "-rotate-180", Closed: "rotate-0"
                                                  -->
                                                  <svg class="rotate-0 h-5 w-5 transform"
                                                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                       fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                          clip-rule="evenodd"/>
                                                  </svg>
                                                </span>--}}{{--
                                </button>
                            </legend>
                            <div class="px-4 pt-4 pb-2" id="filter-section-1">
                                <div class="space-y-6">
                                    @foreach($typeoperations as $item)
                                        <div>
                                            <input type="checkbox" id="typeoperations_{{ $item->id }}"
                                                   wire:model="filters.typeoperations" value="{{ $item->id }}"
                                                   class="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-600">
                                            <label for="categories_{{ $item->id }}" class="ml-3 text-sm text-gray-500">
                                                {{ $item->filter_title }} ({{ $item->products_count }})
                                            </label>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        </fieldset>--}}
                        <fieldset>
                            <legend class="w-full px-2">
                                <!-- Expand/collapse section button -->
                                <button type="button"
                                        class="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500"
                                        aria-controls="filter-section-1" aria-expanded="false">
                                    <span class="text-sm font-medium text-gray-900">Категории недвижимости</span>
                                    {{--<span class="ml-6 flex h-7 items-center">
                                                  <!--
                                                    Expand/collapse icon, toggle classes based on section open state.

                                                    Heroicon name: mini/chevron-down

                                                    Open: "-rotate-180", Closed: "rotate-0"
                                                  -->
                                                  <svg class="rotate-0 h-5 w-5 transform"
                                                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                       fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                          clip-rule="evenodd"/>
                                                  </svg>
                                                </span>--}}
                                </button>
                            </legend>
                            <div class="px-4 pt-4 pb-2" id="filter-section-1">
                                <div class="space-y-6">
                                    @foreach($categories as $item)
                                        <div>
                                            <input type="checkbox" id="categories_{{ $item->id }}"
                                                   wire:model="filters.categories" value="{{ $item->id }}"
                                                   class="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-600">
                                            <label for="categories_{{ $item->id }}" class="ml-3 text-sm text-gray-500">
                                                {{ $item->title }} ({{ $item->products_count }})
                                            </label>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend class="w-full px-2">
                                <!-- Expand/collapse section button -->
                                <button type="button"
                                        class="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500"
                                        aria-controls="filter-section-1" aria-expanded="false">
                                    <span class="text-sm font-medium text-gray-900">Количество комнат</span>
                                    {{--<span class="ml-6 flex h-7 items-center">
                                                  <!--
                                                    Expand/collapse icon, toggle classes based on section open state.

                                                    Heroicon name: mini/chevron-down

                                                    Open: "-rotate-180", Closed: "rotate-0"
                                                  -->
                                                  <svg class="rotate-0 h-5 w-5 transform"
                                                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                       fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                          clip-rule="evenodd"/>
                                                  </svg>
                                                </span>--}}
                                </button>
                            </legend>
                            <div class="px-4 pt-4 pb-2" id="filter-section-1">
                                <div class="space-y-6">
                                    @foreach($rooms as $item)
                                        <div>
                                            <input type="checkbox" id="rooms_{{ $item->id }}"
                                                   wire:model="filters.rooms" value="{{ $item->id }}"
                                                   class="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-600">
                                            <label for="categories_{{ $item->id }}" class="ml-3 text-sm text-gray-500">
                                                {{ $item->title }} ({{ $item->products_count }})
                                            </label>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        </fieldset>
                        {{--<fieldset>
                            <legend class="w-full px-2">
                                <!-- Expand/collapse section button -->
                                <button type="button"
                                        class="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500"
                                        aria-controls="filter-section-1" aria-expanded="false">
                                    <span class="text-sm font-medium text-gray-900">Жилые комплексы</span>
                                    --}}{{--<span class="ml-6 flex h-7 items-center">
                                                  <!--
                                                    Expand/collapse icon, toggle classes based on section open state.

                                                    Heroicon name: mini/chevron-down

                                                    Open: "-rotate-180", Closed: "rotate-0"
                                                  -->
                                                  <svg class="rotate-0 h-5 w-5 transform"
                                                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                       fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                          clip-rule="evenodd"/>
                                                  </svg>
                                                </span>--}}{{--
                                </button>
                            </legend>
                            <div class="px-4 pt-4 pb-2" id="filter-section-1">
                                <div class="space-y-6">
                                    @foreach($complexes as $item)
                                        <div>
                                            <input type="checkbox" id="complexes_{{ $item->id }}"
                                                   wire:model="filters.complexes" value="{{ $item->id }}"
                                                   class="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-600">
                                            <label for="complexes_{{ $item->id }}" class="ml-3 text-sm text-gray-500">
                                                {{ $item->name }} ({{ $item->products_count }})
                                            </label>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        </fieldset>--}}
                        <fieldset>
                            <legend class="w-full px-2">
                                <!-- Expand/collapse section button -->
                                <button type="button"
                                        class="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500"
                                        aria-controls="filter-section-1" aria-expanded="false">
                                    <span class="text-sm font-medium text-gray-900">Цена</span>
                                    {{--<span class="ml-6 flex h-7 items-center">
                                                  <!--
                                                    Expand/collapse icon, toggle classes based on section open state.

                                                    Heroicon name: mini/chevron-down

                                                    Open: "-rotate-180", Closed: "rotate-0"
                                                  -->
                                                  <svg class="rotate-0 h-5 w-5 transform"
                                                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                       fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                          clip-rule="evenodd"/>
                                                  </svg>
                                    </span>--}}
                                </button>
                            </legend>
                            <div class="px-4 pt-4 pb-2" id="filter-section-1">
                                <div class="space-y-6">
                                    <div class="flex flex-nowrap">
                                        <input type="text" wire:model="filters.prices.0"
                                               class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                               placeholder="0" aria-describedby="price-currency">
                                        <input type="text" wire:model="filters.prices.1"
                                               class="block ml-2 w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                               placeholder="0" aria-describedby="price-currency">
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="mx-auto max-w-2xl lg:max-w-7xl">
        <div class="border-b border-gray-200 pb-10">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900">Каталог недвижимости</h1>
        </div>

        <div class="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
                <h2 class="sr-only">Фильтры</h2>

                <button type="button" @click.prevent="filterbutton = 1" class="inline-flex items-center lg:hidden">
                    <svg class="mr-2 h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                              d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                              clip-rule="evenodd"/>
                    </svg>
                    <span class="text-sm font-medium text-gray-700">Фильтры</span>
                    <!-- Heroicon name: mini/plus -->
                    <svg x-show="filterbutton === 0" class="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path
                            d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"/>
                    </svg>
                    <svg x-show="filterbutton === 1" class="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4"/>
                    </svg>
                </button>

                <div class="hidden lg:block">
                    <form class="space-y-10 divide-y divide-gray-200">

                        {{--<div>
                            <div class="block text-sm font-medium text-gray-900">Я хочу</div>
                            <span class="isolate inline-flex rounded-md shadow-sm pt-6 w-full">
                                <button type="checkbox" id="operation_1" wire:model="filters.operation" value="1" class="relative w-full items-center rounded-l-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">Купить</button>
                                <button type="checkbox" id="operation_2" wire:model="filters.operation" value="2" class="relative w-full -ml-px items-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">Снять</button>
                                <button type="checkbox" id="operation_3" wire:model="filters.operation" value="3" class="relative w-full -ml-px items-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">Продать</button>
                                <button type="checkbox" id="operation_4" wire:model="filters.operation" value="4" class="relative w-full -ml-px items-center rounded-r-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">Сдать</button>
                            </span>
                        </div>--}}

                        {{--<div>
                            <fieldset>
                                <legend class="block text-sm font-medium text-gray-900">Я хочу</legend>
                                <div class="space-y-3 pt-6">
                                    @foreach($typeoperations as $item)
                                        <div class="flex items-center">
                                            <input type="checkbox" id="typeoperations_{{ $item->id }}"
                                                   wire:model="filters.typeoperations" value="{{ $item->id }}"
                                                   class="h-5 w-5 rounded border-gray-300 text-gray-600 focus:ring-gray-600">
                                            <label for="typeoperations_{{ $item->id }}" class="ml-3 text-sm text-gray-600">
                                                {{ $item->filter_title }} ({{ $item->products_count }})
                                            </label>
                                        </div>
                                    @endforeach
                                </div>
                            </fieldset>
                        </div>--}}

                        <div>
                            <fieldset>
                                <legend class="block text-sm font-medium text-gray-900">Категории недвижимости</legend>
                                <div class="space-y-3 pt-6 pl-1">
                                    @foreach($categoriesCount as $item)
                                        <div class="flex items-center">
                                            <input type="checkbox" id="categories_{{ $item->id }}"
                                                   wire:model="filters.categories" value="{{ $item->id }}"
                                                   class="h-5 w-5 rounded border-gray-300 text-gray-600 focus:ring-gray-600">
                                            <label for="categories_{{ $item->id }}" class="ml-3 text-sm text-gray-600">
                                                {{ $item->title }} ({{ $item->products_count }})
                                            </label>
                                        </div>
                                    @endforeach
                                </div>
                            </fieldset>
                        </div>

                        <div class="pt-10">
                            <fieldset>
                                <legend class="block text-sm font-medium text-gray-900">Количество комнат</legend>
                                <div class="space-y-3 pt-6 pl-1">
                                    @foreach($rooms as $item)
                                        <div class="flex items-center">
                                            <input type="checkbox" id="rooms_{{ $item->id }}"
                                                   wire:model="filters.rooms" value="{{ $item->id }}"
                                                   class="h-5 w-5 rounded border-gray-300 text-gray-600 focus:ring-gray-600">
                                            <label for="rooms_{{ $item->id }}" class="ml-3 text-sm text-gray-600">
                                                {{ $item->title }} ({{ $item->products_count }})
                                            </label>
                                        </div>
                                    @endforeach
                                </div>
                            </fieldset>
                        </div>

                        {{--<div class="pt-10">
                            <div class="block text-sm font-medium text-gray-900">Количество комнат</div>
                            <span class="isolate inline-flex rounded-md shadow-sm pt-6 w-full">
                                <button type="checkbox" id="rooms_0" wire:model="filters.rooms" value="0" class="relative w-full items-center rounded-l-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">Студия</button>
                                <button type="checkbox" id="rooms_1" wire:model="filters.rooms" value="1" class="relative w-full -ml-px items-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">1</button>
                                <button type="checkbox" id="rooms_2" wire:model="filters.rooms" value="2" class="relative w-full -ml-px items-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">2</button>
                                <button type="checkbox" id="rooms_3" wire:model="filters.rooms" value="3" class="relative w-full -ml-px items-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">3</button>
                                <button type="checkbox" id="rooms_4" wire:model="filters.rooms" value="4" class="relative w-full -ml-px items-center rounded-r-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">4+</button>
                            </span>
                        </div>--}}

                        {{--<div class="pt-10">
                            <fieldset>
                                <legend class="block text-sm font-medium text-gray-900">Жилые комплексы</legend>
                                <div class="space-y-3 pt-6">
                                    @foreach($complexes as $item)
                                        <div class="flex items-center">
                                            <input type="checkbox" id="complexes_{{ $item->id }}"
                                                   wire:model="filters.complexes" value="{{ $item->id }}"
                                                   class="h-5 w-5 rounded border-gray-300 text-gray-600 focus:ring-gray-600">
                                            <label for="complexes_{{ $item->id }}" class="ml-3 text-sm text-gray-600">
                                                {{ $item->name }} ({{ $item->products_count }})
                                            </label>
                                        </div>
                                    @endforeach
                                </div>
                            </fieldset>
                        </div>--}}

                        <div class="pt-10">
                            <div class="block text-sm font-medium text-gray-900">Цена</div>
                            <div class="flex flex-nowrap mt-6">
                                <input type="text" wire:model="filters.prices.0"
                                       class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                       placeholder="0" aria-describedby="price-currency">
                                <input type="text" wire:model="filters.prices.1"
                                       class="block ml-2 w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                       placeholder="0" aria-describedby="price-currency">
                            </div>
                        </div>

                    </form>
                </div>
            </aside>
            <!-- Product grid -->
            <div class="relative mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
                <!-- Replace with your content -->
                <div class="rounded-lg h-full">
                    <div>
                        <div class="mb-6">
                            <span class="isolate inline-flex rounded-md pt-2 w-full">
                                <a href="#" wire:click="sort('price')" class="block flex flex-nowrap text-sm font-semibold text-gray-600 hover:text-gray-900">
                                    <span class="block">Сортировать по цене</span>
                                    @if($currentField == "price")
                                        <svg class="w-4 block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    @if($currentType == "DESC") d="M19 9l-7 7-7-7" @else d="M5 15l7-7 7 7" @endif />
                                        </svg>
                                    @endif
                                </a>
                            </span>
                        </div>
                    </div>
                    <div class="mb-6">
                        {{ $products->onEachSide(0)->links('livewire.centered-pagination-links-view') }}
                    </div>
                    <div
                        class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 xl:grid-cols-2 lg:gap-x-8">
                        @foreach($products as $product)
                            <div
                                class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
                                <div
                                    class="aspect-w-3 aspect-h-3 bg-gray-200 group-hover:opacity-85 sm:aspect-none sm:h-72">
                                    @if($product->images)
                                        <img src="{{ $product->images[0] }}" alt="foto"
                                             class="h-96 w-full object-cover object-center sm:h-full sm:w-full">
                                    @else
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             class="stroke-1 h-full w-full object-cover object-center sm:h-full sm:w-full"
                                             fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                        </svg>
                                    @endif
                                </div>
                                <div class="flex flex-1 flex-col space-y-2 p-4">
                                    <h3 class="text-sm font-medium text-gray-900">
                                        <a href="{{ route('filamentPage', ['product', $product->id]) }}"
                                           target="_blank">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            {{ $product->title }}
                                        </a>
                                    </h3>
                                    <p class="text-sm text-gray-500">{{ $product->address }}</p>
                                    <div class="flex flex-1 flex-col justify-end">
                                        @if($product->floor && $product->floors)
                                            <p class="text-sm italic text-gray-500">Этаж {{ $product->floor }}
                                                /{{ $product->floors }}</p>
                                        @endif
                                        @if($product->total_area)
                                            <p class="text-sm italic text-gray-500">Общая
                                                площадь {{ $product->total_area }} м2</p>
                                        @endif
                                        @if($product->land_area)
                                            <p class="text-sm italic text-gray-500">Площадь
                                                участка {{ $product->land_area }} соток</p>
                                        @endif
                                        <p class="text-base font-medium text-gray-900">
                                            ₽ {{ number_format($product->price, 0, '', ' ') }}</p>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                    <div class="mt-6">
                        {{ $products->onEachSide(0)->links('livewire.centered-pagination-links-view') }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
