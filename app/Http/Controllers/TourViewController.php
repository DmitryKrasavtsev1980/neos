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
        
        // Определяем тип страницы
        $pageType = $tour->data['type'] ?? 'tour';

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
            try {
                if (Storage::disk('public')->exists($tour->data['floor_plan'])) {
                    $floorPlan = Storage::url($tour->data['floor_plan']);
                } else {
                    \Log::warning("Floor plan not found: {$tour->data['floor_plan']}");
                }
            } catch (\Exception $e) {
                \Log::error("Error processing floor plan: " . $e->getMessage());
            }
        }

        // Подготавливаем данные для персональной страницы
        $personalPageData = [];
        if ($pageType === 'personal_page') {
            // Обрабатываем галерею фотографий (новый формат - массив путей)
            $galleryImages = $tour->data['gallery_images'] ?? [];
            $gallery = collect($galleryImages)->map(function ($imagePath) {
                try {
                    // Проверяем, что путь валидный
                    if (!$imagePath || !is_string($imagePath)) {
                        return null;
                    }

                    // Проверяем существование файла
                    if (!Storage::disk('public')->exists($imagePath)) {
                        \Log::warning("Gallery image not found: {$imagePath}");
                        return null;
                    }

                    return [
                        'image' => Storage::url($imagePath),
                        'title' => '',
                    ];
                } catch (\Exception $e) {
                    \Log::error("Error processing gallery image: " . $e->getMessage());
                    return null;
                }
            })->filter(); // Убираем null значения

            $personalPageData = [
                'page_title' => $tour->data['page_title'] ?? $tour->name,
                'description' => $tour->data['description'] ?? '',
                'latitude' => $tour->data['latitude'] ?? null,
                'longitude' => $tour->data['longitude'] ?? null,
                'gallery' => $gallery,
            ];
        } else {
            // Для обычных туров тоже создаем пустой массив данных
            $personalPageData = [
                'page_title' => $tour->name,
                'description' => '',
                'latitude' => null,
                'longitude' => null,
                'gallery' => collect(),
            ];
        }

        // Выбираем шаблон в зависимости от типа
        $viewName = $pageType === 'personal_page' ? 'tour.personal-page' : 'tour.view';

        return view($viewName, [
            'tour' => $tour,
            'panoramas' => $panoramas,
            'firstPanorama' => $panoramas->first(),
            'floorPlan' => $floorPlan,
            'pageType' => $pageType,
            'personalPageData' => $personalPageData,
        ]);
    }
}