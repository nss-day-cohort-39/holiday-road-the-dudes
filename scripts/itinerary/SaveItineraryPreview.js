/*
    This component holds the HTML representation for the save 
    button for the itenerary and provides the functionality for it
*/

import { previewContent } from './itineraryPreview.js';

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



// let previewContent = {
//     parksPreview: '',
//     eateryPreview: '',
//     attractionPreview: ''
//   }
  



//  eventHub.addEventListener("click", e => {
//     if(e.target.id ==="submit") {
//         const entryDate = document.querySelector("#journalDate").value
//         const entryConcepts = document.querySelector("#concepts").value
//         const entryText = document.querySelector("#journalEntry").value
//         const entryMood = document.querySelector("#mood").value

//         const newEntry = {
//             date: entryDate,
//             concept: entryConcepts,
//             entry: entryText,
//             mood: entryMood
//         }
//         saveEntries(newEntry)
//     }
// })
