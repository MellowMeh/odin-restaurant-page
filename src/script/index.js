import '../style/index.css';
import {header, nav, homeButton, menuButton, aboutButton, contentContainer} from "../modules/dom-query";
import { background, generateBackground, generateLogo, generateNav, imageAttribution } from '../modules/homepage-initial-load';
import { clearContent, clearMenu } from '../modules/clear-content';
import { generateTitleAndSelectors, generateFood, generateDrink, food, drink } from '../modules/menu-page-load';

const generateHomePage = (function () {
    generateLogo();
    generateNav();
    generateBackground();
})();

const buttonActions = (function () {
    homeButton.addEventListener('click', function() {
        clearContent();
        generateLogo();
        generateNav();
        generateBackground();
    });
    menuButton.addEventListener('click', function() {
        clearContent();
        generateTitleAndSelectors();
        generateFood();
        drink.addEventListener('click', clearContent);
    })
})();