// Frontend JS entry.
// Provide Photo Sphere Viewer modules globally for admin/editor pages.

import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.css';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import '@photo-sphere-viewer/markers-plugin/index.css';
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';
import '@photo-sphere-viewer/gallery-plugin/index.css';
import { MapPlugin } from '@photo-sphere-viewer/map-plugin';
import '@photo-sphere-viewer/map-plugin/index.css';

window.PhotoSphereViewer = {
  Viewer,
  MarkersPlugin,
  GalleryPlugin,
  MapPlugin,
};

console.log('PSV loaded:', {
  Viewer: !!Viewer,
  MarkersPlugin: !!MarkersPlugin,
  GalleryPlugin: !!GalleryPlugin,
  MapPlugin: !!MapPlugin,
});

// Initialize Alpine on frontend pages.
// If Alpine is already present (e.g., Filament-managed), do not reinitialize.
//import Alpine from 'alpinejs';

//if (!window.Alpine || !window.Alpine.version) {
//  window.Alpine = Alpine;
//  Alpine.start();
//}
