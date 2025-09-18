// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/markers'

const baseUrl = process.env.PUBLIC_URL + "/static/iso/";

const routingProfileValues: Record<string, string> = {
	walking: baseUrl + "walking.svg",
	cycling: baseUrl + "cycling.svg",
	driving: baseUrl + "driving.svg"
}

export const Mobility = ({ markerId, routingProfile }: any) => {
	const { updateMarkerProperty } = useMarkers();

	const onClick = (profile: any) => {
		updateMarkerProperty(markerId, 'routingProfile', profile);
	};

	return (
	  	<div>
			<div className="routing-profile">
				{Object.entries(routingProfileValues).map(([key, value]: any) => {
					const isActive = routingProfile === key;
					return (
						<div
							key={key}
							onClick={() => onClick(key)} 
							className={`routing-image-wrapper ${isActive ? "active" : ""}`}
						>
							<img 
								src={isActive ? value.replace(".svg", "-active.svg") : value} 
								alt={key}
							/>
						</div>
					)
				})}
			</div>
			<div className="options-title">
				Mobility Type
			</div>
		</div>
	)
}

Mobility.displayName="Mobility";