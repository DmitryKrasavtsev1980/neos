<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ComplexResource\Pages;
use App\Filament\Resources\ComplexResource\RelationManagers;
use App\Models\Complex;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Filament\Tables\Columns\SpatieMediaLibraryImageColumn;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ComplexResource extends Resource
{
    protected static ?string $model = Complex::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    protected static ?string $navigationGroup = 'RealEstate';

    protected static ?int $navigationSort = 10;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()->schema([
                    Forms\Components\TextInput::make('external_id'),
                    Forms\Components\TextInput::make('name')
                        ->maxLength(255),
                    Forms\Components\TextInput::make('address')
                        ->maxLength(255),
                    Forms\Components\TextInput::make('lat')
                        ->maxLength(255),
                    Forms\Components\TextInput::make('lng')
                        ->maxLength(255),
                    Forms\Components\TextInput::make('title')
                        ->maxLength(255),
                    Forms\Components\Textarea::make('text')
                        ->maxLength(65535),
                    Forms\Components\TextInput::make('parking')
                        ->maxLength(255),
                    Forms\Components\Toggle::make('security'),
                    Forms\Components\Toggle::make('fenced_area'),
                    Forms\Components\Toggle::make('sports_ground'),
                    Forms\Components\Toggle::make('playground'),
                    Forms\Components\Toggle::make('school'),
                    Forms\Components\Toggle::make('kindergarten'),
                    Forms\Components\TextInput::make('developer_id'),
                    Forms\Components\TextInput::make('developer_name')
                        ->maxLength(255),
                    Forms\Components\TextInput::make('developer_site')
                        ->maxLength(255),
                    SpatieMediaLibraryFileUpload::make('fotos')
                        ->collection('complexes')
                        ->multiple()
                        ->enableReordering(),
                    Forms\Components\Toggle::make('is_published'),
                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id'),
                SpatieMediaLibraryImageColumn::make('fotos')->collection('complexes'),
                Tables\Columns\TextColumn::make('name'),
                Tables\Columns\TextColumn::make('address'),
                Tables\Columns\IconColumn::make('is_published')
                    ->boolean(),
            ])
            ->filters([
                //
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
            'index' => Pages\ListComplexes::route('/'),
            'create' => Pages\CreateComplex::route('/create'),
            'edit' => Pages\EditComplex::route('/{record}/edit'),
        ];
    }
}
