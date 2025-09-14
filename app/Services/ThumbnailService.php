<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;

class ThumbnailService
{
    public static function createThumbnail($originalPath, $thumbnailPath, $width = 300, $height = 200)
    {
        try {
            // Проверяем, существует ли уже миниатюра
            if (Storage::disk('public')->exists($thumbnailPath)) {
                return Storage::url($thumbnailPath);
            }

            // Получаем полный путь к оригинальному файлу
            $originalFullPath = Storage::disk('public')->path($originalPath);

            if (!file_exists($originalFullPath)) {
                return Storage::url($originalPath); // Возвращаем оригинал если файл не найден
            }

            // Создаем миниатюру с помощью GD
            $imageInfo = getimagesize($originalFullPath);
            if (!$imageInfo) {
                return Storage::url($originalPath);
            }

            $originalWidth = $imageInfo[0];
            $originalHeight = $imageInfo[1];
            $imageType = $imageInfo[2];

            // Создаем изображение из файла в зависимости от типа
            switch ($imageType) {
                case IMAGETYPE_JPEG:
                    $source = imagecreatefromjpeg($originalFullPath);
                    break;
                case IMAGETYPE_PNG:
                    $source = imagecreatefrompng($originalFullPath);
                    break;
                case IMAGETYPE_WEBP:
                    $source = imagecreatefromwebp($originalFullPath);
                    break;
                default:
                    return Storage::url($originalPath);
            }

            if (!$source) {
                return Storage::url($originalPath);
            }

            // Вычисляем пропорции для кропа (центрирование)
            $aspectRatio = $width / $height;
            $originalAspectRatio = $originalWidth / $originalHeight;

            if ($originalAspectRatio > $aspectRatio) {
                // Оригинал шире - кропаем по ширине
                $newWidth = $originalHeight * $aspectRatio;
                $newHeight = $originalHeight;
                $cropX = ($originalWidth - $newWidth) / 2;
                $cropY = 0;
            } else {
                // Оригинал выше - кропаем по высоте
                $newWidth = $originalWidth;
                $newHeight = $originalWidth / $aspectRatio;
                $cropX = 0;
                $cropY = ($originalHeight - $newHeight) / 2;
            }

            // Создаем миниатюру
            $thumbnail = imagecreatetruecolor($width, $height);

            // Сохраняем прозрачность для PNG
            if ($imageType === IMAGETYPE_PNG) {
                imagealphablending($thumbnail, false);
                imagesavealpha($thumbnail, true);
            }

            imagecopyresampled(
                $thumbnail, $source,
                0, 0,
                $cropX, $cropY,
                $width, $height,
                $newWidth, $newHeight
            );

            // Сохраняем миниатюру
            $thumbnailFullPath = Storage::disk('public')->path($thumbnailPath);

            // Создаем директорию если не существует
            $thumbnailDir = dirname($thumbnailFullPath);
            if (!is_dir($thumbnailDir)) {
                mkdir($thumbnailDir, 0755, true);
            }

            $success = false;
            switch ($imageType) {
                case IMAGETYPE_JPEG:
                    $success = imagejpeg($thumbnail, $thumbnailFullPath, 85);
                    break;
                case IMAGETYPE_PNG:
                    $success = imagepng($thumbnail, $thumbnailFullPath, 8);
                    break;
                case IMAGETYPE_WEBP:
                    $success = imagewebp($thumbnail, $thumbnailFullPath, 85);
                    break;
            }

            // Освобождаем память
            imagedestroy($source);
            imagedestroy($thumbnail);

            if ($success) {
                return Storage::url($thumbnailPath);
            }

        } catch (\Exception $e) {
            \Log::error('Thumbnail creation failed: ' . $e->getMessage());
        }

        // В случае ошибки возвращаем оригинал
        return Storage::url($originalPath);
    }

    public static function getThumbnailPath($originalPath)
    {
        $pathInfo = pathinfo($originalPath);
        return $pathInfo['dirname'] . '/thumbs/' . $pathInfo['filename'] . '_thumb.' . $pathInfo['extension'];
    }
}