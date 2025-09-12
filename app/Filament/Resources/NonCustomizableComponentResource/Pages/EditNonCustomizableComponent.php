<?php

namespace App\Filament\Resources\NonCustomizableComponentResource\Pages;

use App\Filament\Resources\NonCustomizableComponentResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditNonCustomizableComponent extends EditRecord
{
    protected static string $resource = NonCustomizableComponentResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
