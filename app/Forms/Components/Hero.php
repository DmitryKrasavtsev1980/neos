<?php

namespace App\Forms\Components;

use Closure;
use Filament\Forms\Components\Component;

class Hero extends Component
{
    protected string $view = 'components.banner';

    public static function make(): static
    {
        return new static();
    }
}
