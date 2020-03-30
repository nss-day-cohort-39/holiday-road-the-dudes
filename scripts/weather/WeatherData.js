export const weatherDataHTML = (weatherObject) => {
    const kToF = (tempInKelvin) => {
        return `${Math.floor((tempInKelvin-273) * (9/5) +32)}`
    }
    
    const todaysDate = new Date().toDateString()
    const timeNow = new Date().toLocaleTimeString()

    const currentTemp = kToF(weatherObject.list[0].main.temp)
    const feelsLike = kToF(weatherObject.list[0].main.feels_like)
    const highTemp = kToF(weatherObject.list[0].main.temp_max)
    const lowTemp = kToF(weatherObject.list[0].main.temp_min)
    
    return `
    <div class="weather">
        <div class="current">${todaysDate} ${timeNow}
            <div class="conditions">
                <div class="conditions__current">Current Conditions: ${weatherObject.list[0].weather[0].description}</div>
            </div>
            <div class="temperature"
                <div class="temp__currentTemp">Current Temp: ${currentTemp}</div>
                <div class="temp__feelsLike">Feels Like: ${feelsLike}</div>
                <div class="temp__tempHigh">High: ${highTemp}</div>
                <div class="temp__tempLow">Low: ${lowTemp}</div>
            </div>
            <div class="windSpeed">
                <div class="windSpeedCurrent">Wind Speed: ${weatherObject.list[0].wind.speed}mph</div>
            </div>
        </div>
    </div>
    `
}