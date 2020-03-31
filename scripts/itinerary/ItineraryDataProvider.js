/*
    This component is reponsible for managing and manipulating the itinerary data
    like getting, adding, and deleting
*/
const eventHub = document.querySelector(".container")

// Defines a new custom event that the state changed
const dispatchStateChangeEvent = () =>{
    const intineraryStateChangeEvent = new CustomEvent("itineraryStateChanged")
    eventHub.dispatchEvent(intineraryStateChangeEvent)
    
}


let itineraries =[]

export const useItineraries = () => itineraries.slice()


export const getSavedItineraries = () => {
    return fetch('http://localhost:3000/itineraries')
    //taking what was recieved(promise) and turning it into java
        .then(response => response.json())
        //taking that java and storing it then putting it in eateries
        .then(parsedItineraries => {
            itineraries = parsedItineraries
        })
}

export const saveItinerary = itinerary => {
    return fetch('http://localhost:3000/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        //convert object into string that reps object w/ json.stringify
        body: JSON.stringify(itinerary)
    })
    .then(getSavedItineraries)
    //lets other components know something changed
    .then(dispatchStateChangeEvent)
}

export const deleteItinerary = itineraryId => {
    return fetch(`http://localhost:3000/itineraries/${itineraryId}`, {
        method: "DELETE"
    })
        .then(getSavedItineraries)
        .then(dispatchStateChangeEvent)
}
