// App imports
import { getLinesLayer } from 'utils/map/layers/features/lines';

// Third-party imports
import { Source, Layer } from 'react-map-gl/mapbox';

export const Lines = ({ id, data }: any) => {
	const sourceId = `lines-source-${id}`;
	const linesId = `lines-layer-${id}`;

	const linesLayer: any = getLinesLayer(linesId, sourceId)

	return (
		<Source 
		  id={sourceId} 
		  type="geojson" 
		  data={data}
		>
		  <Layer {...linesLayer}/>
		</Source>
	)
}

Lines.displayName="Lines";