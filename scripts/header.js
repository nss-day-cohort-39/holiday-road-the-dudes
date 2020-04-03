/*
    This component will hold the HTML 
    representation for our header
*/

export const Header = () => {
    contentTarget.innerHTML = `
        <h1>Holiday Road</h1>
        <h3>Plan Your Dream National Park Vacation!</h3>
    `
}

const contentTarget = document.querySelector('.header')

