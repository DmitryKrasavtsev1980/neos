<?php

namespace App\View\Components;

use App\Models\Product;
use Illuminate\View\Component;
use Illuminate\View\View;
use RalphJSmit\Laravel\SEO\Support\SEOData;

class Productoverview extends Component
{
    public $id;
    public $product;
    public $databreadcrumbs;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($id)
    {
        $this->id = $id;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        if ($this->id) {
            $this->product = Product::find($this->id);
        }
        if ($this->product) {
            $mediaItems = $this->product->getMedia('products');
            if ($mediaItems != []) {
                $images = [];
                foreach ($mediaItems as $key => $image) {
                    $images[$key] = $image->getUrl();
                }
                $this->product->images = $images;
            }
            $this->databreadcrumbs =
                [
                    [
                        'link' => '/katalog-nedvizimosti',
                        'name' => 'Каталог',
                    ],
                    [
                        'link' => '#',
                        'name' => $this->product->title,
                    ]
                ];
        }

        return view('components.productoverview');
    }
}
