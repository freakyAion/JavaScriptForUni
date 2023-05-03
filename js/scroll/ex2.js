'use strict'
const header = document.querySelector('.header');
const blockFirst = document.querySelector('.section_1');
const heightBlockFirst = blockFirst.offsetHeight;

let scrollState = 0;

window.addEventListener('scroll', ScrollHandler);

function ScrollHandler (){
    const scrollTop = window.pageYOffset;

    if(scrollTop >= heightBlockFirst) header.classList.add('header___fix');
    else header.classList.remove('header___fix');
    console.log(scrollTop + "   " + heightBlockFirst)
    scrollState = scrollTop;
}
