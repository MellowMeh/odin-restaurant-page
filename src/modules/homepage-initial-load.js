import {header, nav, homeButton, menuButton, aboutButton, contentContainer} from "../modules/dom-query";

const generateLogo = () => {
    let logo = document.createElement('div');
    logo.setAttribute('class', 'logo');
    logo.textContent = 'vance';
    header.appendChild(logo);
}

export {
    generateLogo
};