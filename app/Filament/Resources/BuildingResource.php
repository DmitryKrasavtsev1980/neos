<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BuildingResource\Pages;
use App\Filament\Resources\BuildingResource\RelationManagers;
use App\Models\Building;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class BuildingResource extends Resource
{
    protected static ?string $model = Building::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    protected static ?string $navigationGroup = 'RealEstate';

    protected static ?int $navigationSort = 4;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()->schema([
                    Select::make('building_category_id')
                        ->required()
                        ->relationship('buildingCategory', 'title'),
                    Select::make('complex_id')
                        ->required()
                        ->relationship('complex', 'name'),
                    Fieldset::make('domclick')
                        ->schema([
                            TextInput::make('external_id')
                                ->maxLength(255),
                            Toggle::make('fz_214'),
                            TextInput::make('name')
                                ->maxLength(255),
                            TextInput::make('floors_ready')
                                ->maxLength(255),
                            TextInput::make('building_state')
                                ->maxLength(255),
                            TextInput::make('built_year')
                                ->maxLength(255),
                            TextInput::make('ready_quarter')
                                ->maxLength(255),
                            TextInput::make('building_phase')
                                ->maxLength(255),
                            TextInput::make('building_type')
                                ->maxLength(255),
                            TextInput::make('ceiling_height')
                                ->maxLength(255),
                            TextInput::make('passenger_lifts_count')
                                ->maxLength(255),
                            TextInput::make('cargo_lifts_count')
                                ->maxLength(255),
                        ])->columns(1),
                    TextInput::make('title')
                        ->maxLength(255),
                    TextInput::make('address')
                        ->maxLength(255),
                    RichEditor::make('text')
                        ->maxLength(65535),
                    TextInput::make('flat_count'),
                    TextInput::make('floor_count'),
                    TextInput::make('total_area'),
                    TextInput::make('lat')
                        ->maxLength(255),
                    TextInput::make('lng')
                        ->maxLength(255),
                    TextInput::make('start_period')
                        ->maxLength(255),
                    TextInput::make('end_period')
                        ->maxLength(255),
                    DateTimePicker::make('date_of_commissioning'),
                    SpatieMediaLibraryFileUpload::make('fotos')
                        ->collection('buildings')
                        ->multiple()
                        ->enableReordering(),
                    FileUpload::make('attachments')
                        ->multiple()
                        ->storeFileNamesIn('attachment_file_names')
                        ->acceptedFileTypes(['application/pdf'])
                        ->enableReordering(),
                    Toggle::make('is_published'),
                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title'),
                TextColumn::make('name'),
                TextColumn::make('buildingCategory.title'),
                TextColumn::make('complex.name'),
                IconColumn::make('is_published')
                    ->boolean(),
            ])
            ->filters([
                SelectFilter::make('building_category_id')->relationship('buildingCategory', 'title'),
                SelectFilter::make('complex_id')->relationship('complex', 'name'),
            ])
            ->actions([
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
            'index' => Pages\ListBuildings::route('/'),
            'create' => Pages\CreateBuilding::route('/create'),
            'edit' => Pages\EditBuilding::route('/{record}/edit'),
        ];
    }
}
