@isset($content)
    @if ($content['background_color_from'] && $content['background_color_to'])
        <div
            class="z-0 overflow-hidden bg-gradient-to-r from-transparent"
            style="--tw-gradient-from: {{ $content['background_color_from'] }}; --tw-gradient-to: {{ $content['background_color_to'] }}">
            @else
        <div class="relative z-0 overflow-hidden bg-gray-900">
    @endif
                    @isset($content['background_image'])
                        <footer class="bg-cover bg-center bg-no-repeat" aria-labelledby="footer-heading"
                                style="background-image: url({{ asset($content['background_image']) }})">
                            @else
                                <footer class="bg-cover bg-center" aria-labelledby="footer-heading">
                                    @endif
                                    <h2 id="footer-heading" class="sr-only">Footer</h2>
                                    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-6 lg:pt-32">
                                        <div class="xl:grid xl:grid-cols-3 xl:gap-6">
                                            <div class="space-y-8">
                                                @isset($content['logo'])
                                                    <img
                                                        class="{{ (isset($content['hight_logo']) ? 'h-'.$content['hight_logo'] : 'h-10') }} w-auto"
                                                        src="{{ asset($content['logo']) }}" alt="Logo">
                                                @endisset
                                                <h3 class="mt-10 text-xl font-semibold uppercase text-gray-100"
                                                    style="color: {{ $content['social_network_title_text_color'] }};">{{ $content['social_network_title'] }}</h3>
                                                <div class="flex space-x-6">
                                                    @if ($content['one_social_network_logo'] && $content['one_social_network_url'])
                                                        <a href="{{ asset($content['one_social_network_url']) }}" class="text-gray-400 hover:text-gray-500" target="_blank">
                                                            <img class="h-12" src="{{ asset($content['one_social_network_logo']) }}">
                                                        </a>
                                                    @endif
                                                    @if ($content['two_social_network_logo'] && $content['two_social_network_url'])
                                                        <a href="{{ asset($content['two_social_network_url']) }}" class="text-gray-400 hover:text-gray-500" target="_blank">
                                                            <img class="h-12" src="{{ asset($content['two_social_network_logo']) }}">
                                                        </a>
                                                    @endif
                                                    @if ($content['three_social_network_logo'] && $content['three_social_network_url'])
                                                        <a href="{{ asset($content['three_social_network_url']) }}" class="text-gray-400 hover:text-gray-500" target="_blank">
                                                            <img class="h-12" src="{{ asset($content['three_social_network_logo']) }}">
                                                        </a>
                                                    @endif
                                                    @if ($content['four_social_network_logo'] && $content['four_social_network_url'])
                                                        <a href="{{ asset($content['four_social_network_url']) }}" class="text-gray-400 hover:text-gray-500" target="_blank">
                                                            <img class="h-12" src="{{ asset($content['four_social_network_logo']) }}">
                                                        </a>
                                                    @endif
                                                    @if ($content['five_social_network_logo'] && $content['five_social_network_url'])
                                                        <a href="{{ asset($content['five_social_network_url']) }}" class="text-gray-400 hover:text-gray-500" target="_blank">
                                                            <img class="h-12" src="{{ asset($content['five_social_network_logo']) }}">
                                                        </a>
                                                    @endif
                                                </div>
                                            </div>
                                            <div class="mt-16 grid grid-cols-2 gap-6 xl:col-span-2 xl:mt-0">
                                                <div class="md:grid md:grid-cols-2 md:gap-6">
                                                    <div>
                                                        <h3 class="text-sm font-semibold leading-6 text-gray-100 uppercase"
                                                            style="color: {{ $content['one_column_title_text_color'] }};">{{ $content['one_column_title'] }}</h3>
                                                        <ul role="list" class="mt-6 space-y-4">
                                                            @foreach($content['one_column_members'] as $item)
                                                                <li>
                                                                    <a href="{{ route('filamentPage', $item['url']) }}{{ $item['parameters'] }}"
                                                                       class="text-sm leading-6 text-gray-200 hover:text-gray-300"
                                                                       style="color: {{ $item['title_text_color'] }};">{{ $item['title'] }}</a>
                                                                </li>
                                                            @endforeach
                                                        </ul>
                                                    </div>
                                                    <div class="mt-10 md:mt-0">
                                                        <h3 class="text-sm font-semibold leading-6 text-gray-100 uppercase"
                                                            style="color: {{ $content['two_column_title_text_color'] }};">{{ $content['two_column_title'] }}</h3>
                                                        <ul role="list" class="mt-6 space-y-4">
                                                            @foreach($content['two_column_members'] as $item)
                                                                <li>
                                                                    <a href="{{ route('filamentPage', $item['url']) }}{{ $item['parameters'] }}"
                                                                       class="text-sm leading-6 text-gray-200 hover:text-gray-300"
                                                                       style="color: {{ $item['title_text_color'] }};">{{ $item['title'] }}</a>
                                                                </li>
                                                            @endforeach
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="md:grid md:grid-cols-2 md:gap-6">
                                                    <div>
                                                        <h3 class="text-sm font-semibold leading-6 text-gray-100 uppercase"
                                                            style="color: {{ $content['three_column_title_text_color'] }};">{{ $content['three_column_title'] }}</h3>
                                                        <ul role="list" class="mt-6 space-y-4">
                                                            @foreach($content['three_column_members'] as $item)
                                                                <li>
                                                                    <a href="{{ route('filamentPage', $item['url']) }}{{ $item['parameters'] }}"
                                                                       class="text-sm leading-6 text-gray-200 hover:text-gray-300"
                                                                       style="color: {{ $item['title_text_color'] }};">{{ $item['title'] }}</a>
                                                                </li>
                                                            @endforeach
                                                        </ul>
                                                    </div>
                                                    <div class="mt-10 md:mt-0">
                                                        <h3 class="text-sm font-semibold leading-6 text-gray-100 uppercase"
                                                            style="color: {{ $content['four_column_title_text_color'] }};">{{ $content['four_column_title'] }}</h3>
                                                        <ul role="list" class="mt-6 space-y-4">
                                                            @foreach($content['four_column_members'] as $item)
                                                                <li>
                                                                    <a href="{{ route('filamentPage', $item['url']) }}{{ $item['parameters'] }}"
                                                                       class="text-sm leading-6 text-gray-200 hover:text-gray-300"
                                                                       style="color: {{ $item['title_text_color'] }};">{{ $item['title'] }}</a>
                                                                </li>
                                                            @endforeach
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-16 border-t border-gray-100/10 pt-8 sm:mt-20 lg:mt-24">
                                            <p class="text-xs leading-5 text-gray-200"
                                               style="color: {{ $content['copy_title_text_color'] }};">
                                                &copy; <?php echo date('Y'); ?> {{ $content['copy_title'] }}</p>
                                        </div>
                                    </div>
                        </footer>
    @endisset
