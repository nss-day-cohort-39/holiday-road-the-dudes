const contentTarget = document.querySelector(".previewContainer")

export const prompt = () => contentTarget.innerHTML =
 `<article class="prompt"><h2>Let's plan a trip
 !</h2>
 <p><h3>Choose a destination.</h3></p>
 <p><h3>Choose where you want to eat.</h3></p>
 <p><h3>Choose an attraction you would like to see.</h3></p>
 <p><h4>*Check forecast below after choosing a destination so you dont get rained out!*</h4></p>
 </article>`