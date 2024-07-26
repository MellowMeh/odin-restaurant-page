import '../style/index.css';
import { generateBackground, generateLogo, generateNav } from '../modules/homepage-initial-load';

const generateHomePage = (function () {
    generateLogo();
    generateNav();
    generateBackground();
})();

