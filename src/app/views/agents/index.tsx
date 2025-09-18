// App imports
import { providers } from 'utils/data/providers';

// Context imports
import { useMarkers } from 'context/markers';

export const Agents = ({ imageUrls }: any) => {
	const { startAddingMarker } = useMarkers();
	const baseUrl = process.env.PUBLIC_URL + '/static/agents/';

	return (
		<div className="cards-wrapper">
			<div className="cards">
			  {providers.map((provider: any) => {
			  	const { layer } = provider;
			  	const src = baseUrl + `${layer}.svg`;
			  	const processedName = layer.replace("_", " ");

			  	return (
				  <div 
				  	key={layer}
				  	className="card"
				  	onClick={() => startAddingMarker(src, provider)} 
				  >
				    <img src={src} alt={layer}/>
				    <span>{processedName}</span>
				  </div>
			  )})}
			</div>
		</div>
	)
}

Agents.displayName="Agents";