// import functions and grab DOM elements
import { getRats, getTheories } from './fetch-utils.js';
import { renderRatDetails, renderTheories } from './render-utils.js';

const listContainer = document.getElementById('list-container');
const listButton = document.getElementById('list-button')
// const theoryListContainer = document.getElementById()

window.addEventListener('load', async() => {
    const rats = await getRats();
    for (let rat of rats) {
        const ratEl = renderRatDetails(rat);
        listContainer.append(ratEl);
    }
});

listButton.addEventListener('click', async() => {
    const theories = await getTheories();
    for (let theory of theories) {
        const theoryEl = renderTheories(theory);
        listContainer.append(theoryEl);
    }
});