import { useParks } from './ParksDataProvider.js'

const contentTarget = document.querySelector('.detailsDialogContainer')
const eventHub = document.querySelector('.container')
//takes in a park object as a parameter 
//and creates HTML representation of that park object in a dialog
const parkDialog = (park) => {
    contentTarget.innerHTML = `
    <dialog class="parkDetailsDialog">
        <div class="description">${park.description}</div>
        <button class="button--close">Close</button>
    </dialog>
    `
}
//listened for whenever a park details button is clicked
eventHub.addEventListener("parkButtonClicked", customEvent => {
    //get all the parks and store in an array
    const allTheParks = useParks()
    //get the parkId that corresponds to the clicked button
    const parkId = customEvent.detail.parkDialogId
    //take the event detail and find the park object from the array that matches the id
    const clickedParkObject = allTheParks.find((currentPark) => {
        return currentPark.id === parkId
    })
    //convert that park object to its HTML representation in the dialog box
    parkDialog(clickedParkObject)

    //grab the container that holds the dialog and display the dialog
    const desiredDialog = document.querySelector('.parkDetailsDialog')
    desiredDialog.showModal()
    
    const allCloseButtons = document.querySelectorAll(".button--close")
  
    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    
})