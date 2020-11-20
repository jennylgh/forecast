import {httpGet} from "./httpUtils";
import {getWeatherStackSearchUrl} from "./apiConfigs";
import {ForecastResponse, WeatherType} from "../model/CityForecast";

const WEATHER_CODE_MAPPING: { [key: string]: number[] } = {
    [WeatherType.Sunny]: [113],
    [WeatherType.Cloudy]: [260, 248, 143, 122, 119, 116],
    [WeatherType.Rain]: [389, 386, 377, 274, 359, 356, 353, 350, 317, 314, 311, 308, 305, 302, 296, 293, 284, 281, 263, 200, 185, 182, 176],
    [WeatherType.Snow]: [395, 392, 371, 368, 365, 362, 338, 335, 332, 329, 326, 323, 320, 230, 227, 179],
};

export class WeatherService {
    static async getWeather(city: string, days: number = 0) {
        const url = getWeatherStackSearchUrl(city, days);
        const res = await httpGet(url);
        return WeatherService.toForecastResponse(res);
    }

    private static toForecastResponse(res: any): ForecastResponse {
        const { success = true, error } = res;
        if (success) {
            return {
                success: true,
                result: WeatherService.getSuccessResult(res),
            };
        }

        return {
            success: false,
            error: error && error.info,
        };
    }

    private static getSuccessResult({ request, current }: any) {
        return {
            city: request.query,
            type: WeatherService.getWeatherType(current.weather_code),
            weatherDesc: current.weather_descriptions.join(', '),
            temperature: current.temperature,
            windSpeed: current.wind_speed,
        };
    }

    private static getWeatherType(weatherCode: number) {
        const match = Object
            .keys(WEATHER_CODE_MAPPING)
            .findIndex(key => WEATHER_CODE_MAPPING[key].some(k => weatherCode === k));
        return match >= 0 ? match : WeatherType.Sunny;
    }
}