<?php echo '<?xml version="1.0" encoding="UTF-8"?>'; ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    @isset($pages)
        @foreach ($pages as $page)
            <url>
                <loc>{{route('filamentPage',$page->slug )}}</loc>
                <lastmod>{{ $page->published_at->tz('UTC')->toAtomString() }}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.5</priority>
            </url>
        @endforeach
    @endisset
    @isset($posts)
        @foreach ($posts as $post)
            <url>
                <loc>{{route('filamentPage', 'post/'.$post->slug )}}</loc>
                <lastmod>{{ $post->updated_at->tz('UTC')->toAtomString() }}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.5</priority>
            </url>
        @endforeach
    @endisset
    @isset($products)
        @foreach ($products as $product)
            <url>
                <loc>{{route('filamentPage', 'product/'.$product->id )}}</loc>
                <lastmod>{{ $product->updated_at->tz('UTC')->toAtomString() }}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.5</priority>
            </url>
        @endforeach
    @endisset
</urlset>
