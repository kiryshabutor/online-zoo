'use strict';

const lazyImages = Array.from(document.querySelectorAll('img[data-src]'));
const windowHeight = document.documentElement.clientHeight;

let lazyImagesPositions = [];
if (lazyImages.length > 0) {
    lazyImages.forEach((img) => {
        if (img.dataset.src) {
            lazyImagesPositions.push(
                img.getBoundingClientRect().top + pageYOffset
            );
        }
    });
    lazyScrollCheck();
}

window.addEventListener('scroll', lazyScroll);

function lazyScroll() {
    if (document.querySelectorAll('img[data-src]').length > 0) {
        lazyScrollCheck();
    }
}

function lazyScrollCheck() {
    let imagesIndexes = [];
    lazyImagesPositions.forEach((imagePosition, index) => {
        if (pageYOffset > imagePosition - windowHeight) {
            imagesIndexes.push(index);
        }
    });
    if (imagesIndexes.length > 0) {
        imagesIndexes.forEach((imgIndex) => {
            if (lazyImages[imgIndex].dataset.src) {
                lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
                lazyImages[imgIndex].removeAttribute('data-src');
            }
            delete lazyImagesPositions[imgIndex];
        });
    }
}
