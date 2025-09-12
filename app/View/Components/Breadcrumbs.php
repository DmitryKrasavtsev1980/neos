<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Breadcrumbs extends Component
{
    public $databreadcrumbs;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($databreadcrumbs)
    {
        $this->databreadcrumbs = $databreadcrumbs;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.breadcrumbs');
    }
}
