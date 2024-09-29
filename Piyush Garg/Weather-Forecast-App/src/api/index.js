// const baseURL = "https://api.weatherapi.com/v1/current.json?key=b7efc7c96e0745c3961164933241809&q=London&aqi=no"
const baseURL = "https://api.weatherapi.com/v1/current.json?key=b7efc7c96e0745c3961164933241809"

export const getWeatherDataForCity = async(city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json();
};


export const getWeatherDataForLocation = async(lat, lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`)
    return await response.json();
};
