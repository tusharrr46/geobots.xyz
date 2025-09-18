import { GeoProvider } from './geo';
import { MarkersProvider } from './markers';
import { SearchProvider } from './search';
import { ContextProviderProps } from 'utils/types/context';

export const ContextProvider = ({children}: ContextProviderProps) => {
  return (
    <GeoProvider>
    <MarkersProvider>
    <SearchProvider>
      {children}
    </SearchProvider>
    </MarkersProvider>
    </GeoProvider>
  )
}

ContextProvider.displayName="ContextProvider";