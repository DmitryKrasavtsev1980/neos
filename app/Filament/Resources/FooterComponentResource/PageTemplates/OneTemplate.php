<?php

namespace App\Filament\Resources\FooterComponentResource\PageTemplates;

use App\Forms\Components\Hero;
use App\Models\FilamentPage;
use Closure;
use Filament\Forms\Components\Builder;
use Filament\Forms\Components\Builder\Block;
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
                    Fieldset::make('Background color')
                        ->schema([
                            ColorPicker::make('background_color_from'),
                            ColorPicker::make('background_color_to'),
                        ])->columns(2),
                    SpatieMediaLibraryFileUpload::make('background_image')
                        ->collection('background_image_one_template_footer_components'),
                    Fieldset::make('Logo settings')
                        ->schema([
                            SpatieMediaLibraryFileUpload::make('logo')
                                ->collection('logo_one_template_footer_components'),
                            Select::make('hight_logo')
                                ->options([
                                    '4' => 'h-4',
                                    '5' => 'h-5',
                                    '6' => 'h-6',
                                    '7' => 'h-7',
                                    '8' => 'h-8',
                                    '10' => 'h-10',
                                    '12' => 'h-12',
                                    '14' => 'h-14',
                                ])
                                ->default('10')
                                ->disablePlaceholderSelection(),
                        ])->columns(2),
                    Fieldset::make('Social network')
                        ->schema([
                            TextInput::make('social_network_title')
                                ->maxLength(255),
                            ColorPicker::make('social_network_title_text_color'),
                            Fieldset::make('one social network')
                                ->schema([
                                    SpatieMediaLibraryFileUpload::make('one_social_network_logo')
                                        ->collection('one_social_network_logo_one_template_footer_components'),
                                    TextInput::make('one_social_network_url')
                                        ->maxLength(255),
                            ])->columns(2),

                            Fieldset::make('two social network')
                                ->schema([
                                    SpatieMediaLibraryFileUpload::make('two_social_network_logo')
                                        ->collection('two_social_network_logo_one_template_footer_components'),
                                    TextInput::make('two_social_network_url')
                                        ->maxLength(255),
                                ])->columns(2),

                            Fieldset::make('three social network')
                                ->schema([
                                    SpatieMediaLibraryFileUpload::make('three_social_network_logo')
                                        ->collection('three_social_network_logo_one_template_footer_components'),
                                    TextInput::make('three_social_network_url')
                                        ->maxLength(255),
                                ])->columns(2),

                            Fieldset::make('four social network')
                                ->schema([
                                    SpatieMediaLibraryFileUpload::make('four_social_network_logo')
                                        ->collection('four_social_network_logo_one_template_footer_components'),
                                    TextInput::make('four_social_network_url')
                                        ->maxLength(255),
                                ])->columns(2),

                            Fieldset::make('five social network')
                                ->schema([
                                    SpatieMediaLibraryFileUpload::make('five_social_network_logo')
                                        ->collection('five_social_network_logo_one_template_footer_components'),
                                    TextInput::make('five_social_network_url')
                                        ->maxLength(255),
                                ])->columns(2),

                        ])->columns(1),
                    Fieldset::make('One column')
                        ->schema([
                            TextInput::make('one_column_title')
                                ->maxLength(255),
                            ColorPicker::make('one_column_title_text_color'),
                            Repeater::make('one_column_members')
                                ->schema([
                                    TextInput::make('title')
                                        ->maxLength(255),
                                    ColorPicker::make('title_text_color'),
                                    Select::make('url')
                                        ->label('Url')
                                        ->options(FilamentPage::all()->pluck('title', 'slug'))
                                        ->searchable(),
                                    TextInput::make('parameters'),
                                ]),
                        ])->columns(1),
                    Fieldset::make('Two column')
                        ->schema([
                            TextInput::make('two_column_title')
                                ->maxLength(255),
                            ColorPicker::make('two_column_title_text_color'),
                            Repeater::make('two_column_members')
                                ->schema([
                                    TextInput::make('title')
                                        ->maxLength(255),
                                    ColorPicker::make('title_text_color'),
                                    Select::make('url')
                                        ->label('Url')
                                        ->options(FilamentPage::all()->pluck('title', 'slug'))
                                        ->searchable(),
                                    TextInput::make('parameters'),
                                ]),
                        ])->columns(1),
                    Fieldset::make('Three column')
                        ->schema([
                            TextInput::make('three_column_title')
                                ->maxLength(255),
                            ColorPicker::make('three_column_title_text_color'),
                            Repeater::make('three_column_members')
                                ->schema([
                                    TextInput::make('title')
                                        ->maxLength(255),
                                    ColorPicker::make('title_text_color'),
                                    Select::make('url')
                                        ->label('Url')
                                        ->options(FilamentPage::all()->pluck('title', 'slug'))
                                        ->searchable(),
                                    TextInput::make('parameters'),
                                ]),
                        ])->columns(1),
                    Fieldset::make('Four column')
                        ->schema([
                            TextInput::make('four_column_title')
                                ->maxLength(255),
                            ColorPicker::make('four_column_title_text_color'),
                            Repeater::make('four_column_members')
                                ->schema([
                                    TextInput::make('title')
                                        ->maxLength(255),
                                    ColorPicker::make('title_text_color'),
                                    Select::make('url')
                                        ->label('Url')
                                        ->options(FilamentPage::all()->pluck('title', 'slug'))
                                        ->searchable(),
                                    TextInput::make('parameters'),
                                ]),
                        ])->columns(1),
                    TextInput::make('copy_title')
                        ->maxLength(255),
                    ColorPicker::make('copy_title_text_color'),
                ]),
        ];
    }
}
