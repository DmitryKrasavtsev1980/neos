<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" xmlns:livewire="http://www.w3.org/1999/html">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    @isset($seoDATA)
        {!! seo()->for($seoDATA) !!}
    @else
        {!! seo()->for($page) !!}
    @endisset
    <!-- Styles -->
    <link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}">

    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <!-- Scripts -->
    {{--<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>--}}
    <!-- jQuery 1.8 or later, 33 KB -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

    <!-- Fotorama from CDNJS, 19 KB -->
    <link  href="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script>

    <link href="{{ asset('css/leaflet.css') }}" rel="stylesheet"/>
    <script src="{{ asset('js/leaflet.js') }}"></script>

    @livewireStyles

    @if(config('app.env') == 'production')
        <!-- Yandex.Metrika counter -->
           
            <!-- /Yandex.Metrika counter -->
    @endif
</head>
<body class="font-sans antialiased">
{{-- Прелоадер --}}
<div id="preloader" class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-1001 overflow-hidden bg-white flex flex-col items-center justify-center">
    <svg class="animate-spin h-10 w-10 text-sky-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
</div>
<div id="main" class="hidden bg-gray-50">
    {{-- Page Content --}}
    <main>
        @yield('content')
    </main>
</div>
@livewireScripts
</body>
<script>
    window.onload = function () {
        setInterval(function () {
            document.getElementById('main').classList.remove('hidden');
            document.getElementById('preloader').classList.add('hidden');
        }, 500);
    }
</script>
</html>
