/* 首页 轮播组件 */
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
    loop: true,
    autoplay: {
        delay: 2400,
        disableOnInteraction: false
    }
});


/* 首页 服务流程 轮播组件 */
var swiper_fwlc = new Swiper('.swiper-container-fwlc', {
    slidesPerView: 3,
    spaceBetween: 10,
    speed:3000,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});
/* 首页 行业解决方案 轮播组件 */
var swiper_jjfa = new Swiper('.swiper-container-jjfa', {
    slidesPerView: 1,
    spaceBetween: 0,
});