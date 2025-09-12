@isset($content)
    @if ($content['background-color-from'] && $content['background-color-to'])
        <div class="relative overflow-hidden bg-gradient-to-r from-transparent rounded-lg"
             style="--tw-gradient-from: {{ $content['background-color-from'] }}; --tw-gradient-to: {{ $content['background-color-to'] }}">
    @else
        <div class="relative py-16 overflow-hidden rounded-lg">
    @endif
    @isset($content['background-image'])
        <div class="bg-cover bg-center bg-no-repeat lg:overflow-hidden py-6" style="background-image: url({{ asset($content['background-image']) }})">
    @else
        <div class="bg-cover bg-center bg-no-repeat lg:overflow-hidden py-6">
    @endif
        <div class="relative px-6 lg:px-8">
            <div class="mx-auto prose lg:max-w-7xl">
                {!! $content['content'] !!}
            </div>
        </div>
    </div>
    <div class="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
        <div class="relative mx-auto h-full lg:max-w-7xl text-lg" aria-hidden="true">
            <svg class="absolute top-12 left-full translate-x-32 transform" width="404" height="384" fill="none" viewBox="0 0 404 384">
                        <defs>
                            <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                    </svg>
            <svg class="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform" width="404" height="384" fill="none" viewBox="0 0 404 384">
                        <defs>
                            <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                    </svg>
            <svg class="absolute bottom-12 left-full translate-x-32 transform" width="404" height="384" fill="none" viewBox="0 0 404 384">
                        <defs>
                            <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                    </svg>
        </div>
    </div>
</div>
@endisset
