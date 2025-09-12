<?php

namespace App\Filament\Resources\BuildingCategoryResource\Pages;

use App\Filament\Resources\BuildingCategoryResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditBuildingCategory extends EditRecord
{
    protected static string $resource = BuildingCategoryResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
