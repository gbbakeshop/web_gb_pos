<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->string('cashier_id')->nullable();
            $table->double('discount')->nullable();
            $table->double('tax')->nullable();
            $table->double('subtotal')->nullable();
            $table->double('total')->nullable();
            $table->double('tenders')->nullable();
            $table->double('change')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sales');
    }
};
