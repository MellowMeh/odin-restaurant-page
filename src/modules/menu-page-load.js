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
        food.addEventListener('click', function() {
            clearContent();
            generateTitleAndSelectors();
            generateFood();
        });
        selectorContainer.appendChild(food);
    let drink = document.createElement('p');
        drink.setAttribute('class', 'selector');
        drink.textContent = 'drink';
        drink.addEventListener('click', function() {
            clearContent();
            generateTitleAndSelectors();
            generateDrink();
        });
        selectorContainer.appendChild(drink);
};

const generateFood = () => {
    let tapasHeader = document.createElement('p');
        tapasHeader.setAttribute('class', 'menu-header');
        tapasHeader.textContent = 'tapas';
        contentContainer.appendChild(tapasHeader);
    for (let i = 0; i < 5; i++) {
        let foodItem = document.createElement('p');
        foodItem.setAttribute('class', 'menu-item');
        foodItem.textContent = 'tapas option';
        contentContainer.appendChild(foodItem);
            let foodDescription = document.createElement('p');
            foodDescription.setAttribute('class', 'menu-item-description');
            foodDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
            foodItem.appendChild(foodDescription);
            let foodPrice = document.createElement('p');
            foodPrice.setAttribute('class', 'menu-item-description');
            foodPrice.textContent = '$12'
            foodItem.appendChild(foodPrice);
        
    };
}

const generateDrink = () => {
    let drinkHeader = document.createElement('p');
        drinkHeader.setAttribute('class', 'menu-header');
        drinkHeader.textContent = 'wine';
        contentContainer.appendChild(drinkHeader);
    for (let i = 0; i < 5; i++) {
        let drinkItem = document.createElement('p');
        drinkItem.setAttribute('class', 'menu-item');
        drinkItem.textContent = 'wine option';
        contentContainer.appendChild(drinkItem);
            let drinkDescription = document.createElement('p');
            drinkDescription.setAttribute('class', 'menu-item-description');
            drinkDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
            drinkItem.appendChild(drinkDescription);
            let drinkPrice = document.createElement('p');
            drinkPrice.setAttribute('class', 'menu-item-description');
            drinkPrice.textContent = '$10'
            drinkItem.appendChild(drinkPrice);  
    };
}

export {
    generateTitleAndSelectors,
    generateFood,
    generateDrink
};