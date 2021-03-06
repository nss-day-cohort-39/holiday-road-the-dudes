/*
    This component renders the HTML of the park, eatery, and attraction selected to the DOM 
    and listens for a change in selection for any destination
*/

import {eateryHTML} from "../eateries/Eatery.js"
import { useEateries } from "../eateries/EateryDataProvider.js"
import { useAttractions } from "../attractions/BizzareDataProvider.js"
import { bizzareHTML } from "../attractions/Bizzare.js"
import { useParks } from "../parks/ParksDataProvider.js"
import { parkHTML } from "../parks/Park.js"
import { renderSaveButton } from "./SaveItineraryPreview.js"

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector(".previewContainer")

/*
    this is the 'state' of the itinerary preview section
    each event listener will update the state of the preview section when a selection is made
    each event listener will render the current state the preview section
*/
export let previewContent = {
  parksPreview: '',
  eateryPreview: '',
  attractionPreview: ''
}

/*
    This is the function that executes rendering the current state 
    of the preview section it is called within each custom event to 
    render the current state of the preview section when a change is made
*/
const render = () => {
  contentTarget.innerHTML = `
  ${previewContent.parksPreview}
  ${previewContent.eateryPreview}
  ${previewContent.attractionPreview}
  `
  renderSaveButton()
  

    //if a parks Preview has been renedered in the preview container...
    if(previewContent.parksPreview !== '') {
        //...then find the detail button that corresponds to that park preview
        const parkButton = document.querySelector('.park-detail')
        //listen for a click on that button...
        parkButton.addEventListener('click', (clickEvent) => {
          //..only if the id includes button--  
          if (clickEvent.target.id.includes('button--')) {
              //get the id of the specific park
              const [prefix, parkId] = clickEvent.target.id.split("--")
              //dispatch an event to the eventHub that a park detail button was clicked
              //with the detail of the parkId so we can match to the park object
              const parkButtonClicked = new CustomEvent ("parkButtonClicked", {
                  detail: {
                      parkDialogId: parkId
                  }
              })
      
              eventHub.dispatchEvent(parkButtonClicked)
          }
        })
    }

    if(previewContent.eateryPreview !== '') {
        //...then find the detail button that corresponds to that eatery preview
        const eateryButton = document.querySelector('.eatery-detail')
        //listen for a click on that button...
        eateryButton.addEventListener('click', (clickEvent) => {
          //..only if the id includes button--  
          if (clickEvent.target.id.includes('button--')) {
              //get the id of the specific eatery
              const [prefix, eateryId] = clickEvent.target.id.split("--")
              //dispatch an event to the eventHub that a eatery detail button was clicked
              //with the detail of the eateryId so we can match to the eatery object
              const eateryButtonClicked = new CustomEvent ("eateryButtonClicked", {
                  detail: {
                      eateryDialogId: parseInt(eateryId)
                  }
              })
      
              eventHub.dispatchEvent(eateryButtonClicked)
          }
        })
    }

    if(previewContent.attractionPreview !== '') {
        //...then find the detail button that corresponds to that attraction preview
        const attractionButton = document.querySelector('.attraction-detail')
        //listen for a click on that button...
        attractionButton.addEventListener('click', (clickEvent) => {
          //..only if the id includes button--  
          if (clickEvent.target.id.includes('button--')) {
              //get the id of the specific attraction
              const [prefix, attractionId] = clickEvent.target.id.split("--")
              //dispatch an event to the eventHub that a attraction detail button was clicked
              //with the detail of the attractionId so we can match to the attraction object
              const attractionButtonClicked = new CustomEvent ("attractionButtonClicked", {
                  detail: {
                      attractionDialogId: parseInt(attractionId)
                  }
              })
      
              eventHub.dispatchEvent(attractionButtonClicked)
          }
        })
    }
    
}



/*
    This event listener responds to when an eatery is selected in the eatery dropdown
    it will turn the selected eatery into an HTML respresentation of that eatery, and then
    it will update the 'state' array (previewContent) at index 0 with the HTML representation of that eatery
    it will then render the current state of previewContent
*/
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

/*
    This event listener responds to when an attraction is selected in the attraction dropdown
    it will turn the selected attraction into an HTML respresentation of that attraction, and then
    it will update the 'state' array (previewContent) at index 0 with the HTML representation of that attraction
    it will then render the current state of previewContent
*/
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

/*
    This event listener responds to when an park is selected in the park dropdown
    it will turn the selected park into an HTML respresentation of that park, and then
    it will update the 'state' array (previewContent) at index 0 with the HTML representation of that park
    it will then render the current state of previewContent
*/
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
