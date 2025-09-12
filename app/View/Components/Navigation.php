<?php

namespace App\View\Components;

use App\Models\NavigationComponent;
use Illuminate\View\Component;

class Navigation extends Component
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
        $component = NavigationComponent::find($this->id);
        $content = $component->data['content'];
        $content['id'] = $this->id;
        $mediaItems = $component->getMedia('navigation_components')->first();
        if ($mediaItems) {
            $content['logo'] = $mediaItems->getUrl();
        }
        return view('components.navigation.'.$component->data['templateName'], ['content' => $content ]);
    }
}
