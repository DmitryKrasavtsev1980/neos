@extends('layouts.app')
@section('content')
    @foreach($data['components'] as $component)
        @php
            $componentId = $component['data']['id'];
        @endphp
        <x-dynamic-component :component="$component['type']" :componentId="$componentId"  :templateId="$id"/>
    @endforeach
@endsection
