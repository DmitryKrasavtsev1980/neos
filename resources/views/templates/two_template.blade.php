@extends('layouts.app')
@section('content')
    <div class="">
        @isset($data['components_header'])
            @foreach($data['components_header'] as $component)
                @php
                    $componentId = $component['data']['id'];
                @endphp
                <x-dynamic-component :component="$component['type']" :componentId="$componentId" :templateId="$id"/>
            @endforeach
        @endisset
        @if($data['components_content_left'] || $data['components_content_right'])
            <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl">
                <h1 class="sr-only">Page title</h1>
                <!-- Main 3 column grid -->
                <div class="grid grid-cols-1 items-start lg:grid-cols-4 py-6 lg:space-x-8">
                    <!-- Left column -->
                    <div class="grid grid-cols-1 lg:col-span-3">
                        <section aria-labelledby="section-1-title">
                            <h2 class="sr-only" id="section-1-title">Section title</h2>
                            <div class="overflow-hidden">
                                @foreach($data['components_content_left'] as $component)
                                    @php
                                        $componentId = $component['data']['id'];
                                    @endphp
                                    <x-dynamic-component :component="$component['type']" :componentId="$componentId"
                                                         :templateId="$id"/>
                                @endforeach
                            </div>
                        </section>
                    </div>

                    <!-- Right column -->
                    <div class="grid grid-cols-1 pt-6 lg:pt-0 ">
                        <section aria-labelledby="section-2-title">
                            <h2 class="sr-only" id="section-2-title">Section title</h2>
                            <div class="overflow-hidden">
                                @foreach($data['components_content_right'] as $component)
                                    @php
                                        $componentId = $component['data']['id'];
                                    @endphp
                                    <x-dynamic-component :component="$component['type']" :componentId="$componentId"
                                                         :templateId="$id"/>
                                @endforeach
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        @endif
        @isset($data['components_footer'])
            @foreach($data['components_footer'] as $component)
                @php
                    $componentId = $component['data']['id'];
                @endphp
                <x-dynamic-component :component="$component['type']" :componentId="$componentId" :templateId="$id"/>
            @endforeach
        @endisset
    </div>
@endsection
