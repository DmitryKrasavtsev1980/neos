<?php

namespace App\Filament\Pages;

use Filament\Pages\Actions\Action;
use Filament\Pages\Page;

class Settings extends Page
{
    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    protected static string $view = 'filament.pages.settings';

    protected static ?string $navigationGroup = 'RealEstate';

    protected static ?int $navigationSort = 20;

    protected function getActions(): array
    {
        return [
            /*Action::make('settings')
                ->label('ImportFeed')
                ->url(route('importFeed')),*/
        ];
    }
}
