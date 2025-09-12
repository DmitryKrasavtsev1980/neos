<?php

namespace App\Http\Livewire;

use App\Models\Building;
use App\Models\BuildingCategory;
use App\Models\Complex;
use Livewire\Component;
use Livewire\WithPagination;

class BuildingList extends Component
{
    use WithPagination;

    public $filters = ["categories" => [], 'is_published' => 1];

    public $categories;

    public $filtersselect;

    public function filterCategory($id = null)
    {
        $this->filtersselect = $id ? [$id] : [];
        $this->resetPage();
    }

    public function render()
    {
        $this->filters['categories'] = $this->filtersselect ? [$this->filtersselect] : [];

        $this->categories = BuildingCategory::all();

        $buildings = Building::filters($this->filters)->paginate(5);
        foreach ($buildings as $building) {
            $mediaItems = $building->getMedia('buildings');
            if ($mediaItems != []) {
                $images = [];
                foreach ($mediaItems as $key => $image) {
                    $images[$key] = $image->getUrl();
                }
                $building->images = $images;
            }
        }

        return view('livewire.building-list', ['buildings' => $buildings]);
    }
}
