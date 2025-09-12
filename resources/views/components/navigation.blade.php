<livewire:main-menu />


{{--<nav x-data="{ open: false }">
    <div class="relative z-10 " x-data="{mobilebutton: 0}">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex justify-between items-center py-3">
                <div class="flex justify-start lg:w-0 lg:flex-1 text-gray-800">
                    <a href="">
                        <span class="sr-only">ЖК Благовещенка</span>
                        <img class="h-10 w-auto sm:h-10" src="{{ asset('images/logo-blago.svg') }}" alt="ЖК Благовещенка"/>
                    </a>
                </div>
                <div class="lg:hidden">
                    <a href="tel:+73833499062" class="bg-white bg-opacity-75 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                       aria-expanded="false">
                        <svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                    </a>
                    <button type="button" @click.prevent="mobilebutton = 1" class="bg-white bg-opacity-75 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                            aria-expanded="false">
                        <span class="sr-only">Open menu</span>
                        <!-- Heroicon name: outline/menu -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
                <nav class="hidden lg:flex space-x-5">
                    <div class="relative">
                        <a href="#" class="text-gray-800 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                aria-expanded="false">
                            О микрорайоне
                        </a>
                    </div>
                    <div x-data="{ dropdownSale: false }" class="relative">
                        <button @click="dropdownSale = !dropdownSale" type="button"
                                class="text-gray-800 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                aria-expanded="false">
                            Продажа
                            <svg class="text-gray-800 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <div x-show="dropdownSale" @click="dropdownSale = false" class="fixed inset-0 h-full w-full z-10"></div>
                        <div x-show="dropdownSale" class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                    <a href="" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                        <span class="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-teal-600 to-green-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-shrink-0 h-6 w-6 text-white">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                            </svg>
                                         </span>
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">
                                                Квартиры
                                            </p>
                                            <p class="mt-1 text-sm text-gray-500">
                                                Можно добавить любое кратное описание раздела.
                                            </p>
                                        </div>
                                    </a>

                                    <a href="" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                        <span class="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-teal-600 to-green-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  class="flex-shrink-0 h-6 w-6 text-white">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                                            </svg>
                                        </span>
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">
                                                Таунхаусы
                                            </p>
                                            <p class="mt-1 text-sm text-gray-500">
                                                Можно добавить любое кратное описание раздела.
                                            </p>
                                        </div>
                                    </a>

                                    <a href="" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                        <span class="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-teal-600 to-green-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-shrink-0 h-6 w-6 text-white">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                            </svg>
                                        </span>
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">
                                                Нежилые помещения
                                            </p>
                                            <p class="mt-1 text-sm text-gray-500">
                                                Можно добавить любое кратное описание раздела.
                                            </p>
                                        </div>
                                    </a>

                                    <a href="" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                        <span class="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-teal-600 to-green-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-shrink-0 h-6 w-6 text-white">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                            </svg>
                                        </span>
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">
                                                Земельные участки
                                            </p>
                                            <p class="mt-1 text-sm text-gray-500">
                                                Можно добавить любое кратное описание раздела.
                                            </p>
                                        </div>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div x-data="{ dropdownLease: false }" class="relative">
                        <button @click="dropdownLease = !dropdownLease" type="button"
                                class="text-gray-800 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                aria-expanded="false">
                            Аренда
                            <svg class="text-gray-800 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <div x-show="dropdownLease" @click="dropdownLease = false" class="fixed inset-0 h-full w-full z-10"></div>
                        <div x-show="dropdownLease" class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                    <a href="" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                        <span class="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-teal-600 to-green-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-shrink-0 h-6 w-6 text-white">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                            </svg>
                                        </span>
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">
                                                Нежилые помещения
                                            </p>
                                            <p class="mt-1 text-sm text-gray-500">
                                                Можно добавить любое кратное описание раздела.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div x-data="{ dropdownMore: false }" class="relative">
                        <button @click="dropdownMore = !dropdownMore" type="button"
                                class="text-gray-800 group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                aria-expanded="false">
                            Дополнительно
                            <svg class="text-gray-800 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <div x-show="dropdownMore" @click="dropdownMore = false" class="fixed inset-0 h-full w-full z-10"></div>
                        <div x-show="dropdownMore" class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">


                                    <a href="" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                        <svg class="flex-shrink-0 h-6 w-6 text-neos" xmlns="http://www.w3.org/2000/svg"
                                             fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                        </svg>
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">
                                                Политика конфиденциальности
                                            </p>
                                            <p class="mt-1 text-sm text-gray-500">
                                                Поймите, как мы серьезно относимся к вашей конфиденциальности.
                                            </p>
                                        </div>
                                    </a>

                                    <a href="" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                        <svg class="flex-shrink-0 h-6 w-6 text-neos" xmlns="http://www.w3.org/2000/svg"
                                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                                        </svg>
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">
                                                Пользовательское соглашение
                                            </p>
                                            <p class="mt-1 text-sm text-gray-500">
                                                Поймите, условия использования материалов и сервисов сайта.
                                            </p>
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <a href="#" class="text-gray-800 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neos-dark"
                           aria-expanded="false">
                            Контакты
                        </a>
                    </div>
                </nav>
            </div>
        </div>
        --}}{{-- мобильное меню --}}{{--
        <div x-show="mobilebutton === 1" class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div class="pt-5 pb-6 px-5">
                    <div class="flex items-center justify-between">
                        <div>
                            <img class="h-8 w-auto" src="{{ asset('images/logo-blago.svg') }}" alt="ЖК Благовещенка">
                        </div>
                        <div class="-mr-2">
                            <button type="button" @click.prevent="mobilebutton = 0"
                                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span class="sr-only">Close menu</span>
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="mt-6">
                        <nav class="grid gap-y-8">
                            <a href="" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                <span class="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-teal-600 to-green-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-shrink-0 h-6 w-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </span>
                                <span class="ml-3 text-base font-medium text-gray-900">
                                    О микрорайоне
                                </span>
                            </a>
                            <h3 class="text-base font-medium text-gray-500">Продажа</h3>
                            <a href="" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                <span class="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-teal-600 to-green-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-shrink-0 h-6 w-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                    </svg>
                                </span>

                                <span class="ml-3 text-base font-medium text-gray-900">
                                    Квартиры
                                </span>
                            </a>

                            <a href="" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                <span class="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-teal-600 to-green-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  class="flex-shrink-0 h-6 w-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                                    </svg>
                                </span>

                                <span class="ml-3 text-base font-medium text-gray-900">
                                    Таунхаусы
                                </span>
                            </a>

                            <a href="" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                <span class="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-teal-600 to-green-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-shrink-0 h-6 w-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                    </svg>
                                </span>
                                <span class="ml-3 text-base font-medium text-gray-900">
                                    Нежилые помещения
                                </span>
                            </a>

                            <a href="" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                <span class="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-teal-600 to-green-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-shrink-0 h-6 w-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                    </svg>
                                </span>
                                <span class="ml-3 text-base font-medium text-gray-900">
                                    Земельные участки
                                </span>
                            </a>
                            <h3 class="text-base font-medium text-gray-500">Аренда</h3>
                            <a href="" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                <span class="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-teal-600 to-green-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-shrink-0 h-6 w-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                    </svg>
                                </span>
                                <span class="ml-3 text-base font-medium text-gray-900">
                                    Нежилые помещения
                                </span>
                            </a>
                        </nav>
                    </div>
                </div>
                <div class="py-6 px-5 space-y-6">
                    <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                        --}}{{--<a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                            Цены
                        </a>
                        <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                            Блог
                        </a>--}}{{--

                        <a href="" class="text-base font-medium text-gray-900 hover:text-gray-700">
                            Политика конфиденциальности
                        </a>

                        <a href="" class="text-base font-medium text-gray-900 hover:text-gray-700">
                            Пользовательское соглашение
                        </a>
                    </div>
                    <div>
                        <a href="" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-neos hover:bg-neos-dark">
                            Вход
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</nav>--}}

