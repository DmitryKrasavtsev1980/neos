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
        Schema::create('complexes', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('feed_id')->nullable();
            $table->bigInteger('external_id')->nullable();
            $table->string('name')->nullable();
            $table->string('address')->nullable();
            $table->string('lat')->nullable();
            $table->string('lng')->nullable();
            $table->string('title')->nullable();
            $table->text('text')->nullable();
            $table->string('parking')->nullable();
            $table->boolean('security')->nullable();
            $table->boolean('fenced_area')->nullable();
            $table->boolean('sports_ground')->nullable();
            $table->boolean('playground')->nullable();
            $table->boolean('school')->nullable();
            $table->boolean('kindergarten')->nullable();
            $table->bigInteger('developer_id')->nullable();
            $table->string('developer_name')->nullable();
            $table->string('developer_site')->nullable();
            $table->string('youtube_url')->nullable();
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
        Schema::dropIfExists('complexes');
    }
};
