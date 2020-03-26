let attractions = []

export const getAttractions = () => {
  return fetch(`http://holidayroad.nss.team/bizarreries`)
  .then(response => response.json())
  .then(parsed => {
    attractions = parsed
  })
}

