// Utils imports
import { fetchMapboxIsochrone } from 'utils/map/mapbox/isochrone';

import { MarkerType } from 'utils/types/markers';

// Third-party imports
import * as turf from '@turf/turf';

const createTurfCircle = (marker: MarkerType) => {
	const { center, radius } = marker;
	const { lng, lat } = center
	return turf.circle([lng, lat], radius);
};

export const getMarkerBoundary = async (marker: MarkerType) => {
	const { boundaryType } = marker;
	if (boundaryType === 'iso') {
		const result = await fetchMapboxIsochrone(marker);
		if (result.success) {
			return result.data;
		} else {
			console.warn('Isochrone failed:', result.error.error);
			return createTurfCircle(marker);
		}
	}
	return createTurfCircle(marker);
};