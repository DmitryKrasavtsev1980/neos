<?php

namespace App\Filament\Resources\FeatureComponentResource\PageTemplates;

use App\Forms\Components\Hero;
use App\Models\FilamentPage;
use Closure;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\ColorPicker;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Radio;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\View;
use Guava\FilamentIconPicker\Forms\IconPicker;

class OneTemplate
{
    public static function title(): string
    {
        return 'Шаблон 001';
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
                    Radio::make('image-position')
                        ->options([
                            'image-right' => 'Picture on the right',
                            'image-left' => 'Picture on the left'
                        ]),
                    SpatieMediaLibraryFileUpload::make('FeatureImage')->collection('feature_components'),
                    Fieldset::make('icon')
                        ->schema([
                            IconPicker::make('icon'),
                            ColorPicker::make('icon-color'),
                            Fieldset::make('Background-icon-color')
                                ->schema([
                                    ColorPicker::make('background-icon-color-from'),
                                    ColorPicker::make('background-icon-color-to'),
                                ])->columns(2),
                        ])->columns(1),

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
                    Fieldset::make('button')
                        ->schema([
                            TextInput::make('button-text'),
                            Select::make('url')
                                ->label('Url')
                                ->options(FilamentPage::all()->pluck('title', 'slug'))
                                ->searchable(),
                            TextInput::make('parameters'),
                            Fieldset::make('button-text-color')
                                ->schema([
                                    ColorPicker::make('button-text-color'),
                                ])->columns(1),
                            Fieldset::make('button-background-color')
                                ->schema([
                                    ColorPicker::make('button-background-color-from'),
                                    ColorPicker::make('button-background-color-to'),
                                ])->columns(2),
                        ])->columns(1),
                ]),
        ];
    }
}
