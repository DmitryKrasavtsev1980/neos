<?php

namespace App\Filament\FilamentPageTemplates;

use App\Models\Post;
use App\Models\Product;
use Beier\FilamentPages\Contracts\Renderer;
use App\Models\FilamentPage;
use Illuminate\Contracts\View\View;
use RalphJSmit\Laravel\SEO\Support\HasSEO;

class TemplatePageRenderer implements Renderer
{
    use HasSEO;

    public function render($filamentPage): View
    {
        if (!$filamentPage->slug) {
            $filamentPage = FilamentPage::where('is_homepage',1)->first();
            if (!$filamentPage) return abort(404);
        }
        $layout = 'templates.'.(string)$filamentPage->data['templateName'];
        $seoDATA = null;
        if ($filamentPage->slug == 'product' && $filamentPage->model_id) {
            $seoDATA = Product::find($filamentPage->model_id)->getDynamicSEOData();
        }
        if ($filamentPage->slug == 'post' && $filamentPage->model_id) {
            $seoDATA = Post::where('slug', $filamentPage->model_id)->first()->getDynamicSEOData();
        }

        return view($layout, ['page' => $filamentPage, 'data' => (array)$filamentPage->data['content'] ?? [], 'id' => $filamentPage->model_id ?? [], 'seoDATA' => $seoDATA]);
    }
}
