<?php

namespace App\Models;

use Beier\FilamentPages\Models\FilamentPage as BeierFilamentPage;
use RalphJSmit\Laravel\SEO\Support\HasSEO;

class FilamentPage extends BeierFilamentPage
{
    use HasSEO;
}
