<?php

namespace App\Providers;

use Filament\Facades\Filament;
use Filament\Navigation\NavigationGroup;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Filament::serving(function () {
            Filament::registerNavigationGroups([
                NavigationGroup::make()
                    ->label('RealEstate')
                    ->icon('heroicon-s-shopping-cart')
                    ->collapsed(),
                NavigationGroup::make()
                    ->label('Blog')
                    ->icon('heroicon-s-pencil')
                    ->collapsed(),
                NavigationGroup::make()
                    ->label('3D tours')
                    ->icon('heroicon-s-cube')
                    ->collapsed(),
                NavigationGroup::make()
                    ->label('Pages & Components')
                    ->icon('heroicon-s-cog')
                    ->collapsed(),
                NavigationGroup::make()
                    ->label('Settings')
                    ->icon('heroicon-s-cog')
                    ->collapsed(),
            ]);
        });
    }
}
