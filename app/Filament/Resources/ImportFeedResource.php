<?php

namespace App\Filament\Resources;

use App\Filament\Actions\ImportFeedAction;
use App\Filament\Resources\ImportFeedResource\Pages;
use App\Filament\Resources\ImportFeedResource\RelationManagers;
use App\Jobs\ProcessImportFeed;
use App\Models\ImportFeed;
use Closure;
use Filament\Forms;
use Filament\Forms\Components\Actions\Action;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class ImportFeedResource extends Resource
{
    protected static ?string $model = ImportFeed::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    protected static ?string $navigationGroup = 'RealEstate';

    protected static ?int $navigationSort = 15;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()->schema([
                    Select::make('format_feed_id')->required()
                        ->relationship('formatFeed', 'title'),
                    Forms\Components\TextInput::make('title')
                        ->required()
                        ->maxLength(255),
                    Forms\Components\TextInput::make('url')
                        ->required()
                        ->maxLength(255),
                    Forms\Components\TimePicker::make('imported_at'),
                    Forms\Components\Toggle::make('is_imported'),
                    RichEditor::make('text')
                        ->maxLength(65535),
                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title'),
                Tables\Columns\TextColumn::make('formatFeed.title'),
                Tables\Columns\TextColumn::make('url'),
                Tables\Columns\TextColumn::make('imported_at'),
                Tables\Columns\IconColumn::make('is_imported')
                    ->boolean(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\ButtonAction::make('ImportNow')->action(fn(ImportFeed $record) => ProcessImportFeed::dispatch($record)),
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
            'index' => Pages\ListImportFeeds::route('/'),
            'create' => Pages\CreateImportFeed::route('/create'),
            'edit' => Pages\EditImportFeed::route('/{record}/edit'),
        ];
    }
}
