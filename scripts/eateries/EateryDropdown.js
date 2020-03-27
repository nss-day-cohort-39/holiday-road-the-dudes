/*  
    This component renders the Eatery dropdown on the DOM 
    and broadcasts that an eatery was selected
*/

//Imports the Eatery data from the eatery data provider
import { useEateries } from "./EateryDataProvider.js"

const contentTarget = document.querySelector(".eateryDropdown")

export const eateriesSelect = () => {
const eateries = useEateries()
    const renderEateriesDropdown = (eateriesCollection) => {
        const eateries = useEateries()
        return `
             <select class="dropdown" id="eateriesSelect">
            <option value="0">Places to Eat</option>   
            ${
                eateriesCollection.map(singleEatery => {
                    return `<option value="eatery--${singleEatery.id}">${singleEatery.businessName} (${singleEatery.city}, ${singleEatery.state})</option>`
                })
            }
        </select> `
        }

    contentTarget.innerHTML = renderEateriesDropdown(eateries)
}


const eventHub = document.querySelector(".container")


//We want to broadcast that an eatery selection was changed in the eatery dropdown
//listen for a change in value of the <select> element
contentTarget.addEventListener("change", changeEvent => {
    //do this only if the value changed is an eatery
    if(changeEvent.target.value.startsWith("eatery--")){
        //split the value of the selected eatery and store the id in eateryId
        const [prefix, eateryId] = changeEvent.target.value.split("--")
        const theChosenEatery = eateryId
        //broadcast a custom event when the change event occurs
        const eateryChosenEvent = new CustomEvent("eateryChosen", {
            detail: {
                chosenEatery: theChosenEatery
            } 
        })
        //dispatch that custom event to the event hub
        eventHub.dispatchEvent(eateryChosenEvent)
    }
})