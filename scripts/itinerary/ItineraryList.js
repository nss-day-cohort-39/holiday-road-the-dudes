/*
    This components is only reposible for taking the other components 
    we created and render it to the DOM
*/
import { itineraryHTML } from "./Itinerary.js";
import { useItineraries, deleteItinerary } from "./ItineraryDataProvider.js";
import { useParks } from "../parks/ParksDataProvider.js";
import { useEateries } from "../eateries/EateryDataProvider.js";
import { useAttractions } from "../attractions/BizzareDataProvider.js";


const eventHub = document.querySelector(".container")

const contentElement = document.querySelector(".savedItineraryContainer")

// Listen for the state to change
eventHub.addEventListener("itineraryStateChanged", customEvent => {
    // When the state changes render the function
   render()
})

  const render = () => {
    const contentTarget = document.querySelector(".savedItineraries")
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
                return currentItinerary.park === singleParkObject.id
            })
        //Go through the eatery database and return the eatery that matches the id of the eatery in the saved itinerary
       const foundEatery = allEateriesArray.find(
            (singleEateryObject) => {
                return currentItinerary.eatery === singleEateryObject.id
            })
        //Go through the attraction database and return the attraction that matches the id of the attraction in the saved itinerary
       const foundAttraction = allAttractionsArray.find(
            (singleAttractionObject) => {
                return currentItinerary.attraction === singleAttractionObject.id
            })
            
           
            return itineraryHTML(currentItinerary, foundPark, foundAttraction, foundEatery )
    
})
 contentTarget.innerHTML = " "
contentTarget.innerHTML = ItineraryListHTML.join("") 

}
 
// Targets a specific id when the delete button is clicked
 contentElement.addEventListener("click", clickEvent =>{
    if(clickEvent.target.id.startsWith("deleteItinerary--")){
        const [prefix, itineraryId] = clickEvent.target.id.split("--")
        deleteItinerary(itineraryId)
       
    }
})

contentElement.addEventListener("click", clickEvent => {

    // Make sure it was one of the itinerary buttons
    if (clickEvent.target.id.startsWith("buttonDTL--")) {

        // Get the chosen itinerary
        const [prefix, chosenItinerary] = clickEvent.target.id.split("--")

        /*
            Create a new custom event, with a good name, and
            add a property to the `detail` object that specifies
            which itinerary was chosen
        */
        const itineraryChosenEvent = new CustomEvent("ItineraryChosen", {
            detail: {
                itinerary: parseInt(chosenItinerary)
            }
        })

        eventHub.dispatchEvent(itineraryChosenEvent)
    }
})

// Adds a head title to the saved itineraries list
export const savedTripsFunc = () => {contentElement.innerHTML += `<h2>Saved Trips</h2>`}


// exports render function
export const renderSavedItineraries = () =>{
    render()
}
       
