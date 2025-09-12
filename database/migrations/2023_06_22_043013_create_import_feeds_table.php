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
        Schema::create('import_feeds', function (Blueprint $table) {
            $table->id();
            $table->foreignId('format_feed_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->string('url');
            $table->time('imported_at')->nullable();
            $table->boolean('is_imported')->default(false);
            $table->text('text')->nullable();
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
        Schema::dropIfExists('import_feeds');
    }
};
