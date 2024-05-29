const baseURL = "https://api.weatherapi.com/v1/current.json?key=0074c031731e4a1a950183924240704";

export const getWeatherDataForCity = async (city) => {
    const respose = await fetch (`${baseURL}&q=${city}&aqi=yes`)
    return await respose.json();
};

export const getWeatherDataForLocation = async (lat , lon) => {
    const respose = await fetch (`${baseURL}&q=${lat},${lon}&aqi=yes`)
    return await respose.json();
};