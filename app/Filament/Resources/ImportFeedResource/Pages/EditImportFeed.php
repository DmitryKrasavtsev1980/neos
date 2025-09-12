<?php

namespace App\Filament\Resources\ImportFeedResource\Pages;

use App\Filament\Resources\ImportFeedResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditImportFeed extends EditRecord
{
    protected static string $resource = ImportFeedResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
