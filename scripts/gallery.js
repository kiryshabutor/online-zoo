var swiper = new Swiper('.swiper', {
    grid: {
        rows: 2,
        fill: 'row',
    },
    spaceBetween: 30,

    breakpoints: {
        320: {
            grid: {
                rows: 4,
                fill: 'row',
            },
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            spaceBetween: 30,
            slidesPerView: 2,
            grid: {
                rows: 2,
                fill: 'row',
            },
        },
        1000: {
            slidesPerView: 3,
            grid: {
                rows: 2,
                fill: 'row',
            },
        },
    },

    navigation: {
        nextEl: '.swiper__button-next',
        prevEl: '.swiper__button-prev',
    },
});
