/*
    This component will hold the HTML 
    representation for our footer
*/

export const Footer = () => {
    contentTarget.innerHTML = `
        <p class="pTag">Copyright 2020</p>
        <p class="pTag">Group: Parsec Puppies a.k.a. the Dudes</p>
        <p class="pTag">Authors: Derek Buckley, Parker Hodge, Traye Johnson, Brennen Tatum, Brant Pippin</p>
        `
}

const contentTarget = document.querySelector('.footer')