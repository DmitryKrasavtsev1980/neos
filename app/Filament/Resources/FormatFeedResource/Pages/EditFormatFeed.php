<?php

namespace App\Filament\Resources\FormatFeedResource\Pages;

use App\Filament\Resources\FormatFeedResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditFormatFeed extends EditRecord
{
    protected static string $resource = FormatFeedResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
