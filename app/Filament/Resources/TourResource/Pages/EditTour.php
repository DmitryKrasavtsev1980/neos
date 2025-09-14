<?php

namespace App\Filament\Resources\TourResource\Pages;

use App\Filament\Resources\TourResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditTour extends EditRecord
{
    protected static string $resource = TourResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }

    protected function mutateFormDataBeforeFill(array $data): array
    {
        // Отладка: выводим данные перед заполнением формы
        logger('=== TOUR EDIT - Before Fill ===');
        logger('Data from DB:', $data);
        logger('Media files:', $this->record->getMedia('tour_components')->pluck('name', 'id')->toArray());

        return $data;
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        // Отладка: выводим данные перед сохранением
        logger('=== TOUR EDIT - Before Save ===');
        logger('Form data:', $data);

        return $data;
    }

    protected function afterSave(): void
    {
        // Отладка: выводим данные после сохранения
        logger('=== TOUR EDIT - After Save ===');
        logger('Saved data:', $this->record->data);
        logger('Media files:', $this->record->getMedia('tour_components')->pluck('name', 'id')->toArray());
    }
}
