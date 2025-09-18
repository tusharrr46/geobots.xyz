// App imports
import './styles.scss';

export const SearchIcon = () => {
	const currentImage = "/static/icons/search.svg";
	const src = process.env.PUBLIC_URL + currentImage;

	return (
		<div className="search-icon">
			<img 
		    	src={src}
		    	alt="search-icon" 
		    	width="23px"
		    	height="23px"
		    />
	    </div>
	)
}

SearchIcon.displayName="SearchIcon";