/*
    This component provides the HTML representation for a single itinerary
*/

export const itineraryHTML = (itineraryObject, parkObject, attractionObject, eateryObject) => {
    return `
    <article class="itinerary">
    <header>Trip ${itineraryObject.id}</header> 
    <div>${parkObject.name}</div>
    <div>${eateryObject.businessName}</div>
    <div>${attractionObject.name}</div>
    </article>
    `
}