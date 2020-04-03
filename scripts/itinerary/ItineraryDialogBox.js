/*
    This component is responisible for the HTML representation of 
    the itinerary details and listening for our custom event that 
    will render it once our itinerary details button is clicked
*/

import { useItineraries } from "./ItineraryDataProvider.js"
import { useAttractions } from "../attractions/BizzareDataProvider.js"
import { useEateries } from "../eateries/EateryDataProvider.js"
import { useParks } from "../parks/ParksDataProvider.js"

const contentTarget = document.querySelector('.detailsDialogContainer')

// Our HTML representation of itinerary details
const itineraryDialogBoxHTML = (itineraryObject, ParkObject, AttractionObject, EateryObject) => {
  contentTarget.innerHTML = `
      <dialog class='itineraryDetailsDialog'>
        <h1 class="itineraryDetailDialog__Title">Trip: ${itineraryObject.id}</h1>
       
        <div class="itineraryDetailDialog__Park">
            <h3>${ParkObject.name}</h3>
            <div>${ParkObject.description}</div>
        </div>
        <div class="itineraryDetailDialog__Attraction">
            <h3>${AttractionObject.name}</h3>
            <div>${AttractionObject.description}</div>
        </div>
        <div class="itineraryDetailDialog__Eatery">
            <h3>${EateryObject.businessName}</h3>
            <div>${EateryObject.description}</div>  
        </div>
        <button class="itineraryDetailButton--close">Close</button>
      </dialog>
    `
}

const eventHub = document.querySelector('.container')
// Listens for our custom event from itineraryList.js and renders our itinerary details on the DOM
eventHub.addEventListener("ItineraryChosen", customEvent => {

    const savedItinerariesArray = useItineraries()
    const allParksArray = useParks()
    const allEateriesArray = useEateries()
    const allAttractionsArray = useAttractions()

    const itineraryDetailChosen = savedItinerariesArray.find((currentItineraryObject) => {
        if (currentItineraryObject.id === event.detail.itinerary){
        return true
        }
    })
    
    //Go through the parks database and return the park that matches the id of the park in the saved itinerary
    const foundPark = allParksArray.find(
        (singleParkObject) => {
            return itineraryDetailChosen.park === singleParkObject.id
        })
    //Go through the eatery database and return the eatery that matches the id of the eatery in the saved itinerary
    const foundEatery = allEateriesArray.find(
        (singleEateryObject) => {
            return itineraryDetailChosen.eatery === singleEateryObject.id
        })
    //Go through the attraction database and return the attraction that matches the id of the attraction in the saved itinerary
    const foundAttraction = allAttractionsArray.find(
        (singleAttractionObject) => {
            return itineraryDetailChosen.attraction === singleAttractionObject.id
        })

    itineraryDialogBoxHTML(itineraryDetailChosen, foundPark, foundAttraction, foundEatery)

    const desiredDialog = document.querySelector('.itineraryDetailsDialog')
    desiredDialog.showModal()

    const closeButton = document.querySelector(".itineraryDetailButton--close")
    closeButton.addEventListener(
        "click",
        theEvent => {
            const dialogElement = theEvent.target.parentNode
            dialogElement.close()
        }
    )
})