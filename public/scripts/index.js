"use strict";
console.log('loaded');
// index page
let burgerOpen = false;
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const topLine = document.querySelector('.top-line');
const bottomLine = document.querySelector('.bottom-line');
nav.addEventListener('click', () => {
    nav.style.top = '-1000px';
    topLine.style.display = 'inline';
    bottomLine.style.display = 'inline';
    burgerOpen = false;
});
burger.addEventListener('click', () => {
    if (burgerOpen === false) {
        nav.style.top = '0px';
        topLine.style.display = 'none';
        bottomLine.style.display = 'none';
        burgerOpen = true;
    }
    else {
        nav.style.top = '-1000px';
        topLine.style.display = 'inline';
        bottomLine.style.display = 'inline';
        burgerOpen = false;
    }
});
