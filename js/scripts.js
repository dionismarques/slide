import SlideNav from './slide.js';

const slidenav = new SlideNav('.slide-wrapper', '.slide');
slidenav.init();
slidenav.addArrow('.prev', '.next');
slidenav.addControl('.custom-controls');