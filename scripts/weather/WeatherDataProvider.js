/*
    This component will get the five day weather data from the Weather API.
*/

import apiKeys from "../Settings.js"

let weather = []

export const useWeather = () => {
    return weather
}


// fetching parks from API
export const getWeather = (latitude, longitude) => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=${latitude}&lon=${longitude}&APPID=${apiKeys.weatherKey}`)
    //taking what was recieved(promise) and turning it into java
        .then(response => response.json())
        //taking that java and storing it then putting it in parks
        .then(parsedWeather => {
            weather = parsedWeather
        })
}
