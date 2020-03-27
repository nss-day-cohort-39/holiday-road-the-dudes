/*  
    This component renders the Eatery dropdown on the DOM
*/

//Imports the Eatery data from the eatery data provider
import { useEateries } from "./EateryDataProvider.js"


export const eateriesSelect = () => {

    const renderEateriesDropdown = (eateriesCollection) => {
        const eateries = useEateries()
        return `
             <select class="dropdown" id="eateriesSelect">
            <option value="0">Places to Eat</option>   
            ${
                eateriesCollection.map(singleEatery => {
                    return `<option>${singleEatery.name}</option>`
                })
            }
        </select> `
        }

    renderEateriesDropdown(eateries)
}

