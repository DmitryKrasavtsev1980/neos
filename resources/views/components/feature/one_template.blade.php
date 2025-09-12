@isset($content)
    @if ($content['image-position'] == 'image-right')
        @if ($content['background-color-from'] && $content['background-color-to'])
            <div class="relative py-6 sm:py-12 overflow-hidden bg-gradient-to-r from-transparent"
                 style="--tw-gradient-from: {{ $content['background-color-from'] }}; --tw-gradient-to: {{ $content['background-color-to'] }}">
        @else
            <div class="relative py-6 sm:py-12 overflow-hidden">
        @endif
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
                    <div class="lg:pt-4 lg:pr-4">
                        <div class="mt-6">
                            <div class="flex flex-nowrap items-center">
                                @isset($content['icon'])
                                <div>
                                        <span
                                            class="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-transparent"
                                            style="--tw-gradient-from: {{ $content['background-icon-color-from'] }}; --tw-gradient-to: {{ $content['background-icon-color-to'] }}">
                                            <x-icon name="{{ $content['icon'] }}" class="flex-shrink-0 h-6 w-6"
                                                    style="color: {{ $content['icon-color'] }};"/>
                                        </span>
                                </div>
                                @endisset
                                @isset($content['title'])
                                <div class="ml-4">
                                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-transparent"
                                        style="--tw-gradient-from: {{ $content['title-text-color-from'] }}; --tw-gradient-to: {{ $content['title-text-color-to'] }}">{{ $content['title'] }}</h2>
                                </div>
                                @endisset
                            </div>
                            @isset($content['subtitle'])
                            <p class="mt-4 text-lg text-gray-500 bg-clip-text text-transparent bg-gradient-to-r from-transparent"
                               style="--tw-gradient-from: {{ $content['subtitle-text-color-from'] }}; --tw-gradient-to: {{ $content['subtitle-text-color-to'] }}">{{ $content['subtitle'] }}</p>
                            @endisset
                            @isset($content['url'])
                            <div class="mt-6">
                                <a href="{{ route('filamentPage', $content['url']) }}{{ $content['parameters'] }}"
                                   class="inline-flex rounded-md border border-transparent bg-origin-border px-4 py-2 text-base font-medium shadow-sm bg-gradient-to-r from-transparent"
                                   style="--tw-gradient-from: {{ $content['button-background-color-from'] }}; --tw-gradient-to: {{ $content['button-background-color-to'] }}; color: {{ $content['button-text-color'] }};">
                                    @isset($content['button-text'])
                                    {{ $content['button-text'] }}
                                    @endisset
                                </a>
                            </div>
                            @endisset
                        </div>
                    </div>
                @isset($content['feature-image'])
                    <img class="w-full max-w-none max-h-96 rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:ml-0"
                         src="{{ asset($content['feature-image']) }}" alt="">
                @endisset
                </div>
            </div>
            </div>
        @else
        @if ($content['background-color-from'] && $content['background-color-to'])
            <div class="relative py-6 sm:py-12 overflow-hidden bg-gradient-to-r from-transparent"
                 style="--tw-gradient-from: {{ $content['background-color-from'] }}; --tw-gradient-to: {{ $content['background-color-to'] }}">
        @else
            <div class="relative py-6 sm:py-12 overflow-hidden">
        @endif
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div class="lg:ml-auto lg:pt-4 lg:pl-4">
                        <div class="mt-6">
                                <div class="flex flex-nowrap items-center">
                                    @isset($content['icon'])
                                        <div>
                                            <span
                                                class="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-transparent"
                                                style="--tw-gradient-from: {{ $content['background-icon-color-from'] }}; --tw-gradient-to: {{ $content['background-icon-color-to'] }}">
                                                <x-icon name="{{ $content['icon'] }}" class="flex-shrink-0 h-6 w-6"
                                                        style="color: {{ $content['icon-color'] }};"/>
                                            </span>
                                        </div>
                                    @endisset
                                    @isset($content['title'])
                                        <div class="ml-4">
                                            <h2 class="text-3xl font-bold tracking-tight text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-transparent"
                                                style="--tw-gradient-from: {{ $content['title-text-color-from'] }}; --tw-gradient-to: {{ $content['title-text-color-to'] }}">{{ $content['title'] }}</h2>
                                        </div>
                                    @endisset
                                </div>
                                @isset ($content['subtitle'])
                                <p class="mt-4 text-lg text-gray-500 bg-clip-text text-transparent bg-gradient-to-r from-transparent"
                                   style="--tw-gradient-from: {{ $content['subtitle-text-color-from'] }}; --tw-gradient-to: {{ $content['subtitle-text-color-to'] }}">{{ $content['subtitle'] }}</p>
                                @endisset
                                @isset ($content['url'])
                                <div class="mt-6">
                                    <a href="{{ route('filamentPage', $content['url']) }}{{ $content['parameters'] }}"
                                       class="inline-flex rounded-md border border-transparent bg-origin-border px-4 py-2 text-base font-medium shadow-sm bg-gradient-to-r from-transparent"
                                       style="--tw-gradient-from: {{ $content['button-background-color-from'] }}; --tw-gradient-to: {{ $content['button-background-color-to'] }}; color: {{ $content['button-text-color'] }};">
                                        @isset ($content['button-text'])
                                        {{ $content['button-text'] }}
                                        @endisset
                                    </a>
                                </div>
                                @endisset
                        </div>
                    </div>
                    <div class="flex items-start justify-end lg:order-first">
                    @isset ($content['feature-image'])
                        <img class="sm:-ml-48 w-full max-w-none max-h-96 rounded-xl shadow-xl ring-1 ring-gray-400/10"
                             src="{{ asset($content['feature-image']) }}"
                             alt="">
                    @endisset
                    </div>
                </div>
            </div>
            </div>
    @endif
@endisset
{{--@isset($content)
                @if ($content['image-position'] == 'image-right')
                    @if ($content['background-color-from'] && $content['background-color-to'])
                        <div class="relative py-6 sm:py-12 overflow-hidden bg-gradient-to-r from-transparent"
                             style="--tw-gradient-from: {{ $content['background-color-from'] }}; --tw-gradient-to: {{ $content['background-color-to'] }}">
                            @else
                                <div class="relative py-6 sm:py-12 overflow-hidden">
                                    @endif
                                    <div class="mx-auto max-w-7xl px-6 lg:px-8">
                                        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
                                            <div class="lg:pt-4 lg:pr-4">
                                                @isset($content['icon'])
                                                    <div class="lg:max-w-lg">
                            <span class="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-transparent"
                                  style="--tw-gradient-from: {{ $content['background-icon-color-from'] }}; --tw-gradient-to: {{ $content['background-icon-color-to'] }}">
                                <x-icon name="{{ $content['icon'] }}" class="flex-shrink-0 h-6 w-6"
                                        style="color: {{ $content['icon-color'] }};"/>
                            </span>
                                                    </div>
                                                @endisset
                                                <div class="mt-6">
                                                    @isset($content['title'])
                                                        <h2 class="text-3xl font-bold tracking-tight text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-transparent"
                                                            style="--tw-gradient-from: {{ $content['title-text-color-from'] }}; --tw-gradient-to: {{ $content['title-text-color-to'] }}">{{ $content['title'] }}</h2>
                                                    @endisset
                                                    @isset($content['subtitle'])
                                                        <p class="mt-4 text-lg text-gray-500 bg-clip-text text-transparent bg-gradient-to-r from-transparent"
                                                           style="--tw-gradient-from: {{ $content['subtitle-text-color-from'] }}; --tw-gradient-to: {{ $content['subtitle-text-color-to'] }}">{{ $content['subtitle'] }}</p>
                                                    @endisset
                                                    @isset($content['url'])
                                                        <div class="mt-6">
                                                            <a href="{{ route('filamentPage', $content['url']) }}{{ $content['parameters'] }}"
                                                               class="inline-flex rounded-md border border-transparent bg-origin-border px-4 py-2 text-base font-medium shadow-sm bg-gradient-to-r from-transparent"
                                                               style="--tw-gradient-from: {{ $content['button-background-color-from'] }}; --tw-gradient-to: {{ $content['button-background-color-to'] }}; color: {{ $content['button-text-color'] }};">
                                                                @isset($content['button-text'])
                                                                    {{ $content['button-text'] }}
                                                                @endisset
                                                            </a>
                                                        </div>
                                                    @endisset
                                                </div>
                                            </div>
                                            @isset($content['feature-image'])
                                                <img class="w-full max-w-none max-h-96 rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:ml-0"
                                                     src="{{ asset($content['feature-image']) }}" alt="">
                                            @endisset
                                        </div>
                                    </div>
                                </div>
                                @else
                                    @if ($content['background-color-from'] && $content['background-color-to'])
                                        <div class="relative py-6 sm:py-12 overflow-hidden bg-gradient-to-r from-transparent"
                                             style="--tw-gradient-from: {{ $content['background-color-from'] }}; --tw-gradient-to: {{ $content['background-color-to'] }}">
                                            @else
                                                <div class="relative py-6 sm:py-12 overflow-hidden">
                                                    @endif
                                                    <div class="mx-auto max-w-7xl px-6 lg:px-8">
                                                        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                                                            <div class="lg:ml-auto lg:pt-4 lg:pl-4">
                                                                @isset ($content['icon'])
                                                                    <div class="lg:max-w-lg">
                                <span class="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-transparent"
                                      style="--tw-gradient-from: {{ $content['background-icon-color-from'] }}; --tw-gradient-to: {{ $content['background-icon-color-to'] }}">
                                    <x-icon name="{{ $content['icon'] }}" class="flex-shrink-0 h-6 w-6"
                                            style="color: {{ $content['icon-color'] }};"/>
                                </span>
                                                                    </div>
                                                                @endisset
                                                                <div class="mt-6">
                                                                    @isset ($content['title'])
                                                                        <h2 class="text-3xl font-bold tracking-tight text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-transparent"
                                                                            style="--tw-gradient-from: {{ $content['title-text-color-from'] }}; --tw-gradient-to: {{ $content['title-text-color-to'] }}">{{ $content['title'] }}</h2>
                                                                    @endisset
                                                                    @isset ($content['subtitle'])
                                                                        <p class="mt-4 text-lg text-gray-500 bg-clip-text text-transparent bg-gradient-to-r from-transparent"
                                                                           style="--tw-gradient-from: {{ $content['subtitle-text-color-from'] }}; --tw-gradient-to: {{ $content['subtitle-text-color-to'] }}">{{ $content['subtitle'] }}</p>
                                                                    @endisset
                                                                    @isset ($content['url'])
                                                                        <div class="mt-6">
                                                                            <a href="{{ route('filamentPage', $content['url']) }}{{ $content['parameters'] }}"
                                                                               class="inline-flex rounded-md border border-transparent bg-origin-border px-4 py-2 text-base font-medium shadow-sm bg-gradient-to-r from-transparent"
                                                                               style="--tw-gradient-from: {{ $content['button-background-color-from'] }}; --tw-gradient-to: {{ $content['button-background-color-to'] }}; color: {{ $content['button-text-color'] }};">
                                                                                @isset ($content['button-text'])
                                                                                    {{ $content['button-text'] }}
                                                                                @endisset
                                                                            </a>
                                                                        </div>
                                                                    @endisset
                                                                </div>
                                                            </div>
                                                            <div class="flex items-start justify-end lg:order-first">
                                                                @isset ($content['feature-image'])
                                                                    <img class="sm:-ml-48 w-full max-w-none max-h-96 rounded-xl shadow-xl ring-1 ring-gray-400/10"
                                                                         src="{{ asset($content['feature-image']) }}"
                                                                         alt="">
                                                                @endisset
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
        @endif
    @endisset--}}
