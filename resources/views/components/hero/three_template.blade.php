@isset($content)
<div class="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20 dark:from-indigo-950/10">
    <div aria-hidden="true" class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:-mr-80 lg:-mr-96 dark:bg-gray-800/30 dark:shadow-indigo-400/10 dark:ring-white/5"></div>
    <div class="mx-auto max-w-7xl px-6 py-16 lg:py-24 lg:px-8 xl:py-32">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-56">
        <h1 class="max-w-2xl text-5xl font-bold text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto dark:text-white">{{ $content['title'] }}</h1>
        <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
          <p class="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">{{ $content['subtitle'] }}</p>
        </div>
        @isset($content['background-image'])
        <img src="{{ asset($content['background-image']) }}" alt="" class="rotate-6 duration-500 hover:rotate-0 mt-10 aspect-6/5 w-[500px] max-w-lg rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-16 dark:outline-white/10" />
        @endisset
    </div>
    </div>
    <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32 dark:from-gray-900"></div>
  </div>
@endisset