import React, { createContext, useContext, useState } from 'react';
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api/index.js";

export const WeatherContext = createContext(null);

// custom hook
export const useWeather = () => {
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);

    const fetchData = async () => {
        if (searchCity) {
            const response = await getWeatherDataForCity(searchCity);
            setData(response);
        }
    };

    // fetch current Location
    const fetchCurrentUserLocationData = () => {
        navigator.geolocation.getCurrentPosition((position) => 
            // console.log(position)
        getWeatherDataForLocation(position.coords.latitude, position.coords.longitude).then(data => setData(data))
        );
    };

    return (
        <WeatherContext.Provider value={{ searchCity, data, setSearchCity, fetchData, fetchCurrentUserLocationData }}>
            {props.children}
        </WeatherContext.Provider>
    );
};


// import React, { createContext, useContext, useState } from 'react';
// import { getWeatherDataForCity } from "../api/index.js"

// export const WeatherContext = createContext(null);

// // custom hook
// export const useWeather = () => {
//     return useContext(WeatherContext);
// }

// export const WeatherProvider = (props) => {
//     const [data, setData] = useState(null);
//     const [searchCity, setSearchCity] = useState(null);

//     const fetchData = async() => {
//         const response = await getWeatherDataForCity(searchCity)
//         setData(response);
//     }

//     // fetch current Location
//     const fetchCurrentUserLocationData = () => {
//         navigator.geolocation.getCurrentPosition((position) => 
//         console.log(position));
//         }
//     };

//     return (
//         <WeatherContext.Provider value={{ searchCity, data, setSearchCity, fetchData }} >
//             {props.children}
//         </WeatherContext.Provider>
//     )
// }