import type {Forecast} from './types/Forecast';

const appid = process.env.NEXT_PUBLIC_OPEN_WEATHER_APPID!;

export async function fetchWeather(q: string): Promise<Forecast> {
	return fetch(`/api/weather?q=${encodeURIComponent(q)}&units=metric&appid=${appid}`)
		.then(async res => await res.json() as Promise<Forecast>);
}
