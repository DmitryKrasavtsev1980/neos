<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TypeOperationResource\Pages;
use App\Filament\Resources\TypeOperationResource\RelationManagers;
use App\Models\TypeOperation;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TypeOperationResource extends Resource
{
    protected static ?string $model = TypeOperation::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    protected static ?string $navigationGroup = 'RealEstate';

    protected static ?int $navigationSort = 3;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('filter_title'),
                Forms\Components\TextInput::make('operation_title')
                    ->maxLength(255),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id'),
                Tables\Columns\TextColumn::make('filter_title'),
                Tables\Columns\TextColumn::make('operation_title'),
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
            'index' => Pages\ListTypeOperations::route('/'),
            'create' => Pages\CreateTypeOperation::route('/create'),
            'edit' => Pages\EditTypeOperation::route('/{record}/edit'),
        ];
    }
}
