<?php

namespace App\Filament\Resources\HeroComponentResource\PageTemplates;

use App\Forms\Components\Hero;
use Closure;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\ColorPicker;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\View;

class FourTemplate
{
    public static function title(): string
    {
        return 'Шаблон 004';
    }

    public static function schema(): array
    {
        return [
            Card::make()
                ->schema([
                    Fieldset::make('Background-color')
                        ->schema([
                            ColorPicker::make('background-color-from'),
                            ColorPicker::make('background-color-to'),
                        ])->columns(2),
                    SpatieMediaLibraryFileUpload::make('BackgroundImage')->collection('hero_components'),
                    TextInput::make('title')
                        ->required()
                        ->maxLength(255),
                    Fieldset::make('title-text-color')
                        ->schema([
                            ColorPicker::make('title-text-color-from'),
                            ColorPicker::make('title-text-color-to'),
                        ])->columns(2),
                    TextInput::make('subtitle')
                        ->required()
                        ->maxLength(255),
                    Fieldset::make('subtitle-text-color')
                        ->schema([
                            ColorPicker::make('subtitle-text-color-from'),
                            ColorPicker::make('subtitle-text-color-to'),
                        ])->columns(2),
                ]),
        ];
    }
}
