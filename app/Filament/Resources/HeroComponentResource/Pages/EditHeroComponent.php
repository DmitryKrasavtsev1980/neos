<?php

namespace App\Filament\Resources\HeroComponentResource\Pages;

use App\Filament\Resources\HeroComponentResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Support\Str;

class EditHeroComponent extends EditRecord
{
    protected static string $resource = HeroComponentResource::class;



    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
