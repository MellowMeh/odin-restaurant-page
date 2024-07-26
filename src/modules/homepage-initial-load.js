import {header, nav, homeButton, menuButton, aboutButton, contentContainer} from "../modules/dom-query";

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

export {
    background,
    imageAttribution,
    generateLogo,
    generateNav,
    generateBackground
};