<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Complex extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'external_id',
        'name',
        'address',
        'lat',
        'lng',
        'title',
        'text',
        'parking',
        'security',
        'fenced_area',
        'sports_ground',
        'playground',
        'school',
        'kindergarten',
        'developer_id',
        'developer_name',
        'developer_site',
        'youtube_url',
    ];

    protected $casts = [
        'is_published' => 'boolean',
    ];

    public function buildings() {
        return $this->hasMany(Building::class);
    }

    public function products() {
        return $this->hasMany(Product::class);
    }
}
