@if ($content['position-color'] == 'sticky')
    <style>
        .navbar-fixed-top.scrolled {
            --tw-gradient-from: {{ $content['background-color-from'] }};
            --tw-gradient-to: {{ $content['background-color-to'] }};
        }
    </style>
@endif
<nav class="relative" x-data="{ open: false }">
    @if ($content['background-color-from'] && $content['background-color-to'])
        @if ($content['position-color'] == 'sticky')
            <div class="{{ $content['position'] }} top-0 left-0 right-0 z-10 bg-gradient-to-r from-transparent navbar-fixed-top" x-data="{mobilebutton: 0}">
        @else
            <div class="{{ $content['position'] }} top-0 left-0 right-0 z-10 bg-gradient-to-r from-transparent" x-data="{mobilebutton: 0}"
                 style="--tw-gradient-from: {{ $content['background-color-from'] }}; --tw-gradient-to: {{ $content['background-color-to'] }};">
        @endif
    @else
        <div class="{{ $content['position'] }} top-0 left-0 right-0 z-10" x-data="{mobilebutton: 0}">
    @endif
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex justify-between items-center py-3">
                <div class="flex justify-start lg:w-0 lg:flex-1 text-gray-800">
                    <a href="{{ route('HomePage') }}">
                        <span class="sr-only">Home page</span>
                        @isset($content['logo'])
                        <img class="{{ (isset($content['hight_desktop']) ? 'h-'.$content['hight_desktop'] : 'h-10') }} w-auto" src="{{ asset($content['logo']) }}" alt="ЖК Благовещенка"/>
                        @endisset
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
                    @foreach($content['members'] as $key => $itemMenu)
                        @if($itemMenu['type'] == 'folder')
                            <div x-data="{ dropdown{{ $key }}: false }" class="relative">
                                <button @click="dropdown{{ $key }} = !dropdown{{ $key }}" type="button"
                                        class="text-gray-800 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                        aria-expanded="false">
                                    {{ $itemMenu['lable'] }}
                                    <svg class="text-gray-800 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                                <div x-show="dropdown{{ $key }}" @click="dropdown{{ $key }} = false" class="fixed inset-0 h-full w-full z-10"></div>
                                <div x-show="dropdown{{ $key }}" class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                            @foreach($itemMenu['submembers'] as $item)
                                                @if($item['url'])
                                                    <a href="{{ route('filamentPage', $item['url']) }}" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                        <svg class="h-6 w-6 flex-shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                                                        </svg>
                                                        <div class="ml-4">
                                                            <p class="text-base font-medium text-gray-900">
                                                                {{ $item['lable'] }}
                                                            </p>
                                                        </div>
                                                    </a>
                                                @else
                                                    <div class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                        <div class="ml-4">
                                                            <p class="text-base font-medium text-gray-900">
                                                                {{ $item['lable'] }}
                                                            </p>
                                                        </div>
                                                    </div>
                                                @endif
                                            @endforeach
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @else
                            <div class="relative">
                                <a href="{{ route('filamentPage', $itemMenu['url']) }}" class="text-gray-800 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                   aria-expanded="false">
                                   {{ $itemMenu['lable'] }}
                                </a>
                            </div>
                        @endif
                    @endforeach
                </nav>
            </div>
        </div>
        {{-- мобильное меню --}}
        <div x-show="mobilebutton === 1" class="{{ $content['position'] }} z-10 top-0 inset-x-0 p-2 transition transform origin-top-right">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div class="pt-5 pb-6 px-5">
                    <div class="flex items-center justify-between">
                        <div>
                            @isset($content['logo'])
                            <img class="{{ (isset($content['hight_mobile']) ? 'h-'.$content['hight_mobile'] : 'h-8') }} w-auto" src="{{ asset($content['logo']) }}" alt="Логотип">
                            @endisset
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
                            @foreach($content['members'] as $key => $itemMenu)
                                @if($itemMenu['type'] == 'folder')
                                    <h3 class="text-base font-medium text-gray-500">{{ $itemMenu['lable'] }}</h3>
                                    @foreach($itemMenu['submembers'] as $item)
                                        <a href="{{ route('filamentPage', $item['url']) }}" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                        <span class="ml-3 text-base font-medium text-gray-900">
                                            {{ $item['lable'] }}
                                        </span>
                                        </a>
                                    @endforeach
                                @else
                                    <a href="{{ route('filamentPage', $itemMenu['url']) }}" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                        <span class="ml-3 text-base font-medium text-gray-900">
                                            {{ $itemMenu['lable'] }}
                                        </span>
                                    </a>
                                @endif
                            @endforeach
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @if ($content['padding'] == 'padding-have')
        <div class="px-0 pt-5 lg:pt-6">
            <div class="px-0 {{ (isset($content['hight_desktop']) ? 'pt-'.$content['hight_desktop'] : 'pt-10') }}"></div>
        </div>
    @endif
</nav>
@if ($content['position-color'] == 'sticky')
    <script>
        $(function () {
            $(document).scroll(function () {
                var $nav = $(".navbar-fixed-top");
                $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            });
        });
    </script>
@endif
