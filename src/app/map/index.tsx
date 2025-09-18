// React imports
import { useState } from 'react';

// App imports
import { Boundary } from './boundary';
import { CustomMarker } from './marker';
import { Features } from './features';

// Utils imports
import { Geolocate } from 'utils/ui/geolocate';
import { MAPBOX_TOKEN } from 'utils/map/mapbox/token';

// Context imports
import { useGeo } from 'context/geo';
import { useMarkers } from 'context/markers';

// Types imports
import { MarkerType } from 'utils/types/markers';

// Third-party imports
import { Map } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapView = () => {
	const { mapRef, viewport, setViewport, mapStyle } = useGeo();
	const { buildMarker, markers } = useMarkers();

	const [ isMapLoaded, setIsMapLoaded ] = useState(false);

	return (
		<Map
			ref={mapRef}
			initialViewState={viewport}
			mapboxAccessToken={MAPBOX_TOKEN}
			mapStyle={mapStyle}
			onLoad={() => setIsMapLoaded(true)}
			onClick={buildMarker}
			doubleClickZoom={false}
		>
			{isMapLoaded && 
				Object.entries(markers).map(([key, marker]: [string, MarkerType]) => {
					const { id, boundary, layerType, data } = marker;

					return (
						<div key={key}>
							<CustomMarker marker={marker}/>
							<Boundary id={id} boundary={boundary}/>
							<Features id={id} layerType={layerType} data={data}/>
					    </div>
					)
				})
			}
			<Geolocate setViewport={setViewport}/>
		</Map>
	)
}

MapView.displayName="MapView";