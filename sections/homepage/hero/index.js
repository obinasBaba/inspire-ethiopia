import './hero.scss'


import Swiper from "swiper";
import 'swiper/css';
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";

const swiper = new Swiper(".hero-swiper", {
    // loop: true,
    allowTouchMove: true,
    modules: [Scrollbar],

    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
});
