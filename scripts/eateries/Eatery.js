/*
  This component provides the HTML representation for each eatery
*/

export const eateryHTML = (eatery) => {
    return `
    <div class="eatery">
      <h3>${eatery.businessName}</h3>
      <div class='eatery_info'>${eatery.description}</div>
      <button class='eatery-detail' id="button--${eatery.id}">Eatery Details</button>
    </div>
    `
}