<?php

namespace App\Filament\Resources\TextBlockComponentResource\PageTemplates;

use App\Forms\Components\Hero;
use Closure;
use Creagia\FilamentCodeField\CodeField;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\ColorPicker;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\View;

class TwoTemplate
{
    public static function title(): string
    {
        return 'Шаблон 002';
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
                    SpatieMediaLibraryFileUpload::make('BackgroundImage')->collection('text_block_components'),
                    CodeField::make('content')
                        ->htmlField()
                        ->disableAutocompletion()
                        ->withLineNumbers(),
                ]),
        ];
    }
}
