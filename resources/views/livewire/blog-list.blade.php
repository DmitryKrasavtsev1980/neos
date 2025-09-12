<div class="">
    <div class="mx-auto max-w-7xl space-y-6">
        {{--категории блога--}}
        <div class="border-b border-gray-200 pb-5 sm:pb-0">
            <div class="border-b border-gray-200 pb-10">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900">Блог</h1>
            </div>
            <div class="mt-3 sm:mt-4">
                <!-- Dropdown menu on small screens -->
                <div class="sm:hidden">
                    <label for="tab" class="sr-only">Select a tab</label>
                    <select id="tab" wire:model="filtersselect"
                            class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base sm:text-sm">
                        @if($filters['categories'] != [])
                            <option value="">Все</option>
                        @else
                            <option value="" selected>Все</option>
                        @endif
                        @foreach($categories as $item)
                            @if($filters['categories'] != [$item->id])
                                <option value="{{ $item->id }}">{{ $item->name }}</option>
                            @else
                                <option value="{{ $item->id }}" selected>{{ $item->name }}</option>
                            @endif
                        @endforeach
                    </select>
                </div>
                <!-- Tabs at small breakpoint and up -->
                <div class="hidden sm:block">
                    <nav class="-mb-px flex space-x-8">
                        @if($filters['categories'] != [])
                            <button wire:click="filterCategory()"
                                    class="border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">
                                Все
                            </button>
                        @else
                            <button wire:click="filterCategory()"
                                    class="border-gray-900 text-gray-900 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                                    aria-current="page">Все
                            </button>
                        @endif
                            @foreach($categories as $item)
                                @if($filters['categories'] != [] && $filters['categories'][0][0] == $item->id)
                                    <button wire:click="filterCategory({{ $item->id }})"
                                            class="border-gray-900 text-gray-900 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                                            aria-current="page">{{ $item->name }}</button>
                                @else
                                    <button wire:click="filterCategory({{ $item->id }})"
                                            class="border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">{{ $item->name }}</button>

                                @endif
                            @endforeach
                    </nav>
                </div>
            </div>
        </div>
        {{ $posts->links('livewire.centered-pagination-links-view') }}
        {{--посты блога--}}
        @foreach($posts as $post)
            <div class="mt-6">
                <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
                    <div class="px-4 py-2 sm:px-6 flex ">
                        <div class="grow flex flex-nowrap">
                            @if($post->title)
                                <x-icon name="{{ $post->category['icon'] }}"
                                        class="h-6 w-6 text-gray-500 align-middle"/>
                                <p class="ml-2">{{ $post->category['name'] }}</p>
                            @endif
                        </div>
                    </div>
                    <a href="{{ route('filamentPage', ['post', $post->slug]) }}" class="block px-4 py-5 sm:px-6">
                        @if($post->title)
                            <h4 class="text-lg font-bold">{{ $post->title }}</h4>
                        @endif
                        @if($post->subtitle)
                            <p class="mt-1">{{ $post->subtitle }}</p>
                        @endif
                    </a>
                    <a href="{{ route('filamentPage', ['post', $post->slug]) }}" target="_blank" class="block h-48 sm:h-96">
                        @if($post->images)
                            <img src="{{ $post->images[0] }}" alt="foto"
                                 class="h-full w-full object-cover object-center sm:h-full sm:w-full">
                        @else
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 class="stroke-1 h-full w-full object-cover object-center sm:h-full sm:w-full"
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                        @endif
                    </a>
                    <div class="px-4 py-2 sm:px-6 flex ">
                        <div class="grow flex flex-nowrap">
                            <div class="flex space-x-2 text-sm text-gray-500">
                                <time datetime="{{ $post->published_at }}">{{ $post->published_at }}</time>
                                {{--<span aria-hidden="true">&middot;</span>
                                <span>6 мин</span>--}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach
        {{ $posts->links('livewire.centered-pagination-links-view') }}
    </div>
</div>
