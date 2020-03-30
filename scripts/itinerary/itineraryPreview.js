import {eateryHTML} from "../eateries/Eatery.js"
import { useEateries } from "../eateries/EateryDataProvider.js"
import { useAttractions } from "../attractions/BizzareDataProvider.js"
import { bizzareHTML } from "../attractions/Bizzare.js"
import { useParks } from "../parks/ParksDataProvider.js"
import { parkHTML } from "../parks/Park.js"

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector(".previewContainer")

//this is the 'state' of the itinerary preview section
//each event listener will update the state of the preview section when a selection is made
//each event listener will render the current state the preview section

let previewContent = {
  parksPreview: '',
  eateryPreview: '',
  attractionPreview: ''
}

//the is the function that executes rendering the current state of the preview section
//it is called within each custom event to render the current state of the preview section when a change is made
const render = () => {
  contentTarget.innerHTML = `${previewContent.parksPreview}
  ${previewContent.eateryPreview}
  ${previewContent.attractionPreview}
  `
}


//this event listener responds to when an eatery is selected in the eatery dropdown
//it will turn the selected eatery into an HTML respresentation of that eatery, and then
//it will update the 'state' array (previewContent) at index 0 with the HTML representation of that eatery
//it will then render the current state of previewContent
eventHub.addEventListener("eateryChosen", event =>{
   
    const eateries = useEateries()
    const theEateryThatWasChosen = parseInt(event.detail.chosenEatery)

    const eaterySelection = eateries.find(eatery => { 
        return eatery.id === theEateryThatWasChosen
    })

    const eateryHTMLofChosen = eateryHTML(eaterySelection)
    previewContent.eateryPreview = eateryHTMLofChosen
    render()
})

eventHub.addEventListener("bizzareChosen", event =>{
   
    const bizzares = useAttractions()
    const theBizzareThatWasChosen = parseInt(event.detail.chosenBizzare)

    const bizzareSelection = bizzares.find(bizzare => { 
        return bizzare.id === theBizzareThatWasChosen
    })

    const bizzareHTMLofChosen = bizzareHTML(bizzareSelection)
    previewContent.attractionPreview = bizzareHTMLofChosen
    render()
})

eventHub.addEventListener("parkChosen", event =>{
   
    const parks = useParks()
    const theParkThatWasChosen = event.detail.chosenPark

    const parkSelection = parks.find(park => { 
        return park.id === theParkThatWasChosen
    })

    const parkHTMLofChosen = parkHTML(parkSelection)
    previewContent.parksPreview = parkHTMLofChosen
    render()
})