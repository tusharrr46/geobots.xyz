// React imports
import { useEffect, useRef } from 'react';

// App imports
import './styles.scss';

// Utils imports
import { setupCustomCursor } from 'utils/ui/cursor';

// Context imports
import { useMarkers } from 'context/markers';

export const CustomCursor = () => {
	const { isAddingMarker, setIsAddingMarker, currentImage } = useMarkers();

	const customCursorRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const cleanup = setupCustomCursor(customCursorRef, isAddingMarker, setIsAddingMarker);
		return () => cleanup();
	}, [ isAddingMarker ]);

	if (!isAddingMarker) return null;

	return (
		<img
			className="custom-cursor" 
			ref={customCursorRef} 
			src={currentImage || ''} 
			alt="custom-cursor" 
		/>
	)
}

CustomCursor.displayName="CustomCursor";