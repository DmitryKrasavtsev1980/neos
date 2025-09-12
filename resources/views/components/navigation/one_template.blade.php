@if ($content['position-color'] == 'sticky')
    <style>
        .navbar-fixed-top.scrolled {
            --tw-gradient-from: {{ $content['background-color-from'] }};
            --tw-gradient-to: {{ $content['background-color-to'] }};
        }
    </style>
@endif
<header class="relative" x-data="{ open: false }">
    @if ($content['background-color-from'] && $content['background-color-to'])
        @if ($content['position-color'] == 'sticky')
            <div class="{{ $content['position'] }} top-0 left-0 right-0 z-30 bg-gradient-to-r from-transparent navbar-fixed-top" x-data="{mobilebutton: 0}">
        @else
            <div class="{{ $content['position'] }} top-0 left-0 right-0 z-30 bg-gradient-to-r from-transparent" x-data="{mobilebutton: 0}"
                 style="--tw-gradient-from: {{ $content['background-color-from'] }}; --tw-gradient-to: {{ $content['background-color-to'] }};">
        @endif
    @else
    <div class="{{ $content['position'] }} top-0 left-0 right-0 z-30" x-data="{mobilebutton: 0}">
    @endif
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 space-x-8 lg:px-8" aria-label="Global">
        <div class="flex lg:flex">
            <a href="{{ route('HomePage') }}" class="-m-1.5 p-1.5">
                <span class="sr-only">Home page</span>
                @isset($content['logo'])
                    <img class="{{ (isset($content['hight_desktop']) ? 'h-'.$content['hight_desktop'] : 'h-10') }} w-auto" src="{{ asset($content['logo']) }}" alt="Logo"/>
                @endisset
            </a>
        </div>
        <div class="flex-1 flex {{ $content['members-position'] }}">
        <div class="hidden lg:flex lg:gap-x-12">
            @foreach($content['members'] as $key => $itemMenu)
                @if($itemMenu['type'] == 'folder')
                    <div x-data="{ dropdown{{ $key }}: false }" class="relative">
                        @if($content['members-text-border-buttom'] == 'false')
                            <button type="button"  @click="dropdown{{ $key }} = !dropdown{{ $key }}" class="flex items-center gap-x-1 {{ $content['members-text-size'] }} font-semibold leading-6 text-gray-900" aria-expanded="false"
                                    style="color: {{ $itemMenu['button-text-color'] }};">
                                {{ $itemMenu['lable'] }}
                                <svg class="h-5 w-5 flex-none text-gray-400" style="color: {{ $itemMenu['button-text-color'] }};" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        @else
                            <button type="button"  @click="dropdown{{ $key }} = !dropdown{{ $key }}" class="{{ $content['members-text-size'] }} font-semibold leading-6 text-gray-900 group transition-all duration-300 ease-in-out" aria-expanded="false"
                                    style="color: {{ $itemMenu['button-text-color'] }};">
                                 <span class="pb-1 bg-left-bottom bg-gradient-to-r from-transparent bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-700 ease-out flex items-center gap-x-1 flex-nowrap"
                                       style="--tw-gradient-from: {{ $itemMenu['button-text-color'] }};--tw-gradient-to: {{ $itemMenu['button-text-color'] }};">
                                    {{ $itemMenu['lable'] }}
                                    <svg class="h-5 w-5 flex-none text-gray-400" style="color: {{ $itemMenu['button-text-color'] }};" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </button>
                        @endif
                        <div x-show="dropdown{{ $key }}" @click="dropdown{{ $key }} = false" class="fixed inset-0 h-full w-full z-30"></div>
                        <div x-show="dropdown{{ $key }}" class="absolute right-0 top-full z-30 mt-3 w-screen overflow-hidden {{ $itemMenu['width'] }} {{ $itemMenu['rounded'] }} bg-white {{ $itemMenu['shadow'] }} ring-1 ring-gray-900/5 bg-gradient-to-r from-transparent"
                             style="--tw-gradient-from: {{ $itemMenu['background-color-from'] }}; --tw-gradient-to: {{ $itemMenu['background-color-to'] }};">
                            <div class="{{ $itemMenu['padding'] }}">
                                @foreach($itemMenu['submembers'] as $item)
                                        <a href="{{ route('filamentPage', $item['url']) }}{{ $item['parameters'] }}" class="block flex {{ $itemMenu['items-position-button'] }} {{ $itemMenu['rounded-button'] }} {{ $itemMenu['padding-button'] }} {{ $content['members-text-size'] }} leading-6 hover:bg-gray-50 hover:bg-gradient-to-r hover:from-transparent"
                                             style="--tw-gradient-from: {{ $itemMenu['background-color-active-hover-from'] }}; --tw-gradient-to: {{ $itemMenu['background-color-active-hover-to'] }};">
                                            <div class="group flex {{ $itemMenu['items-position-button'] }} gap-x-6">
                                                @isset($item['icon'])
                                                    <span class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gradient-to-r from-transparent"
                                                          style="--tw-gradient-from: {{ $item['background-icon-color-from'] }}; --tw-gradient-to: {{ $item['background-icon-color-to'] }}">
                                                        <x-icon name="{{ $item['icon'] }}" class="flex-shrink-0 h-6 w-6"
                                                                style="color: {{ $item['icon-color'] }};"/>
                                                    </span>
                                                @endisset
                                                @isset($item['button-sub-text'])
                                                    <div class="flex-auto">
                                                        <p class="block font-semibold text-gray-900"
                                                           style="color: {{ $item['button-text-color'] }};">
                                                            {{ $item['lable'] }}
                                                        </p>
                                                        <p class="block mt-1 text-gray-600"
                                                           style="color: {{ $item['button-sub-text-color'] }};">{{ $item['button-sub-text'] }}</p>
                                                    </div>
                                                @else
                                                    <div class="flex items-center">
                                                        <p class="block font-semibold text-gray-900"
                                                           style="color: {{ $item['button-text-color'] }};">
                                                            {{ $item['lable'] }}
                                                        </p>
                                                    </div>
                                                @endisset
                                            </div>
                                        </a>
                                @endforeach
                            </div>
                            {{--<div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                <a href="#" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                                    <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z" clip-rule="evenodd" />
                                    </svg>
                                    Watch demo
                                </a>

                                <a href="#" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                                    <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
                                    </svg>
                                    Contact sales
                                </a>
                            </div>--}}
                        </div>
                    </div>
                @else
                    @if($content['members-text-border-buttom'] == 'false')
                        <a href="{{ route('filamentPage', $itemMenu['url']) }}{{ $itemMenu['parameters'] }}" class="{{ $content['members-text-size'] }} font-semibold leading-6 text-gray-900"
                           style="color: {{ $itemMenu['button-text-color'] }};">{{ $itemMenu['lable'] }}</a>
                    @else
                        <a href="{{ route('filamentPage', $itemMenu['url']) }}{{ $itemMenu['parameters'] }}" class="{{ $content['members-text-size'] }} font-semibold leading-6 text-gray-900 group transition-all duration-300 ease-in-out"
                           style="color: {{ $itemMenu['button-text-color'] }};">
                            <span class="pb-1 bg-left-bottom bg-gradient-to-r from-transparent bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-700 ease-out"
                                  style="--tw-gradient-from: {{ $itemMenu['button-text-color'] }};--tw-gradient-to: {{ $itemMenu['button-text-color'] }};">
                                {{ $itemMenu['lable'] }}
                            </span>
                        </a>
                    @endif
                @endif
            @endforeach
            {{--<div class="relative">
                <button type="button" class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" aria-expanded="false">
                    Company
                    <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                </button>

                <div class="absolute -left-8 top-full z-30 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                    <a href="#" class="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">About us</a>

                    <a href="#" class="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">Careers</a>

                    <a href="#" class="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">Support</a>

                    <a href="#" class="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">Press</a>

                    <a href="#" class="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">Blog</a>
                </div>
            </div>--}}
        </div>
        </div>
        {{--<div class="hidden lg:flex lg:flex lg:justify-end">
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
        </div>--}}
        <div class="flex lg:hidden">
            <button type="button" @click.prevent="mobilebutton = 1" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Open main menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div x-show="mobilebutton === 1" class="{{ $content['position'] }} z-30" role="dialog" aria-modal="true">
        <div class="fixed inset-0 z-30"></div>
        <div class="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
                <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Logo</span>
                    @isset($content['logo'])
                        <img class="{{ (isset($content['hight_mobile']) ? 'h-'.$content['hight_mobile'] : 'h-8') }} w-auto" src="{{ asset($content['logo']) }}" alt="Логотип">
                    @endisset
                </a>
                <button type="button" @click.prevent="mobilebutton = 0" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                    <span class="sr-only">Close menu</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">
                    <div class="space-y-2 py-6">
                        @foreach($content['members'] as $key => $itemMenu)
                            @if($itemMenu['type'] == 'folder')
                                <div class="-mx-3">
                                    <button type="button" class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
                                        {{ $itemMenu['lable'] }}
                                        <!--
                                          Expand/collapse icon, toggle classes based on menu open state.

                                          Open: "rotate-180", Closed: ""
                                        -->
                                        {{--<svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                        </svg>--}}
                                    </button>
                                    <!-- 'Product' sub-menu, show/hide based on menu state. -->
                                    <div class="mt-2 space-y-2" id="disclosure-1">
                                        @foreach($itemMenu['submembers'] as $item)
                                            <a href="{{ route('filamentPage', $item['url']) }}{{ $item['parameters'] }}" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ $item['lable'] }}</a>
                                        @endforeach
                                    </div>
                                </div>
                            @else
                                <a href="{{ route('filamentPage', $itemMenu['url']) }}{{ $itemMenu['parameters'] }}" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ $itemMenu['lable'] }}</a>
                            @endif
                        @endforeach
                    </div>
                    {{--<div class="py-6">
                        <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
                    </div>--}}
                </div>
            </div>
        </div>
    </div>
    </div>
</header>
@if ($content['position-color'] == 'sticky')
    <script>
        $(function () {
            $(document).scroll(function () {
                var $nav = $(".navbar-fixed-top");
                $nav.toggleClass('scrolled shadow-sm', $(this).scrollTop() > $nav.height());
            });
        });
    </script>
@endif
