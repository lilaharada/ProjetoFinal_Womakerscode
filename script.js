document.addEventListener('DOMContentLoaded', function () {
    const mySwiper = new Swiper('.swiper-container', {
        slidesPerView:1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFilGroupWithBlanl: true,
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

  