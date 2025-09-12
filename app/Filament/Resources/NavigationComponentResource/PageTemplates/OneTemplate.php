<?php

namespace App\Filament\Resources\NavigationComponentResource\PageTemplates;

use App\Forms\Components\Hero;
use App\Models\FilamentPage;
use Closure;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\CheckboxList;
use Filament\Forms\Components\ColorPicker;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Radio;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Section;
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
                    Fieldset::make('settings')
                        ->schema([
                            Select::make('position')
                                ->options([
                                    'relative' => 'Relative',
                                    'absolute' => 'Absolute',
                                    'fixed' => 'Fixed',
                                ])
                                ->default('relative')
                                ->disablePlaceholderSelection(),
                            Select::make('padding')
                                ->options([
                                    'padding-have' => 'padding-have',
                                    'padding-none' => 'padding-none',
                                ])
                                ->default('padding-have')
                                ->disablePlaceholderSelection(),
                            Fieldset::make('Background-color')
                                ->schema([
                                    ColorPicker::make('background-color-from')->rgba(),
                                    ColorPicker::make('background-color-to')->rgba(),
                                    Select::make('position-color')
                                        ->options([
                                            'all' => 'all',
                                            'sticky' => 'sticky',
                                        ])
                                        ->default('all')
                                        ->disablePlaceholderSelection(),
                                ])->columns(2),
                        ])->columns(3),
                    Fieldset::make('logo_settings')
                        ->schema([
                            SpatieMediaLibraryFileUpload::make('Logo')->collection('navigation_components'),
                            Fieldset::make('hight_settings')
                                ->schema([
                                    Select::make('hight_desktop')
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
                                        ->default('h-10')
                                        ->disablePlaceholderSelection(),
                                    Select::make('hight_mobile')
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
                                        ->default('h-10')
                                        ->disablePlaceholderSelection(),
                                ])->columns(1),
                        ])->columns(2),
                    Fieldset::make('members')
                        ->schema([
                            Select::make('members-position')
                                ->options([
                                    'justify-start' => 'left',
                                    'justify-center' => 'center',
                                    'justify-end' => 'right',
                                ])
                                ->default('relative')
                                ->disablePlaceholderSelection(),
                            Select::make('members-text-size')
                                ->options([
                                    'text-sm' => 'text-sm',
                                    'text-base' => 'text-base',
                                    'text-lg' => 'text-lg',
                                    'text-xl' => 'text-xl',
                                    'text-2xl' => 'text-2xl',
                                ])
                                ->default('text-sm')
                                ->disablePlaceholderSelection(),
                            Select::make('members-text-border-buttom')
                                ->options([
                                    'true' => 'true',
                                    'false' => 'false',
                                ])
                                ->default('false')
                                ->disablePlaceholderSelection(),

                        ])->columns(2),
                    Repeater::make('members')
                        ->schema([
                            TextInput::make('lable')->required(),
                            Select::make('type')
                                ->options([
                                    'link' => 'Link',
                                    'folder' => 'Folder',
                                ])
                                ->reactive()
                                ->afterStateUpdated(
                                    function ($state, callable $set) {
                                        if ($state == 'link') {
                                            $set('Link', 'hidden');
                                            $set('Folder', null);
                                        }
                                        if ($state == 'folder') {
                                            $set('Folder', 'hidden');
                                            $set('Link', null);
                                        }
                                    }
                                )
                                ->default('link')
                                ->required(),
                            Section::make('Link')
                                ->schema([
                                    Fieldset::make('button')
                                        ->schema([
                                            Select::make('url')
                                                ->label('Url')
                                                ->options(FilamentPage::all()->pluck('title', 'slug'))
                                                ->searchable(),
                                            TextInput::make('parameters'),
                                            Fieldset::make('button-text-color')
                                                ->schema([
                                                    ColorPicker::make('button-text-color'),
                                                ])->columns(1),
                                        ])->columns(1),
                                ])
                                ->collapsible()
                                ->collapsed()
                                ->compact()
                                ->hidden(
                                    fn (Closure $get): bool => $get('type') != 'link'
                                ),
                            Section::make('Folder')
                                ->schema([
                                    Fieldset::make('button-text-color')
                                        ->schema([
                                            ColorPicker::make('button-text-color'),
                                        ])->columns(1),
                                    Section::make('Panel')
                                        ->schema([
                                            ColorPicker::make('background-color-from'),
                                            ColorPicker::make('background-color-to'),
                                            Select::make('rounded')
                                                ->options([
                                                    'rounded-none' => 'rounded-none',
                                                    'rounded' => 'rounded',
                                                    'rounded-md' => 'rounded-md',
                                                    'rounded-lg' => 'rounded-lg',
                                                    'rounded-xl' => 'rounded-xl',
                                                ])
                                                ->default('rounded-xl')
                                                ->disablePlaceholderSelection(),
                                            Select::make('padding')
                                                ->options([
                                                    'p-0' => 'p-0',
                                                    'p-1' => 'p-1',
                                                    'p-2' => 'p-2',
                                                    'p-3' => 'p-3',
                                                    'p-4' => 'p-4',
                                                    'p-6' => 'p-6',
                                                    'p-8' => 'p-8',
                                                ])
                                                ->default('p-4')
                                                ->disablePlaceholderSelection(),
                                            Select::make('width')
                                                ->options([
                                                    'max-w-xs' => 'max-w-xs',
                                                    'max-w-md' => 'max-w-md',
                                                    'max-w-lg' => 'max-w-lg',
                                                    'max-w-2xl' => 'max-w-2xl',
                                                ])
                                                ->default('max-w-xs')
                                                ->disablePlaceholderSelection(),
                                            Select::make('shadow')
                                                ->options([
                                                    'shadow-none' => 'shadow-none',
                                                    'shadow-sm' => 'shadow-sm',
                                                    'shadow' => 'shadow',
                                                    'shadow-lg' => 'shadow-lg',
                                                    'shadow-xl' => 'shadow-xl',
                                                ])
                                                ->default('shadow-lg')
                                                ->disablePlaceholderSelection(),
                                            ColorPicker::make('shadow-color'),
                                        ])
                                        ->collapsible()
                                        ->collapsed()
                                        ->compact()
                                        ->columns(2),
                                    Section::make('Button')
                                        ->schema([
                                            Fieldset::make('Background-color-active-hover')
                                                ->schema([
                                                    ColorPicker::make('background-color-active-hover-from')->rgba(),
                                                    ColorPicker::make('background-color-active-hover-to')->rgba(),
                                                ])->columns(2),
                                            Select::make('rounded-button')
                                                ->options([
                                                    'rounded-none' => 'rounded-none',
                                                    'rounded' => 'rounded',
                                                    'rounded-md' => 'rounded-md',
                                                    'rounded-lg' => 'rounded-lg',
                                                    'rounded-xl' => 'rounded-xl',
                                                ])
                                                ->default('rounded-xl')
                                                ->disablePlaceholderSelection(),
                                            Select::make('padding-button')
                                                ->options([
                                                    'p-0' => 'p-0',
                                                    'p-1' => 'p-1',
                                                    'p-2' => 'p-2',
                                                    'p-3' => 'p-3',
                                                    'p-4' => 'p-4',
                                                    'p-6' => 'p-6',
                                                    'p-8' => 'p-8',
                                                ])
                                                ->default('p-4')
                                                ->disablePlaceholderSelection(),
                                            Select::make('items-position-button')
                                                ->options([
                                                    'justify-normal' => 'justify-normal',
                                                    'justify-center' => 'justify-center',
                                                ])
                                                ->default('justify-normal')
                                                ->disablePlaceholderSelection(),
                                        ])
                                        ->collapsible()
                                        ->collapsed()
                                        ->compact()
                                        ->columns(2),
                                    Repeater::make('submembers')
                                        ->schema([
                                            TextInput::make('lable')->required(),
                                            Section::make('icon-submember')
                                                ->schema([
                                                    IconPicker::make('icon'),
                                                    ColorPicker::make('icon-color'),
                                                    Fieldset::make('Background-icon-color')
                                                        ->schema([
                                                            ColorPicker::make('background-icon-color-from'),
                                                            ColorPicker::make('background-icon-color-to'),
                                                        ])->columns(2),
                                                ])
                                                ->collapsible()
                                                ->collapsed()
                                                ->compact()
                                                ->columns(1),
                                            Section::make('button')
                                                ->schema([
                                                    Fieldset::make('button-text')
                                                        ->schema([
                                                            ColorPicker::make('button-text-color'),
                                                        ])->columns(1),
                                                    Fieldset::make('button-sub-text')
                                                        ->schema([
                                                            TextInput::make('button-sub-text'),
                                                            ColorPicker::make('button-sub-text-color'),
                                                        ])->columns(1),

                                                    Select::make('url')
                                                        ->label('Url')
                                                        ->options(FilamentPage::all()->pluck('title', 'slug'))
                                                        ->searchable(),
                                                    TextInput::make('parameters'),
                                                ])
                                                ->collapsible()
                                                ->collapsed()
                                                ->compact()
                                                ->columns(1),
                                        ]),
                                ])
                                ->collapsible()
                                ->collapsed()
                                ->compact()
                                ->hidden(
                                    fn (Closure $get): bool => $get('type') != 'folder'
                                ),
                        ])
                        ->columns(2),
                ]),
        ];
    }
}
