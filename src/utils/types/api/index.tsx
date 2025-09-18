// API Response Types
export interface ApiError {
  error: string;
  code?: string;
  details?: string;
}

export interface ApiSuccess<T> {
  data: T;
  success: true;
}

export interface ApiFailure {
  error: ApiError;
  success: false;
}

export type ApiResult<T> = ApiSuccess<T> | ApiFailure;

export interface IsochroneParams {
  routingProfile: 'walking' | 'cycling' | 'driving';
  center: { lng: number; lat: number };
  contoursMinutes: number;
}

export interface MapboxSearchData {
  features: Array<{
    place_name: string;
    center: [number, number];
    geometry: {
      coordinates: [number, number];
    };
  }>;
}

export interface MapboxGeocodingContext {
  id: string;
  text: string;
  wikidata?: string;
  short_code?: string;
}

export interface MapboxGeocodingFeature {
  place_type: string[];
  text: string;
  context?: MapboxGeocodingContext[];
}