/*
    This component is responible for the creation and managment of the eatery diolog box
*/
import { useEateries } from './EateryDataProvider.js'

const contentTarget = document.querySelector('.detailsDialogContainer')
const eventHub = document.querySelector('.container')
//takes in a Eatery object as a parameter 
//and creates HTML representation of that Eatery object in a dialog
const eateryDialog = (eatery) => {
    contentTarget.innerHTML = `
    <dialog class="eateryDetailsDialog">
        <div class="wifi">Has Wifi: ${eatery.ameneties.wifi ? "yes" : "no"}</div>
        <div class="diapers">Has Diaper Facility: ${eatery.ameneties.diaperFacility  ? "yes" : "no"}</div>
        <div class="diapers">Is Pet Friendly: ${eatery.ameneties.petFriendly ? "yes" : "no"}</div>
        <button class="button--close">Close</button>
    </dialog>
    `
}
//listened for whenever a Eatery details button is clicked
eventHub.addEventListener("eateryButtonClicked", customEvent => {
    //get all the Eaterys and store in an array
    const allTheEateries = useEateries()
    //get the EateryId that corresponds to the clicked button
    const eateryId = customEvent.detail.eateryDialogId
    //take the event detail and find the Eatery object from the array that matches the id
    const clickedEateryObject = allTheEateries.find((currentEatery) => {
        return currentEatery.id === eateryId
    })
    //convert that Eatery object to its HTML representation in the dialog box
    eateryDialog(clickedEateryObject)

    //grab the container that holds the dialog and display the dialog
    const desiredDialog = document.querySelector('.eateryDetailsDialog')
    desiredDialog.showModal()
    
    const closeButton = document.querySelector(".button--close")
    closeButton.addEventListener(
        "click",
        theEvent => {
            const dialogElement = theEvent.target.parentNode
            dialogElement.close()
        }
    )
  
})