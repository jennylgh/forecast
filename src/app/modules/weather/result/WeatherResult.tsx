import style from './WeatherResult.module.css';
import React from 'react';
import { ForecastResponse, CityForecast } from '../../../model/CityForecast';
import { WeatherInfo } from './WeatherInfo';

export const WeatherResult = (props: ForecastResponse) => {
    const {success, error, result} = props;
    return success
        ? <WeatherInfo {...result as CityForecast} />
        : <WeatherError error={error as string}/>;
};

interface WeatherErrorProps {
    error: string;
}

function WeatherError(props: WeatherErrorProps) {
    return <div className={style.error}>Error: {props.error}</div>
}