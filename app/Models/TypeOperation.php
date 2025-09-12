<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeOperation extends Model
{
    use HasFactory;

    protected $fillable = ['filter_title', 'operation_title'];

    public function products() {
        return $this->hasMany(Product::class);
    }
}
