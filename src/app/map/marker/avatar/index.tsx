// App imports
import { Cross } from './cross';
import './styles.scss';

// Utils imports
import { toggleMarkerTrash } from 'utils/ui/drag';

// Context imports
import { useMarkers } from 'context/markers';

export const Avatar = ({ id, layer, image, activeTrash }: any) => {
	const { isAddingMarker, updateMarkerProperty } = useMarkers();

	return (
		<div 
			className="marker-avatar" 
			onClick={(e: any) => toggleMarkerTrash(e, id, activeTrash, updateMarkerProperty)} 
			style={{pointerEvents: isAddingMarker ? "none" : "auto"}}
		>
			<div style={{position: "relative"}}>
				{activeTrash && <Cross id={id}/>}
				<img 
					className="agent-avatar" 
					src={image} 
					alt="avatar"
				/>
			</div>
			<div className="marker-provider">
				{layer}
			</div>
		</div>
	)
}

Avatar.displayName="Avatar";