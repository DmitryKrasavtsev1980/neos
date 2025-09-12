<?php

namespace App\Filament\Resources\TextBlockComponentResource\PageTemplates;

use App\Forms\Components\Hero;
use Closure;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\ColorPicker;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\View;

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
                    SpatieMediaLibraryFileUpload::make('BackgroundImage')->collection('text_block_components'),
                    RichEditor::make('content')
                        ->toolbarButtons([
                            'attachFiles',
                            'blockquote',
                            'bold',
                            'bulletList',
                            'codeBlock',
                            'h2',
                            'h3',
                            'italic',
                            'link',
                            'orderedList',
                            'redo',
                            'strike',
                            'undo',
                        ])
                        ->required()
                        ->maxLength(65535),
                ]),
        ];
    }
}
