<?php

namespace App\Filament\Resources\NonCustomizableComponentResource\Pages;

use App\Filament\Resources\NonCustomizableComponentResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListNonCustomizableComponents extends ListRecords
{
    protected static string $resource = NonCustomizableComponentResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
