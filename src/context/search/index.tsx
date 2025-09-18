// React imports
import { useState, useEffect, useRef, useContext, createContext, useMemo, useCallback } from 'react';

// Utils imports
import { fetchMapboxSearch } from 'utils/map/mapbox/search';

// Context imports
import { useGeo } from 'context/geo';

// Types imports
import { SearchContextType, ContextProviderProps } from 'utils/types/context';
import { MapboxSearchData } from 'utils/types/api';

const SearchContext: React.Context<SearchContextType | null> = createContext<SearchContextType | null>(null)

export const useSearch = (): SearchContextType => {
	const context = useContext(SearchContext);
	if (!context) {
		throw new Error('useSearch must be used within a SearchProvider');
	}
	return context;
}

export const SearchProvider = ({children}: ContextProviderProps) => {
  const { setViewport } = useGeo();
  
  // Refs
  const inputRef = useRef<HTMLInputElement>(null);

  // State
  const [ searchText, setSearchText ] = useState<string>('');
  const [ mapboxSearchData, setMapboxSearchData ] = useState<MapboxSearchData | null>(null);
  const [ suggestionIndex, setSuggestionIndex ] = useState<number | null>(0);
  const [ suggestionsActive, setSuggestionsActive ]= useState<boolean>(false);

  // Computed values
  /**
   * Extracts and formats search suggestions from Mapbox search results
   */
  const suggestions: string[] = 
    mapboxSearchData?.features
      .reduce((total: string[], item) => {
        total.push(item.place_name.toLowerCase())
        return total
      }, []) || [];

  // Navigation functions
  /**
   * Navigates to the selected destination on the map
   * @param currentSearchValue - The selected place name to navigate to
   */
  const flyToDestination = useCallback((currentSearchValue: string) => {
    mapboxSearchData?.features.forEach((item) => {
      const { place_name, geometry } = item;
      const [ longitude, latitude ] = geometry.coordinates;
      if (place_name.toLowerCase() === currentSearchValue) {
        setViewport({ 
          bearing: 0, 
          pitch: 0, 
          zoom: 13,
          longitude, 
          latitude 
        });
      }
    });
  }, [mapboxSearchData, setViewport]);

  // State management functions
  /**
   * Resets search state and clears suggestions
   */
  const cleanSuggestions = useCallback(() => {
    setSearchText("");
    setSuggestionIndex(0);
    setSuggestionsActive(false);
  }, []);

  // Event handlers
  /**
   * Handles search input changes
   * @param e - Input change event
   */
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchText(query);
    query.length > 0 ? setSuggestionsActive(true) : setSuggestionsActive(false);
  }, []);

  /**
   * Handles keyboard navigation for search suggestions
   * @param e - Keyboard event
   */
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      if (suggestionIndex === 0 || suggestionIndex === null) {
        return;
      }
      setSuggestionIndex(suggestionIndex - 1);
    }
    else if (e.key === 'ArrowDown') {
      if (suggestionIndex === null || suggestionIndex + 1 === suggestions.length) {
        return
      }
      setSuggestionIndex(suggestionIndex + 1);
    }
    else if (e.key === 'Enter') {
      if (suggestionIndex !== null) {
        const currentSearchValue: string = suggestions[suggestionIndex]
        if (currentSearchValue) {
          flyToDestination(currentSearchValue);
          cleanSuggestions();
        }
      }
    }
    else if (e.key === 'Escape') {
      setSuggestionIndex(0);
      setSuggestionsActive(false);
      setSearchText("");
    }
  }, [suggestionIndex, suggestions, flyToDestination, cleanSuggestions]);

  /**
   * Handles click on search suggestion
   * @param e - Click event
   */
  const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const currentSearchValue = e.currentTarget.innerText;
    flyToDestination(currentSearchValue);
    cleanSuggestions();
  }, [flyToDestination, cleanSuggestions]);

  // Effects
  useEffect(() => {
    if (!searchText) return;
    
    const timer = setTimeout(() => {
      fetchMapboxSearch(searchText).then(result => {
        if (result.success) {
          setMapboxSearchData(result.data);
        } else {
          console.warn('Search failed:', result.error.error);
          setMapboxSearchData(null);
        }
      });
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchText]);

  const contextValue = useMemo(() => ({
    inputRef, 
    handleChange, 
    handleKeyDown, 
    suggestionsActive, 
    suggestions, 
    suggestionIndex, 
    setSuggestionIndex, 
    handleClick,
    cleanSuggestions,
    mapboxSearchData, 
    searchText, setSearchText
  }), [
    inputRef, handleChange, handleKeyDown, suggestionsActive, suggestions,
    suggestionIndex, handleClick, cleanSuggestions, mapboxSearchData, searchText
  ]);

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  )
}

SearchContext.displayName = "SearchContext";