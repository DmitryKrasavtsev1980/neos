<?php

namespace App\View\Components;

use App\Models\FeatureComponent;
use Illuminate\View\Component;

class Feature extends Component
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
        $component = FeatureComponent::find($this->id);
        $content = $component->data['content'];
        $content['id'] = $this->id;
        $mediaItems = $component->getMedia('feature_components')->first();
        if ($mediaItems) {
            $content['feature-image'] = $mediaItems->getUrl();
        }
        return view('components.feature.'.$component->data['templateName'], ['content' => $content ]);
    }
}
