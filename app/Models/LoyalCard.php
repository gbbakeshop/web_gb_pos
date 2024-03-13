<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoyalCard extends Model
{
    use HasFactory;
    protected $fillable = [
        'fullname',
        'barcode',
        'pincode',
        'discount',
    ];
}
