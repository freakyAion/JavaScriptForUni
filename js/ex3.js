'use strict'

const menu = document.querySelector(".main_nav");
const burgerBtn = document.querySelector(".burger");

burgerBtn.addEventListener('click', () =>
{
    menu.classList.toggle("menu__open");
    burgerBtn.classList.toggle("burger__anim");
});