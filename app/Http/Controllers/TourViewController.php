<?php

namespace App\Http\Controllers;

use App\Models\Tour;
use App\Services\ThumbnailService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TourViewController extends Controller
{
    public function show($uuid)
    {
        $tour = Tour::where('uuid', $uuid)->firstOrFail();

        // Получаем данные панорам из JSON (теперь они в data.members)
        $members = $tour->data['members'] ?? [];
        $panoramas = collect($members)->map(function ($item, $index) {
            if (!isset($item['pano'])) {
                return null;
            }

            $originalPath = $item['pano'];
            $thumbnailPath = ThumbnailService::getThumbnailPath($originalPath);

            return [
                'id' => (string) $index, // Gallery плагин требует строковые ID
                'title' => $item['title'] ?? "Scene " . ($index + 1),
                'image' => $originalPath,
                'url' => Storage::url($originalPath),
                'thumbnail' => ThumbnailService::createThumbnail($originalPath, $thumbnailPath),
            ];
        })->filter(function ($item) {
            return $item !== null;
        });

        if ($panoramas->isEmpty()) {
            abort(404, 'No panoramas found for this tour.');
        }

        // Получаем план помещения если есть (теперь он в data.floor_plan)
        $floorPlan = null;
        if (isset($tour->data['floor_plan']) && $tour->data['floor_plan']) {
            $floorPlan = Storage::url($tour->data['floor_plan']);
        }

        return view('tour.view', [
            'tour' => $tour,
            'panoramas' => $panoramas,
            'firstPanorama' => $panoramas->first(),
            'floorPlan' => $floorPlan,
        ]);
    }
}