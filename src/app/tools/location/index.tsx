// App imports
import './styles.scss';

// Context imports
import { useGeo } from 'context/geo';

export const Location = () => {
	const { placeInfo } = useGeo();

	if (!placeInfo) return null;

	return (
		<div className="map-location">
			{placeInfo}
		</div>
	)
}

Location.displayName="Location";