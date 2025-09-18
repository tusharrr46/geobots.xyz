// App imports
import { Lines } from './lines';
import { Points } from './points';
import { Fill } from './fill';

export const Features = ({ id, layerType, data }: any) => {
	const componentMap: any = {
		line: Lines,
		fill: Fill,
		circle: Points,
	};

	const Component = componentMap[layerType];

	return Component ? <Component id={id} data={data}/> : null;
}

Features.displayName='Features';