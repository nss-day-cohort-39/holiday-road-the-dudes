export const parkHTML = (park) => {
    return `
    <div id="${park.id} "class="park">
      <h3>${park.fullName}</h3>
      <div class="states">${park.states}</div>
      <img class="parkImage" src="${park.images[0].url}">
      <button class='park-detail' id="button--${park.id}">Park Details</button>
    </div>
    `
}