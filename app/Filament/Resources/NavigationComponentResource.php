<?php

namespace App\Filament\Resources;

use App\Filament\Resources\NavigationComponentResource\Pages;
use App\Filament\Resources\NavigationComponentResource\RelationManagers;
use App\Models\NavigationComponent;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\Component;
use Filament\Forms\Components\Group;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use SplFileInfo;

class NavigationComponentResource extends Resource
{
    protected static ?string $model = NavigationComponent::class;

    protected static ?string $navigationIcon = 'heroicon-o-arrow-sm-right';

    protected static ?string $navigationLabel = 'Navigation';

    protected static ?string $navigationGroup = 'Pages & Components';

    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Group::make()
                    ->schema([
                        static::getPrimaryColumnSchema(),
                        ...static::getTemplateSchemas(),
                    ])
                    ->columnSpan([
                        'sm' => 9,
                        'xl' => 7,
                        ]),
                static::getSecondaryColumnSchema(),
            ])
            ->columns([
                'sm' => 9,
                'lg' => null,
            ]);
    }

    public static function getPrimaryColumnSchema(): Component
    {
        return Card::make()
            ->schema([
                ...static::insertBeforePrimaryColumnSchema(),
                TextInput::make('name')
                    ->required()
                    ->maxLength(255),
                ...static::insertBeforePrimaryColumnSchema(),
            ]);
    }

    public static function getSecondaryColumnSchema(): Component
    {
        return Card::make()
            ->schema([
                Select::make('data.template')
                    ->reactive()
                    ->afterStateUpdated(fn (string $context, $state, callable $set) => $set('data.templateName', Str::snake(self::getTemplateName($state))))
                    ->afterStateHydrated(fn (string $context, $state, callable $set) => $set('data.templateName', Str::snake(self::getTemplateName($state))))
                    ->options(static::getTemplates()),
                Hidden::make('data.templateName')
                    ->reactive(),
            ])
            ->columnSpan(['lg' => 2]);
    }

    public static function getTemplates(): Collection
    {
        return static::getTemplateClasses()->mapWithKeys(fn ($class) => [$class => $class::title()]);
    }

    public static function getTemplateClasses(): Collection
    {
        $filesystem = app(Filesystem::class);

        return collect($filesystem->allFiles(app_path('Filament/Resources/NavigationComponentResource/PageTemplates')))
            ->map(function (SplFileInfo $file): string {
                return (string) Str::of('App\\Filament\\Resources\\NavigationComponentResource\\PageTemplates')
                    ->append('\\', $file->getRelativePathname())
                    ->replace(['/', '.php'], ['\\', '']);
            });
    }

    public static function getTemplateSchemas(): array
    {

        return static::getTemplateClasses()
            ->map(fn ($class) => Group::make($class::schema())
                ->afterStateHydrated(fn ($component, $state) => $component->getChildComponentContainer()->fill($state))
                ->statePath('data.content')
                ->visible(fn ($get) => $get('data.template') === $class)
            )
            ->toArray();
    }

    public static function getTemplateName($class)
    {
        return Str::of($class)->afterLast('\\')->snake()->toString();
    }

    public static function insertBeforePrimaryColumnSchema(): array
    {
        return [];
    }

    public static function insertAfterPrimaryColumnSchema(): array
    {
        return [];
    }

    public static function insertBeforeSecondaryColumnSchema(): array
    {
        return [];
    }

    public static function insertAfterSecondaryColumnSchema(): array
    {
        return [];
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')->sortable(),
                Tables\Columns\TextColumn::make('name')->limit(50)->sortable()->searchable(),
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
            'index' => Pages\ListNavigationComponents::route('/'),
            'create' => Pages\CreateNavigationComponent::route('/create'),
            'edit' => Pages\EditNavigationComponent::route('/{record}/edit'),
        ];
    }
}
