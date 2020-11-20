export enum WeatherType {
    Sunny,
    Cloudy,
    Rain,
    Snow,
}

export interface CityForecast {
    city: string;
    weatherDesc: string;
    type: WeatherType;
    temperature: number;
    windSpeed: number;
}

export interface ForecastResponse {
    success: boolean;
    error?: string;
    result?: CityForecast;
}