import { useWeather } from "./WeatherDataProvider.js"

  export const weatherDataHTML = () => {
    //get all the weather data in 3hr increments and store in an array
    const allWeatherData = useWeather()
    const threeHourData = allWeatherData.list

    //store just the times that we need in a new, smaller array
    let fiveDayForecast = [threeHourData[0],threeHourData[8],threeHourData[16],
        threeHourData[24],threeHourData[32]]

    //this is a function that turns the dates from unix into a more pleasant date
    const dateTransform = (specificDayDate) => {
        const unix = specificDayDate
        const milli = unix * 1000
        const dateTime = new Date(milli)
        const Month = dateTime.toLocaleString('default', { month: 'long' })
        const Day = dateTime.getDate()
        const Year = dateTime.getFullYear()
        return `${Month} ${Day}, ${Year}`
      }


    //map through all of the times and create HTML representation for each
    const forecastHTML = fiveDayForecast.map((specificDay) => {
        return `
            <div class="forecast__day">
                <div class="date">${dateTransform(specificDay.dt)}</div>
                <div class="temperatures">
                    <div class="temp">Current Temperature: ${Math.floor(specificDay.main.temp)}\xB0F</div>
                    <div class="feelsLike">Feels Like: ${Math.floor(specificDay.main.feels_like)}\xB0F</div>
                    <div class="high">High: ${Math.floor(specificDay.main.temp_max)}\xB0F</div>
                    <div class="low">Low: ${Math.floor(specificDay.main.temp_min)}\xB0F</div>
                </div>
                <div class="conditions">Forcast: ${specificDay.weather[0].description}</div>
                <div class="humidity">Humidity: ${specificDay.main.humidity}</div>
                <div class="wind">Wind Speed: ${Math.floor(specificDay.wind.speed)}mph</div>
            </div>
        `
    }).join("")

    //return the HTML representation for the full forecast
    return forecastHTML
  }
