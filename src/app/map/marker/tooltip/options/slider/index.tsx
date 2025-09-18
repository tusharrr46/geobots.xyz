// React imports
import { useState } from 'react';

// App imports
import { Wrapper } from './wrapper';
import { Markers } from './markers';
import './styles.scss';

// Utils imports
import { SVGWrapper } from 'utils/ui/svg';

// Third-party imports
import * as d3 from 'd3';

export const Slider = ({ markerId, markerProperty, minBound, maxBound, title, initialState }: any) => {
  const [ width, setWidth ] = useState<any>(null);
  const [ height, setHeight ] = useState<any>(null);

  const margin = { top: 0, bottom: 0, left: 1, right: 1 }

  const innerWidth = width - margin.right - margin.left;
  const innerHeight = height - margin.top - margin.bottom;
    
  const [ handlerPosition, setHandlerPosition ] = useState(initialState);
  
  const circleHeight = 10;
  const offset = 10;

  const xScale: any = d3.scaleLinear()
    .domain([ minBound, maxBound ])
    .range([ offset, innerWidth - offset ]);

  return (
    <div className="slider-wrapper">
      <SVGWrapper
        margin={margin} 
        width={width} 
        height={height} 
        setWidth={setWidth} 
        setHeight={setHeight}
      >
        <rect
          className="slider-background"
          x={xScale(minBound)}
          y={innerHeight / 2 - (circleHeight / 2) / 2}
          rx={(circleHeight / 2) / 2}
          ry={(circleHeight / 2) / 2}
          width={xScale(maxBound) - xScale(minBound)}
          height={circleHeight / 2}
        />
        <rect
          className="slider-foreground"
          x={xScale(minBound)}
          y={innerHeight / 2 - (circleHeight / 2) / 2}
          rx={circleHeight / 2 / 2}
          ry={circleHeight / 2 / 2}
          width={xScale(handlerPosition) - xScale(minBound)}
          height={circleHeight / 2}
        />
        <Markers
          xScale={xScale} 
          cx={xScale(handlerPosition)} 
          cy={innerHeight / 2} 
          r={circleHeight / 2}
          minBound={minBound}
          maxBound={maxBound}
        />
        {/*Handler*/}
        <circle 
            className="slider-handler" 
            cx={xScale(handlerPosition)} 
            cy={innerHeight / 2} 
            r={circleHeight - 1}
        />
        <Wrapper
          handlerPosition={handlerPosition}
          xScale={xScale}
          innerWidth={innerWidth}
          innerHeight={innerHeight}
          setHandlerPosition={setHandlerPosition}
          minBound={minBound}
          maxBound={maxBound}
          markerId={markerId}
          markerProperty={markerProperty}
        />
      </SVGWrapper>
      <div className="options-title">
        <div>{title}</div>
        <div>{handlerPosition}</div>
      </div>
    </div>
  )
}

Slider.displayName="Slider";