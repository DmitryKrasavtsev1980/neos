<?php

namespace App\Filament\Resources\FeatureComponentResource\Pages;

use App\Filament\Resources\FeatureComponentResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListFeatureComponents extends ListRecords
{
    protected static string $resource = FeatureComponentResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
