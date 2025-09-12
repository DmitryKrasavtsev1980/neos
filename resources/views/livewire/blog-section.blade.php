<div class="bg-green-100">
    <div class="relative py-16 sm:py-24 lg:py-32">
        <div class="relative">
            <div class="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Блог</p>
                <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">Последние новости и статьи о жизни Микрорайона Благовещенка</p>
            </div>
            <div class="mx-auto mt-12 grid max-w-md gap-8 px-6 sm:max-w-lg lg:max-w-7xl lg:grid-cols-3 lg:px-8">
                @foreach($posts as $post)
                    <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                        <div class="flex-shrink-0">
                            @if($post->images)
                                <img src="{{ $post->images[0] }}" alt="foto"
                                     class="h-48 w-full object-cover">
                            @else
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     class="h-48 w-full object-cover"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                </svg>
                            @endif
                        </div>
                        <div class="flex flex-1 flex-col justify-between bg-white p-6">
                            <div class="flex-1">
                                <p class="text-sm font-medium text-cyan-600">
                                    <a href="{{ route('filamentPage', ['post', $post->slug]) }}" class="hover:underline flex flex-nowrap align-middle">
                                        <x-icon name="{{ $post->category['icon'] }}"
                                                class="h-5 w-5"/>
                                        <span class="ml-2">{{ $post->category['name'] }}</span>
                                    </a>
                                </p>
                                <a href="{{ route('filamentPage', ['post', $post->slug]) }}" class="mt-2 block">
                                    @if($post->title)
                                        <p class="text-xl font-semibold text-gray-900">{{ $post->title }}</p>
                                    @endif
                                        @if($post->subtitle)
                                            <p class="mt-3 text-base text-gray-500">{{ $post->subtitle }}</p>
                                        @endif
                                </a>
                            </div>
                            <div class="mt-6 flex items-center">
                                <div class="ml-3">
                                    <div class="flex space-x-1 text-sm text-gray-500">
                                        <time datetime="{{ $post->published_at }}">{{ $post->published_at }}</time>
                                        {{--<span aria-hidden="true">&middot;</span>
                                        <span>6 мин</span>--}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</div>
