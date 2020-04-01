import { useAttractions } from './BizzareDataProvider.js'

const contentTarget = document.querySelector('.detailsDialogContainer')
const eventHub = document.querySelector('.container')
//takes in a Eatery object as a parameter 
//and creates HTML representation of that Eatery object in a dialog
const attractionDialog = (attraction) => {
    contentTarget.innerHTML = `
    <dialog class="attractionDetailsDialog">
        <div class="souvenir">Has Souvenirs: ${attraction.ameneties.souvenirs ? "yes" : "no"}</div>
        <div class="restroom">Has Restrooms ${attraction.ameneties.restrooms ? "yes" : "no"}</div>
        <button class="button--close">Close</button>
    </dialog>
    `
}
//listened for whenever a attraction details button is clicked
eventHub.addEventListener("attractionButtonClicked", customEvent => {
    //get all the attractions and store in an array
    const allTheAttractions = useAttractions()
    //get the attractionId that corresponds to the clicked button
    const attractionId = customEvent.detail.attractionDialogId
    //take the event detail and find the attraction object from the array that matches the id
    const clickedAttractionObject = allTheAttractions.find((currentAttraction) => {
        return currentAttraction.id === attractionId
    })
    //convert that Attraction object to its HTML representation in the dialog box
    attractionDialog(clickedAttractionObject)

    //grab the container that holds the dialog and display the dialog
    const desiredDialog = document.querySelector('.attractionDetailsDialog')
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