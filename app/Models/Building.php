<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Building extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'external_id',
        'fz_214',
        'name',
        'floors_ready',
        'building_state',
        'built_year',
        'ready_quarter',
        'building_phase',
        'building_type',
        'ceiling_height',
        'passenger_lifts_count',
        'cargo_lifts_count',
        'title',
        'address',
        'text',
        'flat_count',
        'floor_count',
        'total_area',
        'start_period',
        'end_period',
        'date_of_commissioning',
        'lat',
        'lng',
        'attachments',
        'attachment_file_names',
        'building_category_id',
        'complex_id',
    ];

    protected $casts = [
        'is_published' => 'boolean',
        'attachments' => 'array',
        'attachment_file_names' => 'array',
    ];

    public function buildingCategory() {
        return $this->belongsTo(BuildingCategory::class);
    }

    public function complex() {
        return $this->belongsTo(Complex::class);
    }

    public function scopeFilters(Builder $query, $filters = []) {
        $data = $filters ? collect($filters) : request();

        return $query
            ->when($data->has("categories") && !empty($data->get("categories")), function (Builder $query) use($data) {
                $query->whereIn("building_category_id", $data->get("categories"));
            })
            ->when($data->has("is_published"), function (Builder $query) use($data) {
                $query->where("is_published",true);
            });
    }
}
