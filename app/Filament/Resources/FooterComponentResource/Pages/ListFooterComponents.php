<?php

namespace App\Filament\Resources\FooterComponentResource\Pages;

use App\Filament\Resources\FooterComponentResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListFooterComponents extends ListRecords
{
    protected static string $resource = FooterComponentResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
