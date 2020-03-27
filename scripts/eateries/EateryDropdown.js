/*  
    This component renders the Eatery dropdown on the DOM
*/

//Imports the Eatery data from the eatery data provider
import { useEateries } from "./EateryDataProvider.js"

const contentTarget = document.querySelector(".eateryDropdown")

export const eateriesSelect = () => {
const eateries = useEateries()
    const renderEateriesDropdown = (eateriesCollection) => {
        const eateries = useEateries()
        return `
             <select class="dropdown" id="eateriesSelect">
            <option value="0">Places to Eat</option>   
            ${
                eateriesCollection.map(singleEatery => {
                    return `<option>${singleEatery.businessName} (${singleEatery.city}, ${singleEatery.state})</option>`
                })
            }
        </select> `
        }

    contentTarget.innerHTML = renderEateriesDropdown(eateries)
}

