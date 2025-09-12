<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NumberRoom extends Model
{
    use HasFactory;

    protected $fillable = ['number_rooms', 'title'];

    public function products() {
        return $this->hasMany(Product::class);
    }
}
