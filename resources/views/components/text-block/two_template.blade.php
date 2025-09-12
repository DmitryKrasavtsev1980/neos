@isset($content)
    @if ($content['background-color-from'] && $content['background-color-to'])
        <div class="relative overflow-hidden bg-gradient-to-r from-transparent rounded-lg"
             style="--tw-gradient-from: {{ $content['background-color-from'] }}; --tw-gradient-to: {{ $content['background-color-to'] }}">
    @else
        <div class="relative overflow-hidden rounded-lg">
    @endif
    @isset($content['background-image'])
        <div class="bg-cover bg-center bg-no-repeat lg:overflow-hidden" style="background-image: url({{ asset($content['background-image']) }})">
    @else
        <div class="bg-cover bg-center bg-no-repeat lg:overflow-hidden">
    @endif
        <div class="relative">
            {!! $content['content'] !!}
        </div>
    </div>
</div>
@endisset
