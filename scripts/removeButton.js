'use strict';

const returnButton = document.querySelector('.button-back');
const header = document.querySelector('.header');

let scrollPos = 0;

setTimeout(addOpacityStyle, 100);

function addOpacityStyle() {
    returnButton.style.transition = 'opacity .5s';
}

window.addEventListener('scroll', function () {
    if (
        window.pageYOffset >=
        header.clientHeight -
            this.document.querySelector('.header__menu').clientHeight
    )
        returnButton.classList.add('active');
    else returnButton.classList.remove('active');
});
console.log(document.querySelector('.header').clientHeight);
returnButton.addEventListener('click', function (e) {
    e.preventDefault();
    var scroll = new SmoothScroll();
    scroll.animateScroll(header);
});
