<?php

namespace App\Filament\Resources;

use App\Models\FilamentPage;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\Toggle;
use RalphJSmit\Filament\SEO\SEO;
use Beier\FilamentPages\Filament\Resources\FilamentPageResource;

class PageResource extends FilamentPageResource
{
    protected static ?string $model = FilamentPage::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    protected static ?string $navigationGroup = 'Pages & Components';

    protected static ?int $navigationSort = 1;

    public static function insertBeforeSecondaryColumnSchema(): array
    {
        return [
            Toggle::make('is_homepage'),
        ];
    }

    public static function insertAfterSecondaryColumnSchema(): array
    {
        return [
            SEO::make(),
        ];
    }
}
