@isset($content)
    @if ($content['background-color-from'] && $content['background-color-to'])
    <div class="relative {{--top-[-65px]--}} z-0 overflow-hidden {{--sm:top-[-65px]--}} bg-gradient-to-r from-transparent"
         style="--tw-gradient-from: {{ $content['background-color-from'] }}; --tw-gradient-to: {{ $content['background-color-to'] }}">
        @else
    <div class="relative {{--top-[-65px]--}} z-0 overflow-hidden {{--sm:top-[-65px]--}}">
    @endif

    @isset($content['background-image'])
    <div class="bg-cover bg-center bg-no-repeat py-48 lg:overflow-hidden lg:py-48" style="background-image: url({{ asset($content['background-image']) }})">
    @else
    <div class="bg-cover bg-center bg-no-repeat py-48 lg:overflow-hidden lg:py-48">
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
</div>
@endisset
