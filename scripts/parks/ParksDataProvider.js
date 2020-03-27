/*
    This component will get the data on the national parks from the NPS API.
*/

import apiKeys from "../Settings.js"

let parks = []

export const useParks = () => {
    const filteredParks = parks.filter( (object) => {
        if (object.designation.includes("National Park")) {
            return true
        }
        return false
    })
    
    return filteredParks.slice()
}

// fetching parks from API
export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?limit=91&q=National%20Park&api_key=${apiKeys.npsKey}`)
    //taking what was recieved(promise) and turning it into javascript
        .then(response => response.json())
        //taking that javascript and storing it then putting it in parks
        .then(parsedParks => {
            parks = parsedParks.data
        })
}


