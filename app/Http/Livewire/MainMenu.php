<?php

namespace App\Http\Livewire;

use Livewire\Component;
use RyanChandler\FilamentNavigation\Facades\FilamentNavigation;

class MainMenu extends Component
{
    public $menu;

    public function render()
    {
        $this->menu = FilamentNavigation::get('main-menu');
        return view('livewire.main-menu');
    }
}
