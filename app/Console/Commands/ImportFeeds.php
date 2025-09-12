<?php

namespace App\Console\Commands;

use App\Jobs\ProcessImportFeed;
use App\Models\ImportFeed;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class ImportFeeds extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'Import:Feeds';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $feeds = ImportFeed::where('is_imported', true)->get();
        if ($feeds) {
            foreach ($feeds as $feed) {
                ProcessImportFeed::dispatch($feed);
            }
        }
    }
}
