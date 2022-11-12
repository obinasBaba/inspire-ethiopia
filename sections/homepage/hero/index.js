import './hero.scss'
import gsap from "gsap";


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


const nvBtn = document.querySelector('.nav_menu_btn')
const nvListBtn = document.querySelector('.nav_list_btn')

nvBtn.addEventListener('click', () => {
    // document.querySelector('.nav_slider').classList.add('show')
    gsap.to('.nav_slider', {
        x: '-1%',
        duration: gsap.defaults().duration,
        onComplete(){
            // document.querySelector('.nav_slider').classList.toggle('hide')
        }
    })
})

nvListBtn.addEventListener('click', () => {
    gsap.to('.nav_slider', {
        x: '-101%',
        duration: gsap.defaults().duration,
        onComplete(){
            // document.querySelector('.nav_slider').classList.toggle('hide')

        }
    })
})
