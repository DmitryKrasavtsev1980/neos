# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Команды разработки

### Основные команды
- `php artisan serve` - запуск локального сервера разработки
- `npm run dev` - запуск Vite в режиме разработки (hot reload для фронтенда)
- `npm run build` - сборка production версии фронтенда
- `composer install` - установка PHP зависимостей
- `npm install` - установка JavaScript зависимостей

### Тестирование
- `php phpunit.phar` - запуск всех тестов (используется локальный phpunit.phar)
- `php phpunit.phar --filter TestName` - запуск конкретного теста
- `php phpunit.phar tests/Feature` - запуск только Feature тестов
- `php phpunit.phar tests/Unit` - запуск только Unit тестов

### Линтинг и форматирование
- `./vendor/bin/pint` - Laravel Pint для форматирования PHP кода

### Artisan команды
- `php artisan migrate` - запуск миграций базы данных
- `php artisan tinker` - интерактивная консоль Laravel
- `php artisan route:list` - список всех маршрутов

## Архитектура приложения

### Основная структура
Это Laravel 9 приложение с Filament Admin Panel (v2) в качестве основной системы управления контентом. Проект построен как система управления недвижимостью и страницами сайта.

### Ключевые компоненты

#### Filament CMS
- Основная логика админ-панели находится в `app/Filament/`
- Resources для управления различными сущностями (Building, Complex, Category, etc.)
- Кастомные шаблоны страниц в `app/Filament/FilamentPageTemplates/`
- Динамические страницы через `beier/filament-pages` пакет

#### Модели данных
- `Building` - здания/объекты недвижимости
- `Complex` - жилые комплексы
- `Category`, `ProductCategory`, `BuildingCategory` - различные категории
- `Post`, `Tag` - система блога
- `ImportFeed`, `FormatFeed` - система импорта данных
- `User` - пользователи с доступом к Filament

#### Система компонентов
Модульная система UI компонентов:
- `HeroComponent` - герои страниц
- `FeatureComponent` - блоки с возможностями
- `TextBlockComponent` - текстовые блоки
- `NavigationComponent` - навигация
- `FooterComponent` - подвал
- `NonCustomizableComponent` - нередактируемые компоненты

#### Маршрутизация
- `/` - главная страница (через FilamentPageController)
- `/{filamentPage?}/{id?}` - динамические страницы Filament
- `/sitemap.xml` - карта сайта

### Фронтенд технологии
- **Vite** для сборки ресурсов
- **TailwindCSS** для стилизации
- **AlpineJS** для интерактивности
- **Livewire** для реактивных компонентов

### Медиа файлы
Использует `spatie/laravel-media-library` через Filament плагин для управления загрузками файлов.

### Особенности конфигурации
- Аутентификация пользователей настроена через метод `canAccessFilament()` в модели User
- Используется кастомный phpunit.phar файл вместо стандартной установки через Composer
- Настроен импорт данных через команду `ImportFeeds`