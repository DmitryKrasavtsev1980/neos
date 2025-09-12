<?php

namespace App\Http\Livewire;

use App\Models\Category;
use App\Models\Post;
use Carbon\Carbon;
use Livewire\Component;
use Livewire\WithPagination;

class BlogList extends Component
{
    use WithPagination;

    public $filters = ["categories" => [], 'is_published' => 1];

    public $categories;

    public $filtersselect;

    public function filterCategory($id = null)
    {
        $this->filtersselect = $id ? [$id] : [];
        $this->resetPage();
    }

    public function render()
    {
        //dd($this->filtersselect);

        $this->filters['categories'] = $this->filtersselect ? [$this->filtersselect] : [];

        $this->categories = Category::all();

        //dd($this->categories);

        /*dd($this->filters);*/
        $posts = Post::filters($this->filters)->orderByDesc('published_at')->paginate(3);
        foreach ($posts as $post) {
            /*$mediaItems = $product->getMedia('products');
            dd($mediaItems);*/

            $mediaItems = $post->getMedia('posts');
            if ($mediaItems != []) {
                $images = [];
                foreach ($mediaItems as $key => $image) {
                    $images[$key] = $image->getUrl();
                }
                $post->images = $images;
            }
            $post->published_at = Carbon::createFromFormat('Y-m-d H:i:s', $post->published_at)
                ->format('d-m-Y H:i');
            $post->category = $post->category;
        }
        //dd($posts->links());
        return view('livewire.blog-list', ['posts' => $posts]);
    }
}
