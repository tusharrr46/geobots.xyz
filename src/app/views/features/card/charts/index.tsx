// React imports
import { useState } from 'react';

// App imports
import { Gauge } from './gauge';
import { Dots } from './dots';
import { Bars } from './bars';
import './styles.scss';

// Utils imports
import { processData } from 'utils/data/charts';

// Third-party imports
import * as d3 from 'd3';

export const Charts = ({ data, name, colorLabel }: any) => {
	const [ graphictTypeIndex, setGraphicTypeIndex ] = useState(0);
	
	const { distribution, colors } = processData(data, name, colorLabel);
	const sumOfValues = d3.sum(Object.values(distribution));

	const graphicTypeArray = ["dots", "gauge"];
	const graphicType = graphicTypeArray[graphictTypeIndex];

	const onClick = () => 
		setGraphicTypeIndex((prev: any) => 
			prev < 1 ? prev + 1 : 0
		);

	const components: Record<string, any> = {
		gauge: Gauge,
		dots: Dots
	};

	const Component = components[graphicType];

	return (
		<div className="chart-wrapper" onClick={onClick}>
			<Bars 
				distribution={distribution} 
				colors={colors} 
				sumOfValues={sumOfValues}
			/>
			<Component 
				distribution={distribution} 
				colors={colors} 
				sumOfValues={sumOfValues}
			/>
		</div>
	)
}

Charts.displayName="Charts";