import modals from "./modules/modals";
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showStyles from './modules/showStyles';
import calc from './modules/calc';
import calcdb from './modules/calcdb';

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

});