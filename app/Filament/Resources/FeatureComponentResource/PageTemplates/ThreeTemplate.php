<?php

namespace App\Filament\Resources\FeatureComponentResource\PageTemplates;

use App\Models\FilamentPage;
use Closure;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\ColorPicker;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Radio;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\TextInput;
use Guava\FilamentIconPicker\Forms\IconPicker;

class ThreeTemplate
{
    public static function title(): string
    {
        return 'Шаблон 003';
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
                    TextInput::make('lable')
                        ->required()
                        ->maxLength(255),
                    Fieldset::make('lable-text-color')
                        ->schema([
                            ColorPicker::make('lable-text-color-from'),
                            ColorPicker::make('lable-text-color-to'),
                        ])->columns(2),
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
                    Repeater::make('members')
                        ->schema([
                            TextInput::make('title')
                                ->required()
                                ->maxLength(255),
                            Fieldset::make('title-text-color')
                                ->schema([
                                    ColorPicker::make('title-text-color-from'),
                                    ColorPicker::make('title-text-color-to'),
                                ])->columns(2),
                            Select::make('url')
                                ->label('Url')
                                ->options(FilamentPage::all()->pluck('title', 'slug'))
                                ->searchable(),
                            TextInput::make('parameters'),
                            TextInput::make('subtitle')
                                ->required()
                                ->maxLength(255),
                            Fieldset::make('subtitle-text-color')
                                ->schema([
                                    ColorPicker::make('subtitle-text-color-from'),
                                    ColorPicker::make('subtitle-text-color-to'),
                                ])->columns(2),
                            Fieldset::make('hover-bg-color')
                                ->schema([
                                    ColorPicker::make('hover-bg-color-from'),
                                    ColorPicker::make('hover-bg-color-to'),
                                ])->columns(2),
                            TextInput::make('price')
                                ->maxLength(255),
                        ])
                        ->columns(2),
                ]),
        ];
    }
}
