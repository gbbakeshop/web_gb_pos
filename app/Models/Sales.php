<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Sales extends Model
{
    use HasFactory;
    protected $fillable = [
        'cashier_id',
        'receipt_id',
        'discount',
        'tax',
        'subtotal',
        'total',
        'tenders',
        'change'
     ];
    

     public function sales_item(): HasMany
    {
        return $this->hasMany(SalesItem::class);
    }
}
