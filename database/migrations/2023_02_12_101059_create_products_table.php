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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('feed_id')->nullable();
            $table->bigInteger('external_id')->nullable();
            $table->string('title')->nullable();
            $table->text('text')->nullable();
            $table->string('address')->nullable();
            $table->integer('number_rooms')->nullable();
            $table->integer('floor')->nullable();
            $table->integer('floors')->nullable();
            $table->double('total_area', 8, 2)->nullable();
            $table->double('living_area', 8, 2)->nullable();
            $table->double('kitchen_area', 8, 2)->nullable();
            $table->double('land_area', 8, 2)->nullable();
            $table->integer('loggias_count')->nullable();
            $table->integer('balconies_count')->nullable();
            $table->double('price', 12, 2)->nullable();
            $table->string('lat')->nullable();
            $table->string('lng')->nullable();
            $table->json('polygons')->nullable();
            $table->string('matterport_url')->nullable();
            $table->string('youtube_url')->nullable();
            $table->foreignId('type_operation_id')->onDelete('cascade')->nullable()->constrained();
            $table->foreignId('product_category_id')->onDelete('cascade')->nullable()->constrained();
            $table->foreignId('number_room_id')->onDelete('cascade')->nullable()->constrained();
            $table->foreignId('building_id')->onDelete('cascade')->nullable()->constrained();
            $table->foreignId('complex_id')->onDelete('cascade')->nullable()->constrained();
            $table->boolean('is_published')->default(true);
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
        Schema::dropIfExists('products');
    }
};
