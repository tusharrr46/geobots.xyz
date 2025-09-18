// App imports
import { Buttons } from './buttons';
import './styles.scss';

export const Header = ({ marker, activeCharts, setActiveCharts }: any) => {
	const { id, layer, image } = marker

	return (
		<div className="card-header">
			<img 
				className="agent-icon" 
				src={image} 
				alt="agent-icon"
			/>
			<div>
				<div className="card-header-item">
					<div className="agent-title">{layer}</div>
					<Buttons 
						id={id} 
						activeCharts={activeCharts} 
						setActiveCharts={setActiveCharts}
					/>
				</div>
			</div>
		</div>
	)
}

Header.displayName="Header";