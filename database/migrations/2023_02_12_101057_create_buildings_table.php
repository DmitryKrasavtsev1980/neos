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
        Schema::create('buildings', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('external_id')->nullable();
            $table->boolean('fz_214')->nullable();
            $table->string('name')->nullable();
            $table->integer('floors_ready')->nullable();
            $table->string('building_state')->nullable();
            $table->string('built_year')->nullable();
            $table->string('ready_quarter')->nullable();
            $table->string('building_phase')->nullable();
            $table->string('building_type')->nullable();
            $table->double('ceiling_height', 8, 2)->nullable();
            $table->string('passenger_lifts_count')->nullable();
            $table->string('cargo_lifts_count')->nullable();
            $table->string('title')->nullable();
            $table->string('address')->nullable();
            $table->text('text')->nullable();
            $table->integer('flat_count')->nullable();
            $table->integer('floor_count')->nullable();
            $table->double('total_area', 8, 2)->nullable();
            $table->string('lat')->nullable();
            $table->string('lng')->nullable();
            $table->string('start_period')->nullable();
            $table->string('end_period')->nullable();
            $table->dateTime('date_of_commissioning')->nullable();
            $table->foreignId('building_category_id')->onDelete('cascade')->nullable()->constrained();
            $table->foreignId('complex_id')->onDelete('cascade')->nullable()->constrained();
            $table->longText('attachments')->nullable();
            $table->longText('attachment_file_names')->nullable();
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
        Schema::dropIfExists('buildings');
    }
};
