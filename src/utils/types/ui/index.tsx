// UI utility types
export interface DragEvent {
  lngLat: {
    lng: number;
    lat: number;
  };
  stopPropagation?: () => void;
}

export interface MouseEvent {
  stopPropagation: () => void;
}

export type UpdateMarkerPropertyFunction = (
  id: string | number,
  property: string,
  value: string | number | boolean | { lng: number; lat: number }
) => void;

export type CursorCallback = () => void;