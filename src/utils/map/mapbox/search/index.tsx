// Types imports
import { ApiResult } from 'utils/types/api';

// Utils imports
import { MAPBOX_TOKEN } from 'utils/map/mapbox/token';

const BASE_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places';

export const fetchMapboxSearch = async (searchText: string): Promise<ApiResult<any>> => {
	const params = new URLSearchParams({
		access_token: MAPBOX_TOKEN,
		language: 'en'
	});
	
	const url = `
		${BASE_URL}/
		${encodeURIComponent(searchText)}.json
		?${params}
	`.replace(/\s/g, '');

	try {
		const res = await fetch(url);
		if (!res.ok) {
			const errorMessage = `HTTP ${res.status}: ${res.statusText}`;
			console.warn(`Search API error: ${errorMessage}`);
			return {
				success: false,
				error: {
					error: 'Search request failed',
					code: res.status.toString(),
					details: errorMessage
				}
			};
		}
		const receivedData = await res.json();
		return {
			success: true,
			data: receivedData
		};
	}
	catch (error) {
		const errorMessage = error instanceof Error ? error.message : 'Unknown error';
		console.warn('Search API error:', errorMessage);
		return {
			success: false,
			error: {
				error: 'Search request failed',
				details: errorMessage
			}
		};
	}
}