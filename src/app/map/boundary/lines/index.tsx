// App imports
import { getLinesLayer } from 'utils/map/layers/boundary/lines';

// Third party imports
import { Source, Layer } from 'react-map-gl/mapbox';

export const Lines = ({ id, boundary }: any) => {
	const linesId = `boundary-lines-layer-${id}`;
	const sourceId = `boundary-lines-source-${id}`;

	const linesLayer: any = getLinesLayer(linesId, sourceId);

	return (
		<Source 
			id={sourceId} 
			type="geojson" 
			data={boundary}
		>
		    <Layer {...linesLayer}/>
		</Source>
	)
};

Lines.displayName="Lines";