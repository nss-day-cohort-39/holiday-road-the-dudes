/*
    This component provides the HTML representation for a single itinerary
*/

export const itineraryHTML = (itineraryObject, parkObject, attractionObject, eateryObject) => {
    return `
    <article class="itinerary">
    <header><h2>Trip ${itineraryObject.id}</h2></header> 
    <div class="savedPark"><h3>Park</h3>${parkObject.name}</div>
    <div class="savedEatery"><h3>Eat</h3>${eateryObject.businessName}</div>
    <div class="savedAttraction"><h3>See</h3>${attractionObject.name}</div>
    <p>
      <button id="deleteItinerary--${itineraryObject.id}">Delete Trip</button>
    </p>
    </article>
    `
} 