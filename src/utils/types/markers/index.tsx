// Marker related types
import { DataProvider } from '../map';

export interface MarkerType {
  id: number;
  center: { lng: number; lat: number };
  radius: number;
  boundaryType: "iso" | "circle";
  routingProfile: "walking" | "cycling" | "driving";
  contoursMinutes: number;
  layer: string;
  image: string;
  activeTrash: boolean;
  boundary?: GeoJSON.Feature<GeoJSON.Polygon> | null;
  layerType?: string;
  data?: GeoJSON.FeatureCollection | null;
}

export interface MarkersContextType {
  markers: Record<string, MarkerType>;
  setMarkers: React.Dispatch<React.SetStateAction<Record<string, MarkerType>>>;
  startAddingMarker: (src: string, provider: DataProvider) => void;
  buildMarker: (e: { lngLat: { lng: number; lat: number } }) => void;
  removeMarker: (event: React.MouseEvent, markerId: string | number) => void;
  updateMarkerProperty: (id: string | number, property: string, value: string | number | boolean | { lng: number; lat: number }) => void;
  currentMarkerId: number | null;
  setCurrentMarkerId: (id: number | null) => void;
  currentImage: string | null;
  setCurrentImage: (src: string | null) => void;
  currentProvider: DataProvider | null;
  setCurrentProvider: (provider: DataProvider | null) => void;
  activePage: string | null;
  setActivePage: (page: string | null) => void;
  isAddingMarker: boolean;
  setIsAddingMarker: (adding: boolean) => void;
  generateMarkerId: () => number;
  createMarker: (center: { lng: number; lat: number }) => MarkerType;
}