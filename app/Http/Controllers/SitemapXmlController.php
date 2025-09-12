<?php

namespace App\Http\Controllers;

use App\Models\FilamentPage;
use App\Models\Post;
use App\Models\Product;
use Illuminate\Http\Request;

class SitemapXmlController extends Controller
{
    public function index()
    {
        $pages = FilamentPage::all();
        $posts = Post::where('is_published', true)->get();
        $products = Product::where('is_published', true)->get();

        return response()->view("sitemap", ['pages'=> $pages, 'posts'=> $posts, 'products'=> $products,])
            ->header('Content-Type','text/xml');
    }

}
