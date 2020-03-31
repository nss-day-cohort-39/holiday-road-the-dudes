import { useParks } from './ParksDataProvider.js'

const contentTarget = document.querySelector('.detailsDialogContainer')
const eventHub = document.querySelector('.container')
//renders the dialog to the screen
const parkDialog = (park) => {
    contentTarget.innerHTML = `
    <dialog class="parkDetailsDialog">
        <div class="description">${park.description}</div>
        <button class="button--close">Close</button>
    </dialog>
    `
}
//listened for when the button is clicked
eventHub.addEventListener("parkButtonClicked", customEvent => {
    const allTheParks = useParks()
    const parkId = customEvent.detail.parkDialogId
    const clickedParkObject = allTheParks.find((currentPark) => {
        return currentPark.id === parkId
    })

    parkDialog(clickedParkObject)

    const desiredDialog = document.querySelector('.parkDetailsDialog')
    desiredDialog.showModal()
})