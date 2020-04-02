import apiKeys from "../Settings.js"
import { useItineraries } from "../itinerary/ItineraryDataProvider.js"
import { useParks } from "../parks/ParksDataProvider.js"
import { useEateries } from "../eateries/EateryDataProvider.js"
import { useAttractions } from "../attractions/BizzareDataProvider.js"

const eventHub = document.querySelector(".container")

let selectedPlaces = {
    Nashville: "nashville",
    Park: " ",
    Eatery: " ",
    Attraction: " "
}

let coordinates = {
    Nashville: "",
    Park: "",
    Eatery: "",
    Attraction: ""
}

export const getCoordinates = () => { 
        for (const property in selectedPlaces) {
            fetch (`https://graphhopper.com/api/1/geocode?q=${selectedPlaces[property]}&key=${apiKeys.graphhopperKey}`)
            .then(response => response.json())
            .then(parsedCoordinates => {
                coordinates[property] = parsedCoordinates.hits[0].point
            })
        }
}

let routing = []

export const getRouting = (latLongNashville, latLongPark, latLongEatery, latlongAttraction) => { 
       return fetch (`https://graphhopper.com/api/1/route`)
        .then(response => response.json())
        .then(parsedRouting => {
            routing = parsedRouting
        })
    }



export const useCoordinates = () => coordinates

eventHub.addEventListener("directionsClicked", customEvent => {
    const selectedItineraryId = customEvent.detail.itineraryId

    //get the park, attraction, and eatery objects associated with that itineraryId
    const allTheItineraries = useItineraries()
    const allTheParks = useParks()
    const allTheEateries = useEateries()
    const allTheAttractions = useAttractions()

    const foundItinerary = allTheItineraries.find(currentItinerary => {
        return currentItinerary.id === selectedItineraryId
    })

    const foundPark = allTheParks.find(currentPark => {
        return currentPark.id === foundItinerary.park
    })

    const foundEatery = allTheEateries.find(currentEatery => {
        return currentEatery.id === foundItinerary.eatery
    })
    const foundAttraction = allTheAttractions.find(currentAttraction => {
        return currentAttraction.id === foundItinerary.attraction
    })

    // const eateryCityState = `${foundEatery.city} ${foundEatery.state}`
    // const attractionCityState = `${foundAttraction.city} ${foundAttraction.state}`

    selectedPlaces.Park = foundPark.fullName
    selectedPlaces.Eatery = foundEatery.city
    selectedPlaces.Attraction = foundAttraction.city

    console.log(selectedPlaces)
    getCoordinates()
    console.log(coordinates)
    //update selectedPlaces object with name properties of the selected places
})