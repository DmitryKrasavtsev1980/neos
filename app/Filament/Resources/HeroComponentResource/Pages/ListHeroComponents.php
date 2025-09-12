<?php

namespace App\Filament\Resources\HeroComponentResource\Pages;

use App\Filament\Resources\HeroComponentResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListHeroComponents extends ListRecords
{
    protected static string $resource = HeroComponentResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
