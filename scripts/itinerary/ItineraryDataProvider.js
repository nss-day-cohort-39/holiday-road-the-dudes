let itineraries =[]


export const getSavedItineraries = () => {
    return fetch('http://localhost:3000/itineraries')
    //taking what was recieved(promise) and turning it into java
        .then(response => response.json())
        //taking that java and storing it then putting it in eateries
        .then(parsedItineraries => {
            itineraries = parsedItineraries
        }).then( () => console.log(itineraries) )
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
    // .then(dispatchStateChangeEvent)
}