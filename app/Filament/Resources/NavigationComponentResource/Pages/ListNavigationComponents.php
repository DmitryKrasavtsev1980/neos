<?php

namespace App\Filament\Resources\NavigationComponentResource\Pages;

use App\Filament\Resources\NavigationComponentResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListNavigationComponents extends ListRecords
{
    protected static string $resource = NavigationComponentResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
