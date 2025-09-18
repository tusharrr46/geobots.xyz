// Map and viewport related types
import { MapRef as MapboxMapRef } from 'react-map-gl/mapbox';

export type MapRef = MapboxMapRef;

export interface ViewportType {
  longitude: number;
  latitude: number;
  zoom: number;
  bearing?: number;
  pitch?: number;
}

export interface DataProvider {
  layer: string;
  layerType?: string;
  [key: string]: unknown;
}