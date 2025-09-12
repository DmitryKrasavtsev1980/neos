<?php

namespace App\Http\Livewire;

use App\Models\Complex;
use App\Models\NumberRoom;
use App\Models\ProductCategory;
use App\Models\Product;
use App\Models\TypeOperation;
use Illuminate\Support\Facades\Log;
use Livewire\Component;
use Livewire\WithPagination;
use Spatie\MediaLibrary\MediaCollections\Models\Collections\MediaCollection;

class Filters extends Component
{
    use WithPagination;

    public $currentField = "price";

    public $currentType = "ASC";

    public $filters = ["typeoperations" => [], "categories" => [], "rooms" => [], "complexes" => [], "prices" => []];

    public $stypeoperations;

    public $scategories;

    public $srooms;

    public $scomplexes;

    public $typeoperations;

    public $categories;

    public $categoriesCount;

    public $rooms;

    public $complexes;

    public $prices;

    public $countPaginate = 10;

    public function mount($stypeoperations = null, $scategories = null, $srooms = null, $scomplexes = null)
    {
        $this->stypeoperations = $stypeoperations;
        $this->scategories = $scategories;
        $this->srooms = $srooms;
        $this->scomplexes = $scomplexes;
    }

    public function updatingFilters()
    {
        $this->resetPage();
    }

    public function sort($field) {
        $this->currentField = $field;
        $this->currentType = $this->currentType == "" ? "DESC" : ($this->currentType == "ASC" ? "DESC" : "ASC");
    }

    public function render()
    {
        if ($this->stypeoperations) {
            $this->filters['typeoperations'] = [$this->stypeoperations];
            $this->stypeoperations = null;
        }

        if ($this->scategories) {
            $this->filters['categories'] = [$this->scategories];
            $this->scategories = null;
        }

        if ($this->srooms) {
            $this->filters['rooms'] = [$this->srooms];
            $this->srooms = null;
        }

        if ($this->scomplexes) {
            $this->filters['complexes'] = [$this->scomplexes];
            $this->scomplexes = null;
        }

        $this->typeoperations = TypeOperation::withCount(["products" => function($query) {
            $query->filters($this->filters);
        }])->get();

        $this->categories = ProductCategory::withCount(["products" => function($query) {
            $query->filters($this->filters);
        }])->get();

        $this->categoriesCount = ProductCategory::withCount(["products" => function($query) {
                    $query->filters();
                }])->get();

        $this->rooms = NumberRoom::withCount(["products" => function($query) {
            $query->filters($this->filters);
        }])->get();

        $this->complexes = Complex::withCount(["products" => function($query) {
            $query->filters($this->filters);
        }])->get();

        if (empty($this->filters['prices'][0]))
            $this->filters['prices'][0] = Product::query()->min("price");
        if (empty($this->filters['prices'][1]))
            $this->filters['prices'][1] = Product::query()->max("price");

        $products = $this->currentField ? Product::filters($this->filters)->orderBy($this->currentField, $this->currentType)->paginate($this->countPaginate) : Product::filters($this->filters)->paginate($this->countPaginate);
        foreach ($products as $product) {
            $mediaItems = $product->getMedia('products');
            if ($mediaItems != []) {
                $images = [];
                foreach ($mediaItems as $key => $image) {
                    $images[$key] = $image->getUrl();
                }
                $product->images = $images;
            }
        }
        return view('livewire.filters', ['products' => $products]);
    }
}
