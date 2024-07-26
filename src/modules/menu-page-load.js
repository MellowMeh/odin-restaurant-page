import {header, nav, homeButton, menuButton, aboutButton, contentContainer} from "../modules/dom-query";
import { clearContent } from "./clear-content";

const generateTitleAndSelectors = () => {
    let title = document.createElement('p');
        title.setAttribute('class', 'menu-title');
        title.textContent = 'our menu';
        contentContainer.appendChild(title);
    let selectorContainer = document.createElement('div');
        selectorContainer.setAttribute('class', 'selector-container')
        contentContainer.appendChild(selectorContainer);
    let food = document.createElement('p');
        food.setAttribute('class', 'selector');
        food.textContent = 'food';
        selectorContainer.appendChild(food);
    let drink = document.createElement('p');
        drink.setAttribute('class', 'selector');
        drink.textContent = 'drink';
        selectorContainer.appendChild(drink);
};

const generateFood = () => {
    let tapasHeader = document.createElement('p');
    tapasHeader.setAttribute('class', 'menu-header');
    tapasHeader.textContent = 'tapas';
    contentContainer.appendChild(tapasHeader);
}

export {
    generateTitleAndSelectors,
    generateFood
};