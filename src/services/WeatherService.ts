import {httpGet} from "./httpUtils";

class WeatherService {
    static async get(city: string) {
        return Promise.resolve('sunny');
        //return httpGet(getFullUri('weather'));
    }
}

export default WeatherService