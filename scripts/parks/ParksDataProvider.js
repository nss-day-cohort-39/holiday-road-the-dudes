/*
    This component will get the data on the national parks from the NPS API.
*/

import apiKeys from "../Settings.js"

let parks = []

// fetching parks from API
export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${apiKeys.npsKey}`)
    //taking what was recieved(promise) and turning it into java
        .then(response => response.json())
        //taking that java and storing it then putting it in parks
        .then(parsedParks => {
            parks = parsedParks
            console.log(parks)
        })
}





//NPS Link
//https://developer.nps.gov/api/v1/parks?api_key=your_api_key