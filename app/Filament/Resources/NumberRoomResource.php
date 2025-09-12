<?php

namespace App\Filament\Resources;

use App\Filament\Resources\NumberRoomResource\Pages;
use App\Filament\Resources\NumberRoomResource\RelationManagers;
use App\Models\NumberRoom;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class NumberRoomResource extends Resource
{
    protected static ?string $model = NumberRoom::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    protected static ?string $navigationGroup = 'RealEstate';

    protected static ?int $navigationSort = 4;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('number_rooms'),
                Forms\Components\TextInput::make('title')
                    ->maxLength(255),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id'),
                Tables\Columns\TextColumn::make('number_rooms'),
                Tables\Columns\TextColumn::make('title'),
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
            'index' => Pages\ListNumberRooms::route('/'),
            'create' => Pages\CreateNumberRoom::route('/create'),
            'edit' => Pages\EditNumberRoom::route('/{record}/edit'),
        ];
    }
}
