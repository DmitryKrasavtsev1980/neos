<?php

namespace App\Filament\Resources\BuildingCategoryResource\Pages;

use App\Filament\Resources\BuildingCategoryResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListBuildingCategories extends ListRecords
{
    protected static string $resource = BuildingCategoryResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
