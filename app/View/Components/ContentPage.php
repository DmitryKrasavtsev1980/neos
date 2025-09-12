<?php

namespace App\View\Components;

use Illuminate\View\Component;

class ContentPage extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public $contentHTML;

    public function __construct($data)
    {

        $this->contentHTML = $data['content'];
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.content-page');
    }
}
