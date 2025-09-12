<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('operation_category_feed_names', function (Blueprint $table) {
            $table->id();
            $table->foreignId('type_operation_id')->onDelete('cascade')->nullable()->constrained();
            $table->foreignId('product_category_id')->onDelete('cascade')->nullable()->constrained();
            $table->string('feed_name_cian')->nullable();
            $table->string('feed_name_avito')->nullable();
            $table->string('feed_name_domclick')->nullable();
            $table->string('feed_name_flico')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('operation_category_feed_names');
    }
};
