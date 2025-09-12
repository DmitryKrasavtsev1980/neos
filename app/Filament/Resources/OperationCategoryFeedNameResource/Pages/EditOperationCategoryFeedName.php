<?php

namespace App\Filament\Resources\OperationCategoryFeedNameResource\Pages;

use App\Filament\Resources\OperationCategoryFeedNameResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditOperationCategoryFeedName extends EditRecord
{
    protected static string $resource = OperationCategoryFeedNameResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
