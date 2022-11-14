export type Coord = {
	lon: number;
	lat: number;
};

export type Weather = {
	id: number;
	main: string;
	description: string;
	icon: string;
};

export type ForecastMain = {
	temp: number;
	pressure: number;
	humidity: number;
	temp_min: number;
	temp_max: number;
};

export type Wind = {
	speed: number;
	deg: number;
};

export type Clouds = {
	all: number;
};

export type ForecastSys = {
	type: number;
	id: number;
	message: number | string;
	country: string;
	sunrise: number;
	sunset: number;
};

export type Forecast = {
	coord: Coord;
	weather: Weather[];
	base: string;
	main: ForecastMain;
	visibility: number;
	wind: Wind;
	clouds: Clouds;
	dt: number;
	sys: ForecastSys;
	id: number;
	name: string;
	cod: number;
};
