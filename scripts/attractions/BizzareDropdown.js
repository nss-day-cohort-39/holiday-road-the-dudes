/* 
    This module is responsible for rendering the attractions dropdown 
*/
import { useAttractions } from "./BizzareDataProvider.js"

const contentTarget = document.querySelector(".attractionDropdown")

// This exports and creates the HTML representation for the attractions dropdown
export const attractionslSelect = () => {
    
    const attractions = useAttractions()
    
    const renderAttractionsDropdown = (attractionsCollection) => {
           return `
             <select class="dropdown" id="attractionsSelect">
            <option value="0">Bizzaries</option>   
            ${
                attractionsCollection.map(singleAttraction => {
                    return `<option value="bizzare--${singleAttraction.id}">${singleAttraction.name} (${singleAttraction.city}, ${singleAttraction.state})</option>`
                })
            }
        </select> `
        }
    
   contentTarget.innerHTML = renderAttractionsDropdown(attractions)

}


const eventHub = document.querySelector(".container")


//We want to broadcast that an attraction selection was changed in the attraction dropdown
//listen for a change in value of the <select> element
contentTarget.addEventListener("change", changeEvent => {
    //do this only if the value changed is an attraction
    if(changeEvent.target.value.startsWith("bizzare--")){
        //split the value of the selected attraction and store the id in attractionId
        const [prefix, bizzareId] = changeEvent.target.value.split("--")
        const theChosenBizzare = bizzareId
        //broadcast a custom event when the change event occurs
        const bizzareChosenEvent = new CustomEvent("bizzareChosen", {
            detail: {
                chosenBizzare: theChosenBizzare
            } 
        })
        //dispatch that custom event to the event hub
        eventHub.dispatchEvent(bizzareChosenEvent)

    }
})