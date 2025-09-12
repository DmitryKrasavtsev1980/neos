@isset($content)
    @if ($content['background-color-from'] && $content['background-color-to'])
        <div class="relative top-[-65px] z-0 overflow-hidden sm:top-[-65px] bg-gradient-to-r from-transparent"
             style="--tw-gradient-from: {{ $content['background-color-from'] }}; --tw-gradient-to: {{ $content['background-color-to'] }}">
            @else
                <div class="relative top-[-65px] z-0 overflow-hidden sm:top-[-65px]">
    @endif
        <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div class="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
                <div class="mx-auto max-w-2xl lg:mx-0">
                    {{--<div class="hidden sm:mt-32 sm:flex lg:mt-16">
                        <div class="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Anim aute id magna aliqua ad ad non deserunt sunt. <a href="#" class="whitespace-nowrap font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </div>--}}
                    <h1 class="block mt-24 pb-2 sm:pb-2 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-transparent"
                        style="--tw-gradient-from: {{ $content['title-text-color-from'] }}; --tw-gradient-to: {{ $content['title-text-color-to'] }}">{{ $content['title'] }}</h1>
                    <p class="block mt-6 pb-3 sm:pb-3 text-lg leading-8 text-gray-600 bg-clip-text text-transparent bg-gradient-to-r from-transparent"
                       style="--tw-gradient-from: {{ $content['subtitle-text-color-from'] }}; --tw-gradient-to: {{ $content['subtitle-text-color-to'] }}">{{ $content['subtitle'] }}</p>
                    <div class="mt-10 flex items-center gap-x-6">
                        <a href="{{ route('filamentPage', $content['url']) }}"
                           class="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm bg-gradient-to-r from-transparent"
                           style="--tw-gradient-from: {{ $content['button-background-color-from'] }}; --tw-gradient-to: {{ $content['button-background-color-to'] }}; color: {{ $content['button-text-color'] }}; ">{{ $content['button-text'] }}</a>
                        {{--<a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>--}}
                    </div>
                </div>
            </div>
            <div class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                @isset ($content['background-image'])
                <img class="aspect-[3/2] w-full bg-gray-50 object-cover bg-cover bg-center bg-no-repeat lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" alt="" style="background-image: url({{ asset($content['background-image']) }})">
                @endisset
            </div>
        </div>
    </div>
{{--@if ($content['background-color-from'] && $content['background-color-to'])
    <div class="relative top-[-65px] z-0 overflow-hidden sm:top-[-65px] bg-gradient-to-r from-transparent"
         style="--tw-gradient-from: {{ $content['background-color-from'] }}; --tw-gradient-to: {{ $content['background-color-to'] }}">
        @else
    <div class="relative top-[-65px] z-0 overflow-hidden sm:top-[-65px]">
@endif

    @isset($content['background-image'])
    <div class="bg-cover bg-center bg-no-repeat py-48 lg:overflow-hidden lg:py-48 lg:pb-14" style="background-image: url({{ asset($content['background-image']) }})">
    @else
    <div class="bg-cover bg-center bg-no-repeat py-48 lg:overflow-hidden lg:py-48 lg:pb-14">
    @endif
        <div class="mx-auto max-w-7xl lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8">
                <div class="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                    <div class="lg:py-24">
                        <h1 class="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl xl:text-6xl">
                            <span class="block pb-3 sm:pb-5 bg-clip-text text-transparent bg-gradient-to-r from-transparent"
                                  style="--tw-gradient-from: {{ $content['title-text-color-from'] }}; --tw-gradient-to: {{ $content['title-text-color-to'] }}">{{ $content['title'] }}</span>
                            <span class="block pb-3 sm:pb-5 bg-clip-text text-transparent bg-gradient-to-r from-transparent"
                                  style="--tw-gradient-from: {{ $content['subtitle-text-color-from'] }}; --tw-gradient-to: {{ $content['subtitle-text-color-to'] }}">{{ $content['subtitle'] }}</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>--}}
@endisset
