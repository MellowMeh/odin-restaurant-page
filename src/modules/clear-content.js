import { contentContainer } from "./dom-query";
import { background, imageAttribution } from "./homepage-initial-load";

let clearContent = () => {
    contentContainer.removeChild(background);
    contentContainer.removeChild(imageAttribution);
};

export {
    clearContent
}
