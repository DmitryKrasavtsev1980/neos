<?php

namespace App\View\Components;

use App\Models\Post;
use Illuminate\View\Component;

class BlogPost extends Component
{
    public $slug;
    public $post;
    public $databreadcrumbs;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($id)
    {
        $this->slug = $id;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        $this->post = Post::where('slug',$this->slug)->first();
        if ($this->post) {
            $mediaItems = $this->post->getMedia('posts')->first();
            $this->post->image = $mediaItems->getUrl();
            $this->databreadcrumbs =
                [
                    [
                        'link' => '/blog',
                        'name' => 'Блог',
                    ],
                    [
                        'link' => '#',
                        'name' => $this->post->title,
                    ]
                ];
        }

        return view('components.blog-post');
    }
}
