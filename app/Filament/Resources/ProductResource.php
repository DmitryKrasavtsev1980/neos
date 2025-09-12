<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Pages\Actions\Action;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\SpatieMediaLibraryImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Str;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    protected static ?string $navigationGroup = 'RealEstate';

    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()->schema([
                    Select::make('complex_id')
                        ->relationship('complex', 'name'),
                    Select::make('building_id')
                        ->relationship('building', 'name'),
                    Select::make('product_operation_id')->required()
                        ->relationship('typeOperation', 'operation_title'),
                    Select::make('product_category_id')->required()
                        ->relationship('productCategory', 'title'),
                    TextInput::make('address')
                        ->required()
                        ->maxLength(255),
                    TextInput::make('number_rooms'),
                    TextInput::make('floor'),
                    TextInput::make('floors'),
                    TextInput::make('total_area'),
                    TextInput::make('living_area'),
                    TextInput::make('kitchen_area'),
                    TextInput::make('land_area'),
                    TextInput::make('loggias_count'),
                    TextInput::make('balconies_count'),
                    RichEditor::make('text')
                        ->maxLength(65535),
                    TextInput::make('price')
                        ->required(),
                    TextInput::make('lat')
                        ->maxLength(255),
                    TextInput::make('lng')
                        ->maxLength(255),
                    SpatieMediaLibraryFileUpload::make('fotos')
                        ->collection('products')
                        ->multiple()
                        ->enableReordering(),
                    Toggle::make('is_published'),
                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('external_id'),
                SpatieMediaLibraryImageColumn::make('fotos')->collection('products'),
                TextColumn::make('typeOperation.operation_title'),
                TextColumn::make('productCategory.title'),
                TextColumn::make('address')->searchable(),
                TextColumn::make('number_rooms'),
                TextColumn::make('floor'),
                TextColumn::make('floors'),
                TextColumn::make('total_area'),
                TextColumn::make('price'),
                IconColumn::make('is_published')
                    ->boolean(),
            ])
            ->filters([
                SelectFilter::make('type_operation_id')->relationship('typeOperation', 'operation_title'),
                SelectFilter::make('product_category_id')->relationship('productCategory', 'title'),
                SelectFilter::make('complex_id')->relationship('complex', 'name'),
                SelectFilter::make('building_id')->relationship('building', 'name'),
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
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
