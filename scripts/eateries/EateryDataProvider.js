/*
    This component will get the data on the Eatery from the Eatery API.
*/


let eateries = []

// fetching parks from API
export const getEateries = () => {
    return fetch('http://holidayroad.nss.team/eateries')
    //taking what was recieved(promise) and turning it into java
        .then(response => response.json())
        //taking that java and storing it then putting it in eateries
        .then(parsedEateries => {
            eateries = parsedEateries
        }).then()
}

export const useEateries = () => {
    const sortedEateries = eateries.sort((a, b) => {
        if(a.state < b.state) { return -1; }
        if(a.state > b.state) { return 1; }
        return 0;
    })
    return sortedEateries.slice()
}