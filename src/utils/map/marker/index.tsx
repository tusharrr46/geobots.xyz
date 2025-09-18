// App imports
import { findLayerBySourceLayer, getRenderedFeaturesBySourceLayer } from './filter';
import { getMarkerBoundary } from './boundary';

// Utils imports
import { getFeaturesWithinBoundary } from 'utils/geometry';

export const updateMarkersData = async (marker: any, mapInstance: any, setMarkers: any) => {
	const { id, layer } = marker;

	let data: any = null;
	let layerType = null;
	let source = null;
	
	const boundary = await getMarkerBoundary(marker);
	const matchingLayer = findLayerBySourceLayer(mapInstance, layer);
	
	if (matchingLayer) {
		source = matchingLayer.source;
		layerType = matchingLayer.type;
		
		const featuresBySource = getRenderedFeaturesBySourceLayer(mapInstance, layer);
		const features = getFeaturesWithinBoundary(featuresBySource, boundary, layerType);
		data = { type: 'FeatureCollection', features };
	}

	setMarkers((prev: any) => ({
	    ...prev, [id]: { 
	    	...prev[id], 
	    		boundary, 
	    		data, 
	    		layerType, 
	    		source 
	    }
	}));
};