// import functions and grab DOM elements
import { getCandy, getColors, getRats, getTheories } from './fetch-utils.js';
import { renderCandy, renderColor, renderRatDetails, renderTheories } from './render-utils.js';

const listContainer = document.getElementById('list-container');
const ratButton = document.getElementById('rat-list-button');
const theoryButton = document.getElementById('theory-list-button');
const candyButton = document.getElementById('candy-list-button');
const colorButton = document.getElementById('color-list-button');
// const theoryListContainer = document.getElementById()

window.addEventListener('load', async() => {
    const rats = await getRats();
    for (let rat of rats) {
        const ratEl = renderRatDetails(rat);
        listContainer.append(ratEl);
    }
});

theoryButton.addEventListener('click', async() => {
    listContainer.textContent = '';
    const theories = await getTheories();
    for (let theory of theories) {
        const theoryEl = renderTheories(theory);
        listContainer.append(theoryEl);
    }
});

ratButton.addEventListener('click', async() => {
    listContainer.textContent = '';
    const rats = await getRats();
    for (let rat of rats) {
        const ratEl = renderRatDetails(rat);
        listContainer.append(ratEl);
    }
});
candyButton.addEventListener('click', async() => {
    listContainer.textContent = '';
    const candies = await getCandy();
    for (let candy of candies) {
        const candyEl = renderCandy(candy);
        listContainer.append(candyEl);
    }
});
colorButton.addEventListener('click', async() => {
    listContainer.textContent = '';
    const colors = await getColors();
    for (let color of colors) {
        const colorEl = renderColor(color);
        listContainer.append(colorEl);
    }
});

