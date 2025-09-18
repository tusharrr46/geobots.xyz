// App imports
import { getFillLayer } from 'utils/map/layers/features/fill';

// Third-party imports
import { Source, Layer } from 'react-map-gl/mapbox';

export const Fill = ({ id, data }: any) => {
  const sourceId = `features-fill-source-${id}`;
  const layerId = `features-fill-layer-${id}`;

  const fillLayer: any = getFillLayer(layerId, sourceId);

	return (
		<Source 
			id={sourceId} 
			type="geojson" 
			data={data}
		>
	        <Layer {...fillLayer}/>
	    </Source>
	);
};

Fill.displayName = "Fill";
