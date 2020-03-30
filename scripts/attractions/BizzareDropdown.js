import { useAttractions } from "./BizzareDataProvider.js"

const contentTarget = document.querySelector(".attractionDropdown")


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


//We want to broadcast that an eatery selection was changed in the eatery dropdown
//listen for a change in value of the <select> element
contentTarget.addEventListener("change", changeEvent => {
    //do this only if the value changed is an eatery
    if(changeEvent.target.value.startsWith("bizzare--")){
        //split the value of the selected eatery and store the id in eateryId
        const [prefix, bizzareId] = changeEvent.target.value.split("--")
        const theChosenBizzare = bizzareId
        //broadcast a custom event when the change event occurs
        const bizzareChosenEvent = new CustomEvent("bizzareChosen", {
            detail: {
                chosenBizzare: theChosenBizzare
            } 
        })

        const previewStateChanged = new CustomEvent("previewStateChange", {

        })
        //dispatch that custom event to the event hub
        eventHub.dispatchEvent(bizzareChosenEvent)
        eventHub.dispatchEvent(previewStateChanged)
    }
})