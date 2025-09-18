// React imports
import { useEffect, useCallback } from 'react';

// App imports
import { Avatar } from './avatar';
import { Tooltip } from './tooltip';

// Utils imports
import { updateMarkersData } from 'utils/map/marker';
import { handleDragStart, handleDrag, handleDragEnd } from 'utils/ui/drag';

// Types imports
import { MarkerType } from 'utils/types/markers';

// Context imports
import { useGeo } from 'context/geo';
import { useMarkers } from 'context/markers';

// Third-party imports
import { Marker } from 'react-map-gl/mapbox';

export const CustomMarker = ({ marker }: { marker: MarkerType }) => {
	const { mapRef } = useGeo();
	const { setMarkers, updateMarkerProperty } = useMarkers();
	
	const map = mapRef?.current?.getMap();
	
	const { id, center, radius, boundaryType, routingProfile, contoursMinutes, layer, image, activeTrash } = marker;

	const updateBoundary = useCallback(() => {
		updateMarkersData(marker, map, setMarkers)
	}, [marker, map, setMarkers]);
	
	useEffect(() => {
		updateBoundary();
	}, [ boundaryType, center, radius, contoursMinutes, routingProfile ]);

	useEffect(() => {
		if (!map) return;
		map.on('zoomend', updateBoundary);
		return () => {
			map.off('zoomend', updateBoundary);
		};
	}, [ map, updateBoundary ]);
	
	return (
		<Marker
			key={id}
			longitude={center.lng}
			latitude={center.lat}
			anchor="bottom"
			draggable
			onDragStart={(e: any) => handleDragStart(e, id, updateMarkerProperty)}
			onDrag={(e: any) => handleDrag(e, id, boundaryType, updateMarkerProperty)}
			onDragEnd={(e: any) => handleDragEnd(e, id, boundaryType, updateMarkerProperty)}
		>
			{activeTrash && 
				<Tooltip 
					id={id} 
					routingProfile={routingProfile}
					boundaryType={boundaryType} 
					radius={radius} 
					contoursMinutes={contoursMinutes}
				/>
			}
			<Avatar 
				id={id} 
				layer={layer} 
				image={image} 
				activeTrash={activeTrash}
			/>
		</Marker>
	)
};

CustomMarker.displayName = "CustomMarker";