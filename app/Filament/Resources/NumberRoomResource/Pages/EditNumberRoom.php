<?php

namespace App\Filament\Resources\NumberRoomResource\Pages;

use App\Filament\Resources\NumberRoomResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditNumberRoom extends EditRecord
{
    protected static string $resource = NumberRoomResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
