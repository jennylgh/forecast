const WEATHER_STACK_CONFIGS = {
    url: 'http://api.weatherstack.com/',
    apiKey: '7d2d80b0511c57b03e41cdcd475d1747',
}

export function getWeatherStackSearchUrl(city: string, days: number) {
    return `${WEATHER_STACK_CONFIGS.url}current?access_key=${WEATHER_STACK_CONFIGS.apiKey}&query=${city}&forecast_days=${days}`;
}

const SERP_CONFIGS = {
    url: 'https://api.scaleserp.com/',
    apiKey: 'E5A062FFE5EA4EAD8026E4E8339F699B'
}

export function getSerpSearchUrl(query: string) {
    return `${SERP_CONFIGS.url}search?api_key=${SERP_CONFIGS.apiKey}&q=${query}&search_type=images&images_page=1&num=10&images_size=medium`
}