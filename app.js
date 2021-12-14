// import functions and grab DOM elements
import { getRats } from './fetch-utils.js';
import { renderRatDetails } from './render-utils.js';

const ratListContainer = document.getElementById('rat-list-container');

window.addEventListener('load', async() => {
    const rats = await getRats();
    for (let rat of rats) {
        const ratEl = renderRatDetails(rat);
        ratListContainer.append(ratEl);
    }
});