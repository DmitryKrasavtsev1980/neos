<?php

namespace App\View\Components;

use App\Models\HeroComponent;
use Illuminate\View\Component;

class Hero extends Component
{
    public $id;
    public $templateId;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($componentId, $templateId)
    {
        $this->id = $componentId;
        $this->templateId = $templateId;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {

        $component = HeroComponent::find($this->id);
        $content = $component->data['content'];
        $content['id'] = $this->id;
        $mediaItems = $component->getMedia('hero_components')->first();
        if ($mediaItems) {
            $content['background-image'] = $mediaItems->getUrl();
        }
        return view('components.hero.'.$component->data['templateName'], ['content' => $content ]);
    }


}
