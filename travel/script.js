// Burger-menu

const burgerButton = document.querySelector('.burger__button');
const burgerMenu = document.querySelector('.burger__menu');
const burgerLink = document.querySelector('.burger__link');
const accountLink = document.querySelector('#account');
const burgerClose = document.querySelector('.burger__close');
const burgerBlur = document.querySelector('.blur');
const stopChange = document.querySelector('.stop');

burgerButton.onclick = function() {
    burgerMenu.classList.add('burger__menu__active');
    burgerBlur.classList.add('blur__active');
    stopChange.classList.add('stop__active');
};

burgerClose.onclick = function() {
    burgerMenu.classList.remove('burger__menu__active');
    burgerBlur.classList.remove('blur__active');
    stopChange.classList.remove('stop__active');
};

document.addEventListener('mousedown', function(e) {
    if (e.target.closest('.blur') !== null  ||  
        e.target.closest('.burger__link') !== null || 
        e.target.closest('#account') !== null) {
            burgerMenu.classList.remove('burger__menu__active');
            burgerBlur.classList.remove('blur__active');
            stopChange.classList.remove('stop__active');
    }  
});
