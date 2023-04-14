'use strict';

const menuBtn = document.querySelector('.header__menu-btn');
const body = document.querySelector('body');
const menuBlock = document.querySelector('.menu');
const headerMenu = document.querySelector('.header__menu');

const comments = document.querySelectorAll('.comment');
const commentArea = document.querySelector('.testimonials__swiper');
const wrapper = document.querySelector('.wrapper');

let commentBtn = document.createElement('div');
commentBtn.innerHTML = '<div><span></span><div>';
commentBtn.classList.add('comment__btn');

document.addEventListener('click', (e) => {
    let removeComment = document.querySelector('.comment-active');
    if (e.target.closest('div') == menuBtn) {
        if (headerMenu.classList.contains('active'))
            body.classList.remove('lock');
        else {
            body.classList.add('lock');
            if (removeComment != null) removeComment.remove();
        }
        headerMenu.classList.toggle('active');
    } else if (
        e.target.closest('.testimonials__swiper') == commentArea &&
        commentArea != null
    ) {
        if (window.innerWidth < 1000) {
            comments.forEach((el) => {
                if (el == e.target.closest('.comment')) {
                    let popOver = el.cloneNode(true);
                    popOver.style = '';
                    popOver.classList.add('comment-active');
                    popOver
                        .querySelector('.comment__wrapper')
                        .append(commentBtn);
                    wrapper.append(popOver);
                    body.classList.add('lock');
                }
            });
        }
    } else if (
        e.target != menuBlock &&
        (e.target.closest('.comment') != removeComment ||
            removeComment == null ||
            e.target.closest('.comment__btn') != null) &&
        body.classList.contains('lock')
    ) {
        body.classList.remove('lock');
        headerMenu.classList.remove('active');
        if (removeComment != null) removeComment.remove();
    }
});
