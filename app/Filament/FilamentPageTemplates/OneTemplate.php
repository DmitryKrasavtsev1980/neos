<?php

namespace App\Filament\FilamentPageTemplates;

use App\Models\FeatureComponent;
use App\Models\FooterComponent;
use App\Models\HeroComponent;
use App\Models\NavigationComponent;
use App\Models\NonCustomizableComponent;
use App\Models\TextBlockComponent;
use Beier\FilamentPages\Contracts\FilamentPageTemplate;
use Filament\Forms\Components\Builder;
use Filament\Forms\Components\Builder\Block;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;

class OneTemplate implements FilamentPageTemplate
{
    public static function title(): string
    {
        return 'Конструктор компонентов';
    }

    public static function schema(): array
    {
        return [
            Card::make()
                ->schema([
                    Builder::make('components')
                        ->blocks([
                            Block::make('navigation')
                                ->schema([
                                    Select::make('id')
                                        ->label('Navigation')
                                        ->options(NavigationComponent::all()->pluck('name', 'id'))
                                        ->searchable()
                                ]),
                            Block::make('non-customizable')
                                ->schema([
                                    Select::make('id')
                                        ->label('Non-Customizable')
                                        ->options(NonCustomizableComponent::all()->pluck('title', 'id'))
                                        ->searchable()
                                ]),
                            Block::make('hero')
                                ->schema([
                                    Select::make('id')
                                        ->label('Hero')
                                        ->options(HeroComponent::all()->pluck('name', 'id'))
                                        ->searchable()
                                ]),
                            Block::make('feature')
                                ->schema([
                                    Select::make('id')
                                        ->label('Feature')
                                        ->options(FeatureComponent::all()->pluck('name', 'id'))
                                        ->searchable()
                                ]),
                            Block::make('text-block')
                                ->schema([
                                    Select::make('id')
                                        ->label('TextBlock')
                                        ->options(TextBlockComponent::all()->pluck('name', 'id'))
                                        ->searchable()
                                ]),
                            Block::make('footer')
                                ->schema([
                                    Select::make('id')
                                        ->label('Footer')
                                        ->options(FooterComponent::all()->pluck('name', 'id'))
                                        ->searchable()
                                ]),
                        ]),
                ]),
        ];
    }
}
