// App imports
import { basemaps } from 'utils/data/basemaps';
import './styles.scss'

// Context imports
import { useGeo } from 'context/geo';
import { useMarkers } from 'context/markers';

export const Basemaps = () => {
	const { setMapStyle } = useGeo();
	const { setActivePage } = useMarkers();

	const baseUrl = process.env.PUBLIC_URL + '/static/basemaps/';

	const changeBasemap = (url: string) => {
		setMapStyle(url)
		const isMobile = window.matchMedia("(max-width: 768px)");
		isMobile.matches && setActivePage(null);
	}

	return (
		<div className="cards-wrapper">
			<div className="cards">
				{basemaps.map((item, index) => {
				  	const [[name, { img, url }]] = Object.entries(item);
				  	const imageUrl = baseUrl + `${img}.png`;
				  	
				  	return (
				  		<div key={index} className="basemap-card">
					    	<img 
					    		className="thumbnail"
					    		src={imageUrl} 
					    		alt={`custom-${img}`}
					    		onClick={() => changeBasemap(url)}
					    	/>
					    	<span>{name}</span>
					    </div>
					  );
				  })}
			</div>
		</div>
	)
}

Basemaps.displayName="Basemaps";