<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TourResource\Pages;
use App\Filament\Resources\TourResource\RelationManagers;
use App\Models\Tour;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\RichEditor;

class TourResource extends Resource
{
    protected static ?string $model = Tour::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    protected static ?string $navigationGroup = '3D tours';

    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()
                ->schema([
                    TextInput::make('name')
                        ->required()
                        ->maxLength(255),
                ]),
                Card::make()
                ->schema([
                    Select::make('type')
                        ->label('Тип страницы')
                        ->options([
                            'tour' => 'Виртуальный тур',
                            'personal_page' => 'Персональная страница объекта'
                        ])
                        ->default('tour')
                        ->required()
                        ->reactive(),

                    // Поля для персональной страницы
                    TextInput::make('page_title')
                        ->label('Заголовок страницы')
                        ->maxLength(255)
                        ->columnSpanFull()
                        ->visible(fn ($get) => $get('type') === 'personal_page'),
                    RichEditor::make('description')
                        ->label('Описание объекта')
                        ->columnSpanFull()
                        ->visible(fn ($get) => $get('type') === 'personal_page'),
                    TextInput::make('latitude')
                        ->label('Широта (для карты)')
                        ->numeric()
                        ->step(0.000001)
                        ->visible(fn ($get) => $get('type') === 'personal_page'),
                    TextInput::make('longitude')
                        ->label('Долгота (для карты)')
                        ->numeric()
                        ->step(0.000001)
                        ->visible(fn ($get) => $get('type') === 'personal_page'),
                    FileUpload::make('floor_plan')
                        ->label('План помещения')
                        ->disk('public')
                        ->directory('floor-plans')
                        ->maxSize(10240) // 10MB
                        ->acceptedFileTypes(['image/*'])
                        ->image()
                        ->imagePreviewHeight('200')
                        ->columnSpanFull()
                        ->nullable(),
                    Repeater::make('members')
                        ->label('Панорамы')
                        ->schema([
                            TextInput::make('title')
                                ->required()
                                ->maxLength(255),
                            FileUpload::make('pano')
                                ->disk('public')
                                ->directory('tour-components')
                                ->maxSize(20480) // 20MB
                                ->acceptedFileTypes(['image/*'])
                                ->image()
                                ->imagePreviewHeight('100'),
                        ])
                        ->columns(2)
                        ->createItemButtonLabel('Добавить панораму'),
                ])->statePath('data'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')->sortable(),
                Tables\Columns\TextColumn::make('name')->limit(50)->sortable()->searchable(),
                Tables\Columns\BadgeColumn::make('data.type')
                    ->label('Тип')
                    ->enum([
                        'tour' => 'Виртуальный тур',
                        'personal_page' => 'Персональная страница'
                    ])
                    ->colors([
                        'primary' => 'tour',
                        'success' => 'personal_page',
                    ]),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\Action::make('view_tour')
                    ->label('Открыть тур')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => route('tour.view', $record->uuid))
                    ->openUrlInNewTab(),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTours::route('/'),
            'create' => Pages\CreateTour::route('/create'),
            'edit' => Pages\EditTour::route('/{record}/edit'),
        ];
    }
}