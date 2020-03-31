/*
    This components is only reposible for taking the other components 
    we created and render it to the DOM
*/
import { itineraryHTML } from "./Itinerary.js";
import { useItineraries, deleteItinerary, getSavedItineraries } from "./ItineraryDataProvider.js";
import { useParks } from "../parks/ParksDataProvider.js";
import { useEateries } from "../eateries/EateryDataProvider.js";
import { useAttractions } from "../attractions/BizzareDataProvider.js";


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".savedItineraryContainer")

export const renderSavedItineraries = () => {
getSavedItineraries().then(() => {
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
  
})}

const contentElement = document.querySelector(".savedItineraryContainer")
// Adds a head title to the saved itineraries list
export const savedTripsFunc = () => {contentElement.innerHTML += `<h2>Saved Trips</h2>`}

<<<<<<< HEAD
// Listen for the state to change
eventHub.addEventListener("itineraryStateChanged", customEvent => {
    // When the state changes render this function
    renderSavedItineraries()
})
// Targets a specific id when the delete button is clicked
contentTarget.addEventListener("click", e =>{
    if(e.target.id.startsWith("deleteItinerary--")){
        const [pefix, itineraryId] = e.target.id.split("--")
        deleteItinerary(itineraryId)
    }
})
=======
export const savedTripsFunc = () => {contentElement.innerHTML += `<h2>Saved Trips</h2>`}


       
>>>>>>> master
