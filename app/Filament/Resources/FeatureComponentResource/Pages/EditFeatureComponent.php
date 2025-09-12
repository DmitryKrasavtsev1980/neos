<?php

namespace App\Filament\Resources\FeatureComponentResource\Pages;

use App\Filament\Resources\FeatureComponentResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditFeatureComponent extends EditRecord
{
    protected static string $resource = FeatureComponentResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
