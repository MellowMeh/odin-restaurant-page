import {header, nav, homeButton, menuButton, aboutButton, contentContainer} from "../modules/dom-query";

const generateContactUs = () => {
    let title = document.createElement('p');
        title.setAttribute('class', 'contact-title');
        title.textContent = 'contact us';
        contentContainer.appendChild(title);
}

const generateContactList = () => {
    for (let i = 0; i < 3; i++) {
        let contactItem = document.createElement('p');
        contactItem.setAttribute('class', 'contact-item');
        contactItem.textContent = 'name of contact';
        contentContainer.appendChild(contactItem);
            let contactDescription = document.createElement('p');
            contactDescription.setAttribute('class', 'contact-item-description');
            contactDescription.textContent = 'preferred contact method'
            contactItem.appendChild(contactDescription);  
    };
};

export {
    generateContactUs,
    generateContactList
}