<?php

namespace App\Filament\Resources\ImportFeedResource\Pages;

use App\Filament\Resources\ImportFeedResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListImportFeeds extends ListRecords
{
    protected static string $resource = ImportFeedResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
