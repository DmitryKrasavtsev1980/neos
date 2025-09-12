<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use RalphJSmit\Laravel\SEO\Support\SEOData;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Post extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = ['category_id', 'title', 'slug', 'subtitle', 'content', 'is_published', 'published_at'];

    protected $casts = [
        'is_published' => 'boolean',
    ];

    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function tags() {
        return $this->belongsToMany(Tag::class);
    }

    public function getDynamicSEOData(): SEOData
    {
        $pathToFeaturedImageRelativeToPublicPath = $this->getMedia('posts')->first()->getUrl();

        // Override only the properties you want:
        return new SEOData(
            title: $this->title,
            description: $this->subtitle,
            image: $pathToFeaturedImageRelativeToPublicPath,
        );
    }

    public function scopeFilters(Builder $query, $filters = []) {
        $data = $filters ? collect($filters) : request();
        return $query
            ->when($data->has("categories") && !empty($data->get("categories")), function (Builder $query) use($data) {
                $query->whereIn("category_id", $data->get("categories"));
            })
            ->when($data->has("is_published"), function (Builder $query) use($data) {
                $query->where("is_published",true);
            });
    }
}
