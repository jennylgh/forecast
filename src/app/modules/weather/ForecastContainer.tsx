import React, { useState } from 'react';
import { ForecastSearch } from './types';
import { ForecastForm } from "./form/ForecastForm";
import { WeatherService } from "../../services";
import { WeatherResult } from './result/WeatherResult';
import { ForecastResponse } from '../../model/CityForecast';

export const ForecastContainer = () => {
    const {result, onSearch} = useWeatherSearch()
    return (
        <>
            <ForecastForm onSearch={onSearch} />
            {result && <WeatherResult {...result}/>}
        </>
    )
};

function useWeatherSearch() {
    const [result, setResult] = useState<ForecastResponse | undefined>(undefined);

    const onSearch = async (search: ForecastSearch) => {
        let { city, days = 1 } = search;
        const result = await WeatherService.getWeather(city, days);
        setResult(result);
    }

    return { result, onSearch };
}



