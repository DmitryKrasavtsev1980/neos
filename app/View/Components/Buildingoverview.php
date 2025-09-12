<?php

namespace App\View\Components;

use App\Models\Building;
use Illuminate\View\Component;

class Buildingoverview extends Component
{
    public $id;
    public $building;
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

        $this->building = Building::find($this->id);
        $mediaItems = $this->building->getMedia('buildings');
        if ($mediaItems != []) {
            $images = [];
            foreach ($mediaItems as $key => $image) {
                $images[$key] = $image->getUrl();
            }
            $this->building->images = $images;
        }
        $this->databreadcrumbs =
            [
                [
                    'link' => '/buildings',
                    'name' => 'Каталог домов',
                ],
                [
                    'link' => '#',
                    'name' => $this->building->title,
                ]
            ];

        return view('components.buildingoverview');
    }
}
