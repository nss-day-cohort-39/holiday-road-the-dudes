import { itineraryHTML } from "./Itinerary.js";
import { useItineraries } from "./ItineraryDataProvider.js";
import { useParks } from "../parks/ParksDataProvider.js";
import { useEateries } from "../eateries/EateryDataProvider.js";
import { useAttractions } from "../attractions/BizzareDataProvider.js";


const contentTarget = document.querySelector(".savedItineraries")

export const renderSavedItineraries = () => {
    // Save the imported data to specific variable names to use in the rest of the funcion
    const savedItinerariesArray = useItineraries()
    const allParksArray = useParks()
    const allEateriesArray = useEateries()
    const allAttractionsArray = useAttractions()

  
// Map through the saved itineraries to find the ids' for the specific park, eatery, and attraction in that itinerary
    const ItineraryListHTML = savedItinerariesArray.map( currentItinerary => {
        //Go through the parks database and return the park that matches the id of the park in the saved itinerary
       const foundPark = allParksArray.find(
            (singleParkObject) => {
                return currentItinerary.parkId === singleParkObject.id
            })
        //Go through the eatery database and return the eatery that matches the id of the eatery in the saved itinerary
       const foundEatery = allEateriesArray.find(
            (singleEateryObject) => {
                return currentItinerary.eateryId === singleEateryObject.id
            })
        //Go through the attraction database and return the attraction that matches the id of the attraction in the saved itinerary
       const foundAttraction = allAttractionsArray.find(
            (singleAttractionObject) => {
                return currentItinerary.attractionId === singleAttractionObject.id
            })
            
            return itineraryHTML(currentItinerary, foundPark, foundAttraction, foundEatery )

  })
  contentTarget.innerHTML = ItineraryListHTML.join("")
  
}

       