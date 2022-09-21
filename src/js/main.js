import modals from "./modules/modals";
import sliders from './modules/sliders';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
'use strict';

modals();
sliders('.feedback-slider-item', 'h' , '.main-prev-btn', '.main-next-btn');
sliders('.main-slider-item', 'vertical');
forms();



});