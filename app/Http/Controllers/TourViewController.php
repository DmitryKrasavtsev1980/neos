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
                'id' => $item['id'] ?? (string) $index, // Используем UUID из данных или индекс для совместимости
                'title' => $item['title'] ?? "Scene " . ($index + 1),
                'image' => $originalPath,
                'url' => Storage::url($originalPath),
                'thumbnail' => ThumbnailService::createThumbnail($originalPath, $thumbnailPath),
                'hide_in_gallery' => (bool)($item['hide_in_gallery'] ?? false),

                // Новые параметры камеры
                'camera' => [
                    'yaw' => $item['camera']['yaw'] ?? 0,
                    'pitch' => $item['camera']['pitch'] ?? 0,
                    'zoom' => $item['camera']['zoom'] ?? 30,
                ],

                // Настройки автовращения
                'autorotate' => [
                    'enabled' => $item['autorotate']['enabled'] ?? false,
                    'delay' => $item['autorotate']['delay'] ?? 3000,
                    'speed' => $item['autorotate']['speed'] ?? '2rpm',
                    'pitch' => $item['autorotate']['pitch'] ?? 0,
                ],

                // Калибровка ориентации (применяется как sphereCorrection)
                'calibration' => [
                    'pan' => isset($item['calibration']['pan']) ? (float)$item['calibration']['pan'] : 0.0,
                    'tilt' => isset($item['calibration']['tilt']) ? (float)$item['calibration']['tilt'] : 0.0,
                ],

                // Hotspots для навигации и информации
                'hotspots' => $item['hotspots'] ?? [],

                // Позиция панорамы на плане помещения
                'plan_position' => is_string($item['plan_position'] ?? null)
                    ? json_decode($item['plan_position'], true)
                    : ($item['plan_position'] ?? null),
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
            // Обрабатываем галерею фотографий
            $galleryImages = $tour->data['gallery_images'] ?? [];
            $gallery = collect($galleryImages)->map(function ($imagePath) {
                try {
                    if (!$imagePath || !is_string($imagePath)) {
                        return null;
                    }

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
            })->filter();

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
