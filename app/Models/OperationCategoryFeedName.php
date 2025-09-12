<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OperationCategoryFeedName extends Model
{
    use HasFactory;

    protected $fillable = ['type_operation_id', 'product_category_id', 'feed_name_cian', 'feed_name_avito', 'feed_name_domclick', 'feed_name_flico'];

    public function typeOperation() {
        return $this->belongsTo(TypeOperation::class);
    }

    public function productCategory() {
        return $this->belongsTo(ProductCategory::class);
    }
}
