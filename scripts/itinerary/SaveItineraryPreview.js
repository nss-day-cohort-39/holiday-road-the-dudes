/*
    This component holds the HTML representation for the save 
    button for the itenerary and provides the functionality for it
*/

import { previewContent } from './itineraryPreview.js';
import { saveItinerary } from './ItineraryDataProvider.js';

const contentTarget = document.querySelector('#saveItinerary') 
const eventHub = document.querySelector('.container')



const saveButtonHTML = () => {
return `<section class="button">
       <button id="saveItinerary" type="submit">Save Itinerary</button>    
    </section>`
}


export const renderSaveButton = () => {
    const saveButton = saveButtonHTML()
    if ( previewContent.parksPreview !== "" && previewContent.eateryPreview !== "" && previewContent.attractionPreview !== "") {
        contentTarget.innerHTML = saveButton
    }
}

eventHub.addEventListener("click", e => {
    if(e.target.id === "saveItinerary") {
        const parkSaved = document.querySelector("#parksSelect").value
        const bizzareSaved = document.querySelector("#attractionsSelect").value
        const eateriesSaved = document.querySelector("#eateriesSelect").value
        const [prefix, savedParkID] = parkSaved.split("--")
        const [prefix1, savedEateryID] = eateriesSaved.split("--")
        const [prefix2, savedBizzareID] = bizzareSaved.split("--")

        const newSavedItinerary = {
            park: savedParkID,
            eatery: parseInt(savedEateryID),
            attraction: parseInt(savedBizzareID)
        }
saveItinerary(newSavedItinerary)
    }
})



