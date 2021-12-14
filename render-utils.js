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

    livingEl.textContent = true ? `${rat.name} is still alive` : `${rat.name} is no longer with us`;
    livingEl.classList.add('living');

    div.append(nameEl, colorEl, sexEl, livingEl);
    
    return div;
}