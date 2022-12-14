import { isWebp, headerFixed } from './modules'
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
import Swiper, { Pagination, Autoplay } from 'swiper'
// Проверка браузера на поддерку .webp изображений ====================================================================================================================================================
isWebp()
// ====================================================================================================================================================

// Паралакс мышей ====================================================================================================================================================
// const mousePrlx = new MousePRLX({})
// ====================================================================================================================================================

// Фиксированный header ====================================================================================================================================================
headerFixed()
// ====================================================================================================================================================

const firstScreenSlider = new Swiper('.swiper', {

    modules: [Pagination, Autoplay],

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    spaceBetween: 50,
    grabCursor: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

});
