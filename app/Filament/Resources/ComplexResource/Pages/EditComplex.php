<?php

namespace App\Filament\Resources\ComplexResource\Pages;

use App\Filament\Resources\ComplexResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditComplex extends EditRecord
{
    protected static string $resource = ComplexResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
