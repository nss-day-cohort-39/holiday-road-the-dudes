/*  
    This component renders the Parks dropdown on the DOM
*/

import { useParks } from "./ParksDataProvider.js"

const contentTarget = document.querySelector(".parkDropdown")



export const parksSelect = () => {
    const parks = useParks()

    const renderParksDropdown = (parksCollection) => {
        return `
        <select class="dropdown" id="parksSelect">
            <option value="0">National Parks</option>   
            ${
                parksCollection.map(singlePark => {
                    return `<option>${singlePark.name}</option>`
                })
            }
        </select> `
        }
    
    contentTarget.innerHTML = renderParksDropdown(parks)
}
