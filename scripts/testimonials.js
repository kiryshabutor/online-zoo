var swiper = new Swiper('.testimonials__swiper', {
    scrollbar: {
        el: '.testimonials__swiper-scrollbar',
        draggable: true,
        dragClass: 'testimonials__swiper-scrollbar-drag',
    },
    wrapperClass: 'testimonials__swiper-wrapper',
    slideClass: 'testimonials__swiper-slide',
    breakpoints: {
        320: {
            grid: {
                rows: 3,
                fill: 'row',
            },
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },

        1000: {
            grid: {
                rows: 1,
                fill: 'row',
            },
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30,
        },
        1590: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 30,
        },
    },
});
