import style from './WeatherImage.module.css';
import React, {useEffect, useState} from 'react';
import Spin from 'antd/es/spin';
import {WeatherType} from "../../../model/CityForecast";
import {ImageSearchService} from "../../../services";

interface WeatherImageProps {
    type: WeatherType;
}

interface LoadImageResult {
    success: boolean;
    link?: string;
}

export const WeatherImage = (props: WeatherImageProps) => {
    const result = useImage(props);
    if (result === undefined) {
        return (<Spin size="large" className={style.spin} />);
    } else if (result.success && result.link) {
        return (<img className={style.image} src={result.link} alt={toSearchKeyword(props.type)} />)
    }

    return (<span>Oops, unable to find an image</span>);
};

function useImage({type}: WeatherImageProps): LoadImageResult | undefined {
    const [result, setResult] = useState<LoadImageResult | undefined>(undefined);

    useEffect(() => {
        setResult(undefined);
        const loadImage = async () => {
            const keyword = toSearchKeyword(type);
            return await ImageSearchService.getImage(keyword);
        };
        loadImage().then(link => {
            setResult( { success: !!link, link });
        });

    }, [type]);

    return result;
}

function toSearchKeyword(type: WeatherType) {
    switch (type) {
        case WeatherType.Rain:
            return 'rain cat';
        case WeatherType.Snow:
            return 'snow cat';
        case WeatherType.Cloudy:
            return 'cloudy cat';
        default:
            return 'sunny cat'
    }
}