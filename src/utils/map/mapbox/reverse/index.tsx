// Types imports
import { ApiResult, MapboxGeocodingContext, MapboxGeocodingFeature } from 'utils/types/api';

// Utils imports
import { MAPBOX_TOKEN } from 'utils/map/mapbox/token';

const BASE_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places';

/**
 * Fetch reverse geocoding data from Mapbox
 */
const fetchReverseGeocoding = async (lng: number, lat: number): Promise<ApiResult<MapboxGeocodingFeature>> => {
	const params = new URLSearchParams({
		access_token: MAPBOX_TOKEN,
		language: 'en'
	});

	const url = `
		${BASE_URL}/
		${lng},${lat}.json
		?${params}
	`.replace(/\s/g, '');

	try {
		const res = await fetch(url);
		if (!res.ok) {
			const errorMessage = `HTTP ${res.status}: ${res.statusText}`;
			console.warn(`Reverse geocoding API error: ${errorMessage}`);
			return {
				success: false,
				error: {
					error: 'Reverse geocoding request failed',
					code: res.status.toString(),
					details: errorMessage
				}
			};
		}
		const data = await res.json();
		const feature = data.features?.[0];
		if (!feature) {
			return {
				success: false,
				error: {
					error: 'No geocoding results found',
					details: 'No features returned for the given coordinates'
				}
			};
		}
		return {
			success: true,
			data: feature
		};
	} 
	catch (error) {
		const errorMessage = error instanceof Error ? error.message : 'Unknown error';
		console.warn('Reverse geocoding API error:', errorMessage);
		return {
			success: false,
			error: {
				error: 'Reverse geocoding request failed',
				details: errorMessage
			}
		};
	}
};

/**
 * Extract city and country from a geocoding feature
 */
export const getCurrentAddress = async (lng: number, lat: number): Promise<string> => {
	const result = await fetchReverseGeocoding(lng, lat);
	if (!result.success) return '';

	const { place_type, text, context } = result.data;

	let city = place_type.includes("place") ? text : "";
  	let country = place_type.includes("country") ? text : "";

	context?.forEach((ctx: MapboxGeocodingContext) => {
		if (ctx.id.startsWith("place.")) city ||= ctx.text;
		if (ctx.id.startsWith("country.")) country ||= ctx.text;
	});

	return [city, country].filter(Boolean).join(", ");
};