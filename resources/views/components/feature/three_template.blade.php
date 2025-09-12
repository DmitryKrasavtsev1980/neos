@isset($content)
    @if ($content['background-color-from'] && $content['background-color-to'])
    <div class="py-24 sm:py-32 bg-gradient-to-r from-transparent"
        style="--tw-gradient-from: {{ $content['background-color-from'] }}; --tw-gradient-to: {{ $content['background-color-to'] }}">
    @else
    <div class="py-24 sm:py-32">
    @endif
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <div class="col-span-2">
                    @if ($content['lable-text-color-from'] && $content['lable-text-color-to'])
                    <h2 class="text-base/7 font-semibold text-sky-600 bg-clip-text text-transparent bg-gradient-to-r from-transparent"
                        style="--tw-gradient-from: {{ $content['lable-text-color-from'] }}; --tw-gradient-to: {{ $content['lable-text-color-to'] }}">
                    @else
                    <h2 class="text-base/7 font-semibold text-sky-600">
                    @endif
                    {{ $content['lable'] }}</h2>
                    @if ($content['title-text-color-from'] && $content['title-text-color-to'])
                    <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-transparent"
                        style="--tw-gradient-from: {{ $content['title-text-color-from'] }}; --tw-gradient-to: {{ $content['title-text-color-to'] }}">
                    @else
                    <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    @endif    
                    {{ $content['title'] }}</p>
                    @if ($content['subtitle-text-color-from'] && $content['subtitle-text-color-to'])
                    <p class="mt-6 text-base/7 text-gray-700 dark:text-gray-300 bg-clip-text text-transparent bg-gradient-to-r from-transparent"
                        style="--tw-gradient-from: {{ $content['subtitle-text-color-from'] }}; --tw-gradient-to: {{ $content['subtitle-text-color-to'] }}">
                    @else
                    <p class="mt-6 text-base/7 text-gray-700">
                    @endif 
                    {{ $content['subtitle'] }}</p>
                </div>
                <dl class="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16 dark:text-gray-400">
                    @foreach($content['members'] as $key => $item)
                        @if ($item['url'])
                            @if ($item['hover-bg-color-from'] && $item['hover-bg-color-to'])
                            <a href="{{ route('filamentPage', $item['url']) }}{{ $item['parameters'] }}" class="relative py-4 pl-8 pr-6 rounded-md hover:bg-gradient-to-r hover:from-transparent"
                                style="--tw-gradient-from: {{ $item['hover-bg-color-from'] }}; --tw-gradient-to: {{ $item['hover-bg-color-to'] }}">
                            @else
                            <a href="{{ route('filamentPage', $item['url']) }}{{ $item['parameters'] }}" class="relative py-4 pl-8 pr-6 rounded-md hover:bg-sky-50">                
                            @endif
                                @if ($item['title-text-color-from'] && $item['title-text-color-to'])
                                <dt class="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-transparent"
                                    style="--tw-gradient-from: {{ $item['title-text-color-from'] }}; --tw-gradient-to: {{ $item['title-text-color-to'] }}">
                                @else
                                <dt class="font-semibold text-gray-900">
                                @endif
                                    @if ($content['lable-text-color-from'])
                                    <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="absolute top-4 left-2 h-5 w-5" style="fill: {{ $content['lable-text-color-from'] }};">>
                                        <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                                    </svg>
                                    @else
                                    <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="absolute top-4 left-2 h-5 w-5 text-sky-500">
                                    <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                                    </svg>
                                    @endif
                                    {{ $item['title'] }}
                                </dt>
                                @if ($item['subtitle-text-color-from'] && $item['subtitle-text-color-to'])
                                <dd class="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-transparent"
                                    style="--tw-gradient-from: {{ $item['subtitle-text-color-from'] }}; --tw-gradient-to: {{ $item['subtitle-text-color-to'] }}">
                                @else
                                <dd class="mt-2">
                                @endif
                                {{ $item['subtitle'] }}</dd>
                                @isset ($item['price'])
                                    @if ($content['lable-text-color-from'])
                                    <div class="absolute text-white p-1 rounded-md botton-1 left-8 bg-gradient-to-r from-transparent"
                                        style="--tw-gradient-from: {{ $item['subtitle-text-color-from'] }}; --tw-gradient-to: {{ $item['subtitle-text-color-to'] }}">
                                    @else
                                    <div class="absolute text-white bg-sky-500 p-1 rounded-md botton-1 left-8">
                                    @endif
                                    {{ $item['price'] }}
                                    </div>
                                @endisset    
                            </a>
                        @else
                            @if ($item['hover-bg-color-from'] && $item['hover-bg-color-to'])
                            <div class="relative py-4 pl-8 pr-6 rounded-md hover:bg-gradient-to-r hover:from-transparent"
                                style="--tw-gradient-from: {{ $item['hover-bg-color-from'] }}; --tw-gradient-to: {{ $item['hover-bg-color-to'] }}">
                            @else
                            <div class="relative py-4 pl-8 pr-6 rounded-md hover:bg-sky-50">                
                            @endif
                                @if ($item['title-text-color-from'] && $item['title-text-color-to'])
                                <dt class="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-transparent"
                                    style="--tw-gradient-from: {{ $item['title-text-color-from'] }}; --tw-gradient-to: {{ $item['title-text-color-to'] }}">
                                @else
                                <dt class="font-semibold text-gray-900">
                                @endif
                                    @if ($content['lable-text-color-from'])
                                    <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="absolute top-4 left-2 h-5 w-5" style="fill: {{ $content['lable-text-color-from'] }};">>
                                        <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                                    </svg>
                                    @else
                                    <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="absolute top-4 left-2 h-5 w-5 text-sky-500">
                                    <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                                    </svg>
                                    @endif
                                    {{ $item['title'] }}
                                </dt>
                                @if ($item['subtitle-text-color-from'] && $item['subtitle-text-color-to'])
                                <dd class="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-transparent"
                                    style="--tw-gradient-from: {{ $item['subtitle-text-color-from'] }}; --tw-gradient-to: {{ $item['subtitle-text-color-to'] }}">
                                @else
                                <dd class="mt-2">
                                @endif
                                {{ $item['subtitle'] }}</dd>
                                @isset ($item['price'])
                                    @if ($content['lable-text-color-from'])
                                    <div class="absolute text-white p-1 rounded-md botton-1 left-8 bg-gradient-to-r from-transparent"
                                        style="--tw-gradient-from: {{ $item['subtitle-text-color-from'] }}; --tw-gradient-to: {{ $item['subtitle-text-color-to'] }}">
                                    @else
                                    <div class="absolute text-white bg-sky-500 p-1 rounded-md botton-1 left-8">
                                    @endif
                                    {{ $item['price'] }}
                                    </div>
                                @endisset    
                            </div>
                        @endif
                    @endforeach
                </dl>
            </div>
        </div>
    </div>
@endisset
