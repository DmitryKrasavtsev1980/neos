<?php

namespace App\Filament\Resources\FormatFeedResource\Pages;

use App\Filament\Resources\FormatFeedResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListFormatFeeds extends ListRecords
{
    protected static string $resource = FormatFeedResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
