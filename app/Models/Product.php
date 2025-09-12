<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;
use RalphJSmit\Laravel\SEO\Support\HasSEO;
use RalphJSmit\Laravel\SEO\Support\SEOData;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Product extends Model implements HasMedia
{
    use HasSEO, HasFactory, InteractsWithMedia;

    protected $fillable = [
        'feed_id',
        'external_id',
        'title',
        'text',
        'address',
        'number_rooms',
        'floor',
        'floors',
        'total_area',
        'living_area',
        'kitchen_area',
        'land_area',
        'loggias_count',
        'balconies_count',
        'price',
        'lat',
        'lng',
        'matterport_url',
        'youtube_url',
        'building_id',
        'complex_id',
        'type_operation_id',
        'product_category_id',
        'number_room_id',
        'product_sub_category_id',
    ];

    protected $casts = [
        'is_published' => 'boolean',
    ];

    public function typeOperation() {
        return $this->belongsTo(TypeOperation::class);
    }

    public function productCategory() {
        return $this->belongsTo(ProductCategory::class);
    }

    public function numberRoom() {
        return $this->belongsTo(NumberRoom::class);
    }

    public function complex() {
        return $this->belongsTo(Complex::class);
    }

    public function building() {
        return $this->belongsTo(Building::class);
    }

    public function getDynamicSEOData(): SEOData
    {
        $pathToFeaturedImageRelativeToPublicPath = $this->getMedia('products')->first()->getUrl();

        // Override only the properties you want:
        return new SEOData(
            title: $this->typeOperation->filter_title . ' ' . $this->title . ', ' . $this->total_area . ' м2 по адресу: ' . $this->address . ', '. $this->floor . ' этаж, по цене ' . $this->price . ' рублей',
            description: '⭐️'. $this->typeOperation->operation_title . ' ' . $this->title . ', ' . $this->total_area . ' м2 по адресу: ' . $this->address . ', '. $this->floor . ' этаж, по цене ' . $this->price . ' рублей : фото и информация об объекте.',
            image: $pathToFeaturedImageRelativeToPublicPath,
        );
    }

    public function scopeFilters(Builder $query, $filters = []) {
        $data = $filters ? collect($filters) : request();


        return $query
            ->when($data->has("typeoperations") && !empty($data->get("typeoperations")), function (Builder $query) use($data) {
                $query->whereIn("type_operation_id", $data->get("typeoperations"));
            })
            ->when($data->has("categories") && !empty($data->get("categories")), function (Builder $query) use($data) {
                $query->whereIn("product_category_id", $data->get("categories"));
            })
            ->when($data->has("rooms") && !empty($data->get("rooms")), function (Builder $query) use($data) {
                $query->whereIn("number_room_id", $data->get("rooms"));
            })
            ->when($data->has("complexes") && !empty($data->get("complexes")), function (Builder $query) use($data) {
                $query->whereIn("complex_id", $data->get("complexes"));
            })
            ->when($data->has("prices") && !empty($data->get("prices")), function (Builder $query) use($data) {
                $query->whereBetween("price", $data->get("prices"));
            });
    }
}
