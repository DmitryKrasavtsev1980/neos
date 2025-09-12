<?php

namespace App\Jobs;

use App\Models\Building;
use App\Models\Complex;
use App\Models\Product;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class ProcessUploadImage implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $id;
    public $modelName;
    public $url;
    public $model;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($id, $modelName, $url)
    {
        $this->id = $id;
        $this->modelName = $modelName;
        $this->url = $url;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        switch ($this->modelName) {
            case 'products':
                $this->model = Product::find($this->id);
                break;
            case 'complexes':
                $this->model = Complex::find($this->id);
                break;
            case 'buildings':
                $this->model = Building::find($this->id);
                break;
        }

        if ($this->model)
            $this->model
                ->addMediaFromUrl(trim($this->url))
                ->toMediaCollection($this->modelName);
    }
}
