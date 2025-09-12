<?php

namespace App\View\Components;

use App\Models\NonCustomizableComponent;
use Illuminate\View\Component;

class NonCustomizable extends Component
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
        $component = NonCustomizableComponent::find($this->id);
        return view('components.non-customizable', ['type' => $component->name]);
    }
}
