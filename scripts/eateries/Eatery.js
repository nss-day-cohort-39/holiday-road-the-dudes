export const eateryHTML = (eatery) => {
    return `
    <div class="eatery">
      <h3>${eatery.businessName}</h3>
      <div class='eatery_info'>${eatery.description}</div>
    </div>
    `
}