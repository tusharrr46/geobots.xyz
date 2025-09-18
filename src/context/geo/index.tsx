// React imports
import { useState, useEffect, useRef, useContext, createContext, useMemo } from 'react';

// App imports
import * as Locations from './locations';

// Utils imports
import { getCurrentAddress } from 'utils/map/mapbox/reverse'

// Types imports
import { GeoContextType, ContextProviderProps } from 'utils/types/context';
import { ViewportType, MapRef } from 'utils/types/map';

const GeoContext: React.Context<GeoContextType | null> = createContext<GeoContextType | null>(null);

export const useGeo = (): GeoContextType => {
	const context = useContext(GeoContext);
	if (!context) {
		throw new Error('useGeo must be used within a GeoProvider');
	}
	return context;
}

export const GeoProvider = ({children}: ContextProviderProps) => {
	const mapRef = useRef<MapRef | null>(null);

	const [ viewport, setViewport ] = useState<ViewportType>(Locations.rotterdam);
	const [ mapStyle, setMapStyle ] = useState<string>("mapbox://styles/mapbox/light-v11");
	const [ placeInfo, setPlaceInfo ] = useState<string>("");

	useEffect(() => {
		const { longitude, latitude } = viewport;
		const center: [number, number] = [ longitude, latitude ];
		mapRef.current?.getMap()?.flyTo({ center, duration: 4000, essential: true });
	}, [ viewport ]);

	useEffect(() => {
		const fetchData = async () => {
			const { longitude, latitude } = viewport;
			try {
				const currentAddress = await getCurrentAddress(longitude, latitude);
				setPlaceInfo(currentAddress);
			} catch (error) {
				console.warn('Failed to get current address:', error);
				setPlaceInfo('');
			}
		};
		fetchData();
	}, [ viewport ]);

	const contextValue = useMemo(() => ({
		mapRef, 
		mapStyle, setMapStyle, 
		viewport, setViewport,
		placeInfo
	}), [mapRef, mapStyle, viewport, placeInfo]);

	return (
		<GeoContext.Provider value={contextValue}>
			{children}
		</GeoContext.Provider>
	)
}

GeoContext.displayName = "GeoContext";