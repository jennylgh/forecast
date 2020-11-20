import {CityForecast} from "../../../model/CityForecast";
import {InfoField} from "./InfoField";
import {WeatherImage} from "./WeatherImage";
import React from "react";

export function WeatherInfo(props: CityForecast) {
    return (
        <>
            <InfoField label="City" content={props.city} />
            <InfoField label="Weather" content={props.weatherDesc} />
            <InfoField label="Temperature" content={props.temperature} />
            <InfoField label="Wind" content={props.windSpeed} />
            <InfoField content={<WeatherImage type={props.type} />} />
        </>
    );
}