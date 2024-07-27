import {header, nav, homeButton, menuButton, aboutButton, contentContainer} from "../modules/dom-query";
import { clearContent } from "./clear-content";
import { generateTitleAndSelectors, generateFood, generateDrink, drink, food} from "./menu-page-load";
import { generateContactList, generateContactUs } from "./about-page-load";

const generateLogo = () => {
    let logo = document.createElement('div');
    logo.setAttribute('class', 'logo');
    logo.textContent = 'vance';
    header.appendChild(logo);
}

const generateNav = () => {
    homeButton.textContent = 'home';
    menuButton.textContent = 'menu';
    aboutButton.textContent = 'about';
}

let background = document.createElement('img');
let imageAttribution = document.createElement('a');

const generateBackground = () => {
    background.src = '../src/image/background.jpg';
    background.setAttribute('class', 'background');
    contentContainer.appendChild(background);

    imageAttribution.href = 'https://unsplash.com/photos/brown-themed-bar-GXXYkSwndP4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash';
    imageAttribution.textContent = "Photo by Patrick Tomasso on Unsplash";
    imageAttribution.setAttribute('class', 'image-attribution');
    contentContainer.appendChild(imageAttribution);
}

const generateTextOverlay = () => {
    let menuOverlay = document.createElement('p');
        menuOverlay.textContent = 'menu'
        menuOverlay.setAttribute('class', 'menu-overlay');
        menuOverlay.addEventListener('click', function() {
            clearContent();
            generateTitleAndSelectors();
            generateFood();
            drink.addEventListener('click', clearContent);
        })
        contentContainer.appendChild(menuOverlay);
    let aboutOverlay = document.createElement('p');
        aboutOverlay.textContent = 'about'
        aboutOverlay.setAttribute('class', 'about-overlay');
        aboutOverlay.addEventListener('click', function() {
            clearContent();
            generateContactUs();
            generateContactList();
        })
        contentContainer.appendChild(aboutOverlay);
}
 
export {
    background,
    imageAttribution,
    generateLogo,
    generateNav,
    generateBackground,
    generateTextOverlay
};