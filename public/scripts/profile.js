"use strict";
console.log('profile page');
// Profile Page
let darkActive = false;
const darkMode = document.querySelector(".dark-mode");
const body = document.querySelector("body");
const logoBlack = document.querySelector('.kalaharimed-logo-black-a');
const logoWhite = document.querySelector('.kalaharimed-logo-white-a');
const h1 = document.querySelectorAll('h1');
const h2 = document.querySelectorAll('h2');
const h3 = document.querySelectorAll('h3');
const p = document.querySelectorAll('p');
const ul = document.querySelectorAll('ul');
const text = [h1, h2, h3, p, ul];
const darkModeMoon = document.querySelector('.darkmode-path');
console.log('fill is', darkModeMoon.getAttribute('fill'));
darkMode.addEventListener('click', () => {
    if (darkActive === false) {
        darkMode.style.backgroundColor = "#f4f4f4";
        darkMode.style.color = "#333";
        body.style.backgroundColor = "#333";
        logoBlack.style.display = 'none';
        logoWhite.style.display = 'inline';
        darkModeMoon.setAttribute('fill', '#333');
        text.forEach((elementList) => {
            elementList.forEach((element) => {
                element.style.color = "#f4f4f4";
            });
        });
        darkActive = true;
    }
    else {
        darkMode.style.backgroundColor = "#333";
        darkMode.style.color = "#f4f4f4";
        body.style.backgroundColor = "#f4f4f4";
        logoBlack.style.display = 'inline';
        logoWhite.style.display = 'none';
        darkModeMoon.setAttribute('fill', '#f4f4f4');
        text.forEach((elementList) => {
            elementList.forEach((element) => {
                element.style.color = "#333";
            });
        });
        darkActive = false;
    }
});
