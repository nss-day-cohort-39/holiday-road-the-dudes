/* 
    This component takes the directions object returned from the Routing 
    API and turns it into an HTML representation of directions
*/

const metersToMiles = (distance) => {
    return distance/1609.344;
}

const msToHour = (s) => {
    const ms = s % 1000;
    s = (s - ms) / 1000;
    const secs = s % 60;
    s = (s - secs) / 60;
    const mins = s % 60;
    const hrs = (s - mins) / 60;
  
    return hrs + 'hrs' + ' ' + mins + 'min';
  }

export const directionsHTML = (directionsObject) => {
    return `
    <dialog class="directionsDialog">
        <div class="directions">
            <div class="directions__title">Your Trip</div>
            <div class="directions__distance">Total Distance: ${Math.floor(metersToMiles(directionsObject.paths[0].distance))} miles</div>
            <div class="directions__time">Total Time: ${msToHour(directionsObject.paths[0].time)}</div>
            <div class="directions__instructions">Directions:
                ${directionsObject.paths[0].instructions.map((singleInstruction) => {
                    return `
                    <div class="instruction">
                        <div class="instruction__step">${singleInstruction.text} | ${metersToMiles(singleInstruction.distance).toFixed(2)}mi | ${msToHour(singleInstruction.time)}</div>
                    </div>
                    `
                }).join("")}
            </div>
        </div>
    </dialog>    
    `
}