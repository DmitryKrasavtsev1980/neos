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
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\Placeholder;
use Illuminate\Support\Str;

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
                TextInput::make('name')
                    ->required()
                    ->maxLength(255),
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
                    FileUpload::make('gallery_images')
                        ->label('Галерея фотографий')
                        ->disk('public')
                        ->directory('gallery')
                        ->multiple()
                        ->columnSpanFull()
                        ->visible(fn ($get) => $get('type') === 'personal_page'),
                    FileUpload::make('floor_plan')
                        ->label('План помещения')
                        ->disk('public')
                        ->directory('floor-plans')
                        ->columnSpanFull()
                        ->nullable(),

                    // Редактор позиций панорам на плане
                    Placeholder::make('plan_editor')
                        ->label('Позиции панорам на плане')
                        ->content(function ($get) {
                            $floorPlan = $get('floor_plan');
                            $members = $get('members') ?: [];

                            return view('filament.forms.components.plan-positions-editor', [
                                'floorPlan' => $floorPlan,
                                'members' => $members,
                            ]);
                        })
                        ->columnSpanFull()
                        ->visible(fn ($get) => !empty($get('floor_plan'))),

                    Repeater::make('members')
                        ->label('Панорамы')
                        ->schema([
                            // UUID для идентификации панорамы
                            Hidden::make('id')
                                ->default(fn () => (string) Str::uuid()),

                            TextInput::make('title')
                                ->label('Название панорамы')
                                ->required()
                                ->maxLength(255)
                                ->columnSpanFull(),

                            Toggle::make('hide_in_gallery')
                                ->label('Скрыть в галерее')
                                ->inline(false)
                                ->default(false),

                            FileUpload::make('pano')
                                ->label('Панорама (360° изображение)')
                                ->disk('public')
                                ->directory('tour-components')
                                ->columnSpanFull(),

                            // Скрытое поле для хранения позиции панорамы на плане
                            Hidden::make('plan_position')
                                ->default(null)
                                ->afterStateHydrated(function ($component, $state) {
                                    // При загрузке: если состояние - массив, кодируем в JSON
                                    if (is_array($state)) {
                                        $component->state(json_encode($state));
                                    } elseif (is_string($state) && !empty($state)) {
                                        // Проверяем что это валидный JSON
                                        $decoded = json_decode($state, true);
                                        if (json_last_error() === JSON_ERROR_NONE) {
                                            $component->state($state);
                                        } else {
                                            $component->state(null);
                                        }
                                    }
                                })
                                ->dehydrateStateUsing(function ($state) {
                                    // При сохранении: преобразуем JSON обратно в массив
                                    if (is_string($state) && !empty($state)) {
                                        $decoded = json_decode($state, true);
                                        return $decoded ?: null;
                                    }
                                    return is_array($state) ? $state : null;
                                }),

                            // Настройки начальной позиции камеры
                            Fieldset::make('Начальная позиция камеры')
                                ->schema([
                                    TextInput::make('camera.yaw')
                                        ->label('Yaw (горизонтальный угол)')
                                        ->numeric()
                                        ->default(0)
                                        ->suffix('°')
                                        ->minValue(0)
                                        ->maxValue(360)
                                        ->helperText('0-360°: угол поворота по горизонтали'),

                                    TextInput::make('camera.pitch')
                                        ->label('Pitch (вертикальный угол)')
                                        ->numeric()
                                        ->default(0)
                                        ->suffix('°')
                                        ->minValue(-90)
                                        ->maxValue(90)
                                        ->helperText('-90 до 90°: угол наклона камеры'),

                                    TextInput::make('camera.zoom')
                                        ->label('Zoom (уровень приближения)')
                                        ->numeric()
                                        ->default(30)
                                        ->minValue(0)
                                        ->maxValue(100)
                                        ->helperText('0-100: уровень зума (0=далеко, 100=близко)'),
                                ])
                                ->columns(3),

                            // Калибровка ориентации (для точного совпадения хотспотов между дублями)
                            Fieldset::make('Калибровка ориентации')
                                ->schema([
                                    TextInput::make('calibration.pan')
                                        ->label('Поворот (pan)')
                                        ->numeric()
                                        ->default(0)
                                        ->suffix('°')
                                        ->minValue(-10)
                                        ->maxValue(10)
                                        ->helperText('Мелкая корректировка базового направления (−10…10°)'),

                                    TextInput::make('calibration.tilt')
                                        ->label('Наклон (tilt)')
                                        ->numeric()
                                        ->default(0)
                                        ->suffix('°')
                                        ->minValue(-10)
                                        ->maxValue(10)
                                        ->helperText('Мелкая корректировка горизонта (−10…10°)'),
                                ])
                                ->columns(2),

                            // Настройки автовращения
                            Fieldset::make('Автовращение')
                                ->schema([
                                    Toggle::make('autorotate.enabled')
                                        ->label('Включить автовращение')
                                        ->default(false)
                                        ->reactive(),

                                    TextInput::make('autorotate.delay')
                                        ->label('Задержка запуска (мс)')
                                        ->numeric()
                                        ->default(3000)
                                        ->minValue(0)
                                        ->helperText('Задержка перед началом вращения в миллисекундах')
                                        ->visible(fn ($get) => $get('autorotate.enabled')),

                                    TextInput::make('autorotate.speed')
                                        ->label('Скорость вращения')
                                        ->default('2rpm')
                                        ->helperText('Например: 2rpm, 5rpm')
                                        ->visible(fn ($get) => $get('autorotate.enabled')),

                                    TextInput::make('autorotate.pitch')
                                        ->label('Фиксированный Pitch')
                                        ->numeric()
                                        ->default(0)
                                        ->suffix('°')
                                        ->helperText('Вертикальный угол при вращении')
                                        ->visible(fn ($get) => $get('autorotate.enabled')),
                                ])
                                ->columns(2),

                            // Текстовое поле для хранения hotspots (скрыто через CSS)
                            TextInput::make('hotspots')
                                ->label('Hotspots JSON')
                                ->default('[]')
                                ->extraAttributes(['style' => 'display:none'])
                                ->extraInputAttributes(['data-hotspots-field' => 'true'])
                                ->afterStateHydrated(function ($component, $state) {
                                    // Если состояние - массив, кодируем в JSON
                                    if (is_array($state)) {
                                        $component->state(json_encode($state));
                                    } elseif (is_string($state)) {
                                        // Проверяем что это валидный JSON
                                        $decoded = json_decode($state, true);
                                        if (json_last_error() === JSON_ERROR_NONE) {
                                            $component->state($state);
                                        } else {
                                            $component->state('[]');
                                        }
                                    }
                                })
                                ->dehydrateStateUsing(function ($state) {
                                    // При сохранении преобразуем JSON обратно в массив
                                    if (is_string($state)) {
                                        $decoded = json_decode($state, true);
                                        return $decoded ?: [];
                                    }
                                    return is_array($state) ? $state : [];
                                }),

                            // Кнопка редактора hotspots
                            Placeholder::make('hotspots_editor')
                                ->label('Навигация между панорамами')
                                ->content(function ($get, $record) {
                                    $panoramaId = $get('id');
                                    $panoramaUrl = $get('pano');
                                    $panoramaTitle = $get('title') ?: 'Панорама';

                                    // Получаем hotspots и декодируем если это JSON строка
                                    $existingHotspots = $get('hotspots') ?: [];
                                    if (is_string($existingHotspots)) {
                                        $decoded = json_decode($existingHotspots, true);
                                        $existingHotspots = $decoded ?: [];
                                    }

                                    // Получаем все панорамы из родительского repeater
                                    $allMembers = $get('../../members') ?: [];
                                    $allPanoramas = collect($allMembers)
                                        ->filter(fn($m) => isset($m['id']) && $m['id'] !== $panoramaId)
                                        ->map(fn($m) => [
                                            'id' => $m['id'],
                                            'title' => $m['title'] ?? 'Панорама'
                                        ])
                                        ->values()
                                        ->toArray();

                                    return view('filament.forms.components.hotspot-editor-button', [
                                        'panoramaId' => $panoramaId,
                                        'panoramaUrl' => $panoramaUrl,
                                        'panoramaTitle' => $panoramaTitle,
                                        'existingHotspots' => $existingHotspots,
                                        'allPanoramas' => $allPanoramas,
                                    ]);
                                })
                                ->columnSpanFull(),
                        ])
                        ->columns(1)
                        ->defaultItems(0)
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
