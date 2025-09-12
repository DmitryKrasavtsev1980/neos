<?php

namespace App\Filament\Resources\NumberRoomResource\Pages;

use App\Filament\Resources\NumberRoomResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListNumberRooms extends ListRecords
{
    protected static string $resource = NumberRoomResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
