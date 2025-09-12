<?php

namespace App\Filament\Resources\TextBlockComponentResource\Pages;

use App\Filament\Resources\TextBlockComponentResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListTextBlockComponents extends ListRecords
{
    protected static string $resource = TextBlockComponentResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
