import apiKeys from "../Settings.js"
import { useItineraries } from "../itinerary/ItineraryDataProvider.js"
import { useParks } from "../parks/ParksDataProvider.js"
import { useEateries } from "../eateries/EateryDataProvider.js"
import { useAttractions } from "../attractions/BizzareDataProvider.js"
import { directionsHTML } from "./directions.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector('.detailsDialogContainer')

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


export const getNashvilleCoordinates = () => { 
        return fetch (`https://graphhopper.com/api/1/geocode?q=${selectedPlaces.Nashville}&key=${apiKeys.graphhopperKey}`)
            .then(response => response.json())
            .then(parsedCoordinates => {
                coordinates.Nashville = parsedCoordinates.hits[0].point
            })
}

export const getParksCoordinates = () => { 
    return fetch (`https://graphhopper.com/api/1/geocode?q=${selectedPlaces.Park}&key=${apiKeys.graphhopperKey}`)
        .then(response => response.json())
        .then(parsedCoordinates => {
            coordinates.Park = parsedCoordinates.hits[0].point
        })
}

export const getEateryCoordinates = () => { 
    return fetch (`https://graphhopper.com/api/1/geocode?q=${selectedPlaces.Eatery}&key=${apiKeys.graphhopperKey}`)
        .then(response => response.json())
        .then(parsedCoordinates => {
            coordinates.Eatery = parsedCoordinates.hits[0].point
        })
}

export const getAttractionsCoordinates = () => { 
    return fetch (`https://graphhopper.com/api/1/geocode?q=${selectedPlaces.Attraction}&key=${apiKeys.graphhopperKey}`)
        .then(response => response.json())
        .then(parsedCoordinates => {
            coordinates.Attraction = parsedCoordinates.hits[0].point
        })
}

let routing = {}

export const getRouting = (latLongNashville, latLongPark, latLongEatery, latlongAttraction) => { 
       return fetch (`https://graphhopper.com/api/1/route?point=${latLongNashville.lat},${latLongNashville.lng}&point=${latLongPark.lat},${latLongPark.lng}&point=${latLongEatery.lat},${latLongEatery.lng}&point=${latlongAttraction.lat},${latlongAttraction.lng}&key=${apiKeys.graphhopperKey}`)
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

    selectedPlaces.Park = `${foundPark.name} ${foundPark.addresses[0].city}`
    selectedPlaces.Eatery = foundEatery.city
    selectedPlaces.Attraction = foundAttraction.city

    getNashvilleCoordinates()
       .then(getParksCoordinates)
       .then(getEateryCoordinates)
       .then(getAttractionsCoordinates)
       .then(() => {
           getRouting(coordinates['Nashville'], coordinates['Park'], coordinates['Eatery'], coordinates['Attraction'])
            .then(() => {
                console.log(routing)
                contentTarget.innerHTML = directionsHTML(routing)
                const dialog = document.querySelector('.directionsDialog')
                dialog.showModal()
            })
        })
    
    //update selectedPlaces object with name properties of the selected places
})