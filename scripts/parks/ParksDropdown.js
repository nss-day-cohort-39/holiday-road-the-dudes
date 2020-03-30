/*  
    This component renders the Parks dropdown on the DOM
*/

import { useParks } from "./ParksDataProvider.js"

const contentTarget = document.querySelector(".parkDropdown")


export const parksSelect = () => {
    const parks = useParks()

    const renderParksDropdown = (parksCollection) => {
        return `
        <select class="dropdown" id="parksSelect">
            <option value="0">National Parks</option>   
            ${
                parksCollection.map(singlePark => {
                    return `<option value="park--${singlePark.id}">${singlePark.name}</option>`
                })
            }
        </select> `
        }
    
    contentTarget.innerHTML = renderParksDropdown(parks)
}

const eventHub = document.querySelector(".container")


//We want to broadcast that a park selection was changed in the park dropdown
//listen for a change in value of the <select> element
contentTarget.addEventListener("change", changeEvent => {
    //do this only if the value changed is an park
    if(changeEvent.target.value.startsWith("park--")){
        //split the value of the selected park and store the id in parkId
        const [prefix, parkId] = changeEvent.target.value.split("--")
        const theChosenPark = parkId
        //broadcast a custom event when the change event occurs
        const parkChosenEvent = new CustomEvent("parkChosen", {
            detail: {
                chosenPark: theChosenPark
            } 
        })

        const previewStateChanged = new CustomEvent("previewStateChange", {

        })
        //dispatch that custom event to the event hub
        eventHub.dispatchEvent(parkChosenEvent)
        eventHub.dispatchEvent(previewStateChanged)
    }
})