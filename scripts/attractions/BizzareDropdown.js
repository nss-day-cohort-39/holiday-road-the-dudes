import { useAttractions } from "./BizzareDataProvider.js"

const contentTarget = document.querySelector(".attractionDropdown")


export const attractionslSelect = () => {
    
    const attractions = useAttractions()
    
    const renderAttractionsDropdown = (attractionsCollection) => {
           return `
             <select class="dropdown" id="attractionsSelect">
            <option value="0">Bizzaries</option>   
            ${
                attractionsCollection.map(singleAttraction => {
                    return `<option>${singleAttraction.name} (${singleAttraction.city}, ${singleAttraction.state})</option>`
                })
            }
        </select> `
        }
    
   contentTarget.innerHTML = renderAttractionsDropdown(attractions)

}