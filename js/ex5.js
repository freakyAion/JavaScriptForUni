'use strict'
const tabLinks = document.querySelectorAll(".tablinks");
const tabContents = document.querySelectorAll(".tabcontent");

tabLinks.forEach(link => {
    link.addEventListener("click", openTab);
});

function openTab(evt){
    const button = evt.currentTarget;
    const day = button.getAttribute("data-day");

    tabContents.classList.remove("tabcontent_active");
    tabContents.classList.remove("tabcontent_active");

    document.querySelector(`#${day}`).classList.add("tabcontent_active");
    button.classList.add("tablinks_active");

}