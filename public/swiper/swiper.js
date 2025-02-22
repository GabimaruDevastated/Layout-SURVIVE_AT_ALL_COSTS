new Swiper('.swiper-first', {
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

new Swiper('.swiper-second', {
    effect: 'cards',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
    },
    keyboard: {
        enabled: true
    }
});