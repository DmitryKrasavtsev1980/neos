<?php

namespace App\Filament\Resources\ComplexResource\Pages;

use App\Filament\Resources\ComplexResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListComplexes extends ListRecords
{
    protected static string $resource = ComplexResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
