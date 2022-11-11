import './other.scss'
import Swiper from "swiper";
import 'swiper/css/free-mode'

const swiper = new Swiper(".swiper.others_swipers", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    // loop: true,


    // allowTouchMove: true,
    // followFinger: true,
    // longSwipes: true,
    // simulateTouch: true,
    // keyboard: true,
    // resistanceRatio: 1.2,
});
