/*
  This function makes an HTML representation of each attraction
*/
export const bizzareHTML = (bizzare) => {
    return `
    <div class="bizzare">
      <h3>${bizzare.name}</h3>
      <div class='attraction_info'>${bizzare.description}</div>
      <button class='attraction-detail' id="button--${bizzare.id}">Attraction Details</button>
    </div>`
}