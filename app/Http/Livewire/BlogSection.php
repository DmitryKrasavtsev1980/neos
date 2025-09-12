<?php

namespace App\Http\Livewire;

use App\Models\Post;
use Carbon\Carbon;
use Livewire\Component;
use Livewire\WithPagination;

class BlogSection extends Component
{
    use WithPagination;

    public function render()
    {
        $posts = Post::filters(["categories" => [], 'is_published' => 1])->orderByDesc('published_at')->paginate(3);

        foreach ($posts as $post) {
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

        return view('livewire.blog-section', ['posts' => $posts]);
    }
}
