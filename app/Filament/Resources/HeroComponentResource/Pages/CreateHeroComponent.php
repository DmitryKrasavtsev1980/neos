<?php

namespace App\Filament\Resources\HeroComponentResource\Pages;

use App\Filament\Resources\HeroComponentResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateHeroComponent extends CreateRecord
{
    protected static string $resource = HeroComponentResource::class;
}
