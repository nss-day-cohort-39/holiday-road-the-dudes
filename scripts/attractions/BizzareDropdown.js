import { useAttractions } from "./BizzareDataProvider.js"




export const attractionslSelect = () => {
    
    const attractions = useAttractions()
    
    const renderAttractionsDropdown = (attractionsCollection) => {
           return `
             <select class="dropdown" id="attractionsSelect">
            <option value="0">Bizzaries</option>   
            ${
                attractionsCollection.map(singleAttraction => {
                    return `<option>${singleAttraction.name}</option>`
                })
            }
        </select> `
        }
    
    renderAttractionsDropdown(attractions)

}