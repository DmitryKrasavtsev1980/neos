<?php

namespace App\Filament\Resources;

use App\Filament\Resources\OperationCategoryFeedNameResource\Pages;
use App\Filament\Resources\OperationCategoryFeedNameResource\RelationManagers;
use App\Models\OperationCategoryFeedName;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class OperationCategoryFeedNameResource extends Resource
{
    protected static ?string $model = OperationCategoryFeedName::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    protected static ?string $navigationGroup = 'RealEstate';

    protected static ?int $navigationSort = 17;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Select::make('type_operation_id')->required()
                    ->relationship('typeOperation', 'operation_title'),
                Select::make('product_category_id')->required()
                    ->relationship('productCategory', 'title'),
                Forms\Components\TextInput::make('feed_name_cian')
                    ->maxLength(255),
                Forms\Components\TextInput::make('feed_name_avito')
                    ->maxLength(255),
                Forms\Components\TextInput::make('feed_name_domclick')
                    ->maxLength(255),
                Forms\Components\TextInput::make('feed_name_flico')
                    ->maxLength(255),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('typeOperation.operation_title'),
                TextColumn::make('productCategory.title'),
                Tables\Columns\TextColumn::make('feed_name_cian'),
                Tables\Columns\TextColumn::make('feed_name_avito'),
                Tables\Columns\TextColumn::make('feed_name_domclick'),
                Tables\Columns\TextColumn::make('feed_name_flico'),
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
            'index' => Pages\ListOperationCategoryFeedNames::route('/'),
            'create' => Pages\CreateOperationCategoryFeedName::route('/create'),
            'edit' => Pages\EditOperationCategoryFeedName::route('/{record}/edit'),
        ];
    }
}
