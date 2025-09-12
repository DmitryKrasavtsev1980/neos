<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormatFeed extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'slug'];

    public function importfeeds() {
        return $this->hasMany(ImportFeed::class);
    }
}
