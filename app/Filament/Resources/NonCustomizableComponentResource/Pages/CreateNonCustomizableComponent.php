<?php

namespace App\Filament\Resources\NonCustomizableComponentResource\Pages;

use App\Filament\Resources\NonCustomizableComponentResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateNonCustomizableComponent extends CreateRecord
{
    protected static string $resource = NonCustomizableComponentResource::class;
}
