/* 
  This component retrieves the data from API and then turns 
  the data into javascript then exports a copy of the data
*/

let attractions = []

export const getAttractions = () => {
  return fetch(`http://holidayroad.nss.team/bizarreries`)
  .then(response => response.json())
  .then(parsed => {
    attractions = parsed
  })
}

export const useAttractions =()=>{
  return attractions.slice()
}