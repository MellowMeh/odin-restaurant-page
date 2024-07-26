import { contentContainer } from "./dom-query";
import { background, imageAttribution } from "./homepage-initial-load";
import { tapasHeader, foodItem } from "./menu-page-load";

let clearContent = () => {
    while (contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.firstChild);
    }
};

export {
    clearContent
}
