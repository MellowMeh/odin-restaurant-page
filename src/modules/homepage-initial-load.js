import {header, nav, homeButton, menuButton, aboutButton, contentContainer} from "../modules/dom-query";

const generateLogo = () => {
    let logo = document.createElement('div');
    logo.setAttribute('class', 'logo');
    logo.textContent = 'vance';
    header.appendChild(logo);
}

const generateNav = () => {
    homeButton.textContent = 'home';
    homeButton.onclick = function () {
        location.href = 'https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page';
    }
    menuButton.textContent = 'menu';
    menuButton.onclick = function () {
        location.href = 'https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page';
    }
    aboutButton.textContent = 'about';
    aboutButton.onclick = function () {
        location.href = 'https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page';
    }
}

const generateBackground = () => {
    let background = document.createElement('img');
    background.src = '../src/image/background.jpg';
    background.setAttribute('class', 'background');
    contentContainer.appendChild(background);

    let imageAttribution = document.createElement('a');
    imageAttribution.href = 'https://unsplash.com/photos/brown-themed-bar-GXXYkSwndP4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash';
    imageAttribution.textContent = "Photo by Patrick Tomasso on Unsplash";
    imageAttribution.setAttribute('class', 'image-attribution');
    contentContainer.appendChild(imageAttribution);
}

export {
    generateLogo,
    generateNav,
    generateBackground
};