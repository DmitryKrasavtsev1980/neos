<?php

namespace App\Filament\Controllers;
use App\Models\FilamentPage;
use Beier\FilamentPages\Contracts\Renderer;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use RalphJSmit\Laravel\SEO\Support\HasSEO;

class FilamentPageController
{
    use HasSEO;
    public function __construct(private readonly Renderer $renderer)
    {

    }

    public function show(FilamentPage $filamentPage, $id = null): View
    {
        if ($id != null) $filamentPage->model_id = $id;
        return $this->renderer->render($filamentPage);
    }
}
