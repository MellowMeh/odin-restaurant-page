import '../style/index.css';
import {header, nav, homeButton, menuButton, aboutButton, contentContainer} from "../modules/dom-query";
import { background, generateBackground, generateLogo, generateNav, imageAttribution } from '../modules/homepage-initial-load';
import { clearContent } from '../modules/clear-content';
import { generateTitleAndSelectors, generateFood } from '../modules/menu-page-load';

const generateHomePage = (function () {
    generateLogo();
    generateNav();
    generateBackground();
})();

const buttonActions = (function () {
    homeButton.addEventListener('mousedown', function() {
        clearContent();
    });
    homeButton.addEventListener('mouseup', function() {
        generateBackground();
    });
    menuButton.addEventListener('click', function() {
        clearContent();
        generateTitleAndSelectors();
        generateFood();
    })
})();