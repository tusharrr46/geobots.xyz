// App imports
import './styles.scss';

// Third party imports
import { GeolocateControl } from 'react-map-gl/mapbox';

export const Geolocate = ({ setViewport }: any) => {
	return (
		<GeolocateControl
			showAccuracyCircle={false} 
			showUserLocation={false}
			positionOptions={{enableHighAccuracy: true}}
			position="bottom-right"
			onGeolocate={(e: any) => setViewport(e.coords)}
		/>
	)
}

Geolocate.displayName="Geolocate";