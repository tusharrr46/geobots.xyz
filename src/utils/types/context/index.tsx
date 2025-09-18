// Context related types
import { ReactNode } from 'react';
import { MapRef, ViewportType } from '../map';
import { MapboxSearchData } from '../api';

export interface ContextProviderProps {
  children: ReactNode;
}

export interface GeoContextType {
  mapRef: React.RefObject<MapRef | null>;
  mapStyle: string;
  setMapStyle: (style: string) => void;
  viewport: ViewportType;
  setViewport: (viewport: ViewportType) => void;
  placeInfo: string;
}

export interface SearchContextType {
  inputRef: React.RefObject<HTMLInputElement | null>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  suggestionsActive: boolean;
  setSuggestionsActive?: (active: boolean) => void;
  suggestions: string[];
  suggestionIndex: number | null;
  setSuggestionIndex: (index: number | null) => void;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  cleanSuggestions?: () => void;
  mapboxSearchData: MapboxSearchData | null;
  searchText: string;
  setSearchText: (value: string) => void;
}