// In your app, in a separate file, write a render function for your domain. 
// Your function should accept one object and returns a DOM element. 
// This function should return at minimum a div with two p tags. The outer div should have a css class of 'rat-item'.
export function renderRatDetails(rat) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const colorEl = document.createElement('p');
    const sexEl = document.createElement('p');
    const livingEl = document.createElement('p');

    div.classList.add('rat-detail');

    nameEl.textContent = rat.name;
    nameEl.classList.add('name');

    colorEl.textContent = rat.color;
    colorEl.classList.add('color');

    sexEl.textContent = rat.sex;
    sexEl.classList.add('sex');

    livingEl.textContent = rat.living;
    livingEl.classList.add('living');
    // if (rat.living === true) {
    //     livingEl.textContent = `${rat.name} is still alive`;
    // } else {
    //     livingEl.textContent = `${rat.name} is no longer with us`;
    // }
  
    // livingEl.textContent = true ? `${rat.name} is still alive` : `${rat.name} is no longer with us`;
    // livingEl.classList.add('living');

    div.append(nameEl, colorEl, sexEl, livingEl);
    
    return div;
}
export function renderTheories(theory) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const descriptionEl = document.createElement('p');
    const plausibilityEl = document.createElement('p');
    const antisemiticEl = document.createElement('p');

    div.classList.add('theory-container');

    nameEl.textContent = theory.name;
    nameEl.classList.add('name');

    descriptionEl.textContent = theory.description;
    descriptionEl.classList.add('description');

    plausibilityEl.textContent = theory.plausibility;
    plausibilityEl.classList.add('plausibility');

    antisemiticEl.textContent = theory.antisemitic;
    antisemiticEl.classList.add('antisemitic');


    div.append(nameEl, descriptionEl, plausibilityEl, antisemiticEl);
    
    return div;
}