// Photo Sphere Viewer only - for Filament admin panel
// This file loads ONLY PhotoSphereViewer without Alpine.js
// Alpine.js is already provided by Filament

import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.css';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import '@photo-sphere-viewer/markers-plugin/index.css';
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';
import '@photo-sphere-viewer/gallery-plugin/index.css';
import { MapPlugin } from '@photo-sphere-viewer/map-plugin';
import '@photo-sphere-viewer/map-plugin/index.css';

// Expose PhotoSphereViewer to window for use in Blade components
window.PhotoSphereViewer = {
  Viewer,
  MarkersPlugin,
  GalleryPlugin,
  MapPlugin,
};

console.log('PSV loaded for admin (without Alpine):', {
  Viewer: !!Viewer,
  MarkersPlugin: !!MarkersPlugin,
  GalleryPlugin: !!GalleryPlugin,
  MapPlugin: !!MapPlugin,
});
