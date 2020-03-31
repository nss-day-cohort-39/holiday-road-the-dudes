import { getWeather, useWeather } from "./WeatherDataProvider.js"
import { weatherDataHTML } from "./WeatherData.js"
import { useParks } from "../parks/ParksDataProvider.js"

const contentTarget = document.querySelector('.weatherContainer')
const eventHub = document.querySelector('.container')

//listen for when a park was selected so that you can get the weather for that specific park
eventHub.addEventListener("parkChosen", event =>{
    //store all the parks
    const allTheParks = useParks()
   
    //then take the id of the park that was selected from the drop down 
    //and match it an object in park array
    const idOfParkThatWasSelected = event.detail.chosenPark
    const selectedParkObject = allTheParks.find((park) => {
        return idOfParkThatWasSelected === park.id
    })
  
    //set up variables that will store the latitude and longitude
    let latitudeOfSelectedPark = ""
    let longitudeOfSelectedPark = ""

    //a function that stores the lat and long of the specific park 
    //in the appropriate variables
    const parkLatAndLong = (object) => {
        latitudeOfSelectedPark = object.latitude
        longitudeOfSelectedPark = object.longitude
    }
    
    //call the function that actually assigns the variables the correct lat and long
    parkLatAndLong(selectedParkObject)
    
    //get the weather data for the park with the specific lat and long
    getWeather(latitudeOfSelectedPark, longitudeOfSelectedPark).then(() => {
        //update contentTarget with HTML representation of weather data
        contentTarget.innerHTML = `
        <h3 class="forecast__title">Forecast for ${selectedParkObject.fullName}</h3>
        <div class="forecast">
        ${weatherDataHTML()}
        </div>
        `
    })
})
