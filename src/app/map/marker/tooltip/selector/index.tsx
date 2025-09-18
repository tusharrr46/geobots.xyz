// App imports
import { SectionItem } from './item';
import './styles.scss';

export const Selector = ({ id, boundaryType }: any) => {
	return (
		<div className="selector">
		  <SectionItem 
		    name={"circle"} 
		    boundaryType={boundaryType} 
		    id={id}
		  />
		  <SectionItem 
		    name={"iso"} 
		    boundaryType={boundaryType} 
		    id={id}
		  />
		</div>
	)
}

Selector.displayName="Selector";