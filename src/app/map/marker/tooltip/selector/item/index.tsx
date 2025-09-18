// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/markers';

export const SectionItem = ({ name,  boundaryType, id }: any) => {
	const { updateMarkerProperty } = useMarkers();

	const isActiveColor = (name: any) => 
		boundaryType === name ? 
		"rgba(52, 152, 219, 0.3)" : 
		"rgba(255, 255, 255, 0)";

	const onClick = (boundaryType: any) => {
		updateMarkerProperty(id, "boundaryType", boundaryType);
	}

	const backgroundColor = isActiveColor(name);

	return (
		<div className="section-item" style={{backgroundColor}}>
			<img 
				src={process.env.PUBLIC_URL + `/static/icons/${name}.svg`} 
				alt={name}
				className="boundary-icon"
				onClick={() => onClick(name)}
			/>
		</div>
	)
}