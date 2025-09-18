// App imports
import { Selector } from './selector';
import { Options } from './options';
import './styles.scss';

export const Tooltip = ({ id, routingProfile, boundaryType, radius, contoursMinutes }: any) => {
  return (
      <div className="popup-item">
        <Selector 
          id={id} 
          boundaryType={boundaryType}
        />
        <Options 
          id={id} 
          boundaryType={boundaryType} 
          radius={radius} 
          contoursMinutes={contoursMinutes}
          routingProfile={routingProfile}
        />
      </div>
  );
}

Tooltip.diplayName="Tooltip";