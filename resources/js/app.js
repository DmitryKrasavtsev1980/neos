import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

// Photo Sphere Viewer
import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.css';

// Плагины
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';
import '@photo-sphere-viewer/gallery-plugin/index.css';

import { MapPlugin } from '@photo-sphere-viewer/map-plugin';
import '@photo-sphere-viewer/map-plugin/index.css';

import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import '@photo-sphere-viewer/markers-plugin/index.css';

// Экспорт Viewer и плагинов
window.PhotoSphereViewer = {
    Viewer,
    GalleryPlugin,
    MapPlugin,
    MarkersPlugin
};

console.log('PSV loaded:', {
    Viewer: !!Viewer,
    GalleryPlugin: !!GalleryPlugin,
    MapPlugin: !!MapPlugin,
    MarkersPlugin: !!MarkersPlugin
});


