/*
    This component will get the data on the Weather from the Weather API.
*/

import apiKeys from "../Settings.js"

let weather = []

// fetching parks from API
export const getWeather = (city, state) => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${state}&APPID=${apiKeys.weatherKey}`)
    //taking what was recieved(promise) and turning it into java
        .then(response => response.json())
        //taking that java and storing it then putting it in parks
        .then(parsedWeather => {
            weather = parsedWeather
        })
}
