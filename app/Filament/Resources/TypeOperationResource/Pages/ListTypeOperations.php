<?php

namespace App\Filament\Resources\TypeOperationResource\Pages;

use App\Filament\Resources\TypeOperationResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListTypeOperations extends ListRecords
{
    protected static string $resource = TypeOperationResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
