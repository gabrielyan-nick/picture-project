import modals from "./modules/modals";
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showStyles from './modules/showStyles';
// import calc from './modules/calc';
import calcdb from './modules/calcdb';
import portfolioFilter from './modules/portfolioFilter';
import pictureSize from './modules/pictureSize';
import accordeon from "./modules/accordeon";
import burger from './modules/burger';
import scroll from './modules/scroll';

window.addEventListener('DOMContentLoaded', () => {
'use strict';

modals();
sliders('.feedback-slider-item', 'h' , '.main-prev-btn', '.main-next-btn');
sliders('.main-slider-item', 'vertical');
forms();
mask('[name="phone"]');
checkTextInputs('[name="name"]');
checkTextInputs('[name="message"]');
showStyles('.button-styles', '.styles .row');
// calc('#size', '#material', '#options', '.promocode', '.calc-price');
calcdb();
portfolioFilter();
pictureSize('.sizes-block');
accordeon(".accordion-heading");
burger('.burger-menu', '.burger');
scroll('.pageup');
});