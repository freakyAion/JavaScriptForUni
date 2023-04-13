'use strict'
const accordeonTitles = document.querySelectorAll('.accordeon_title');

accordeonTitles.forEach(title => {
    title.addEventListener("click", () =>
{
    const selectedItem = title.parentElement.querySelector(".accordeon_text");

    title.classList.toggle("accordeon_title__active");
    selectedItem.classList.toggle("accordeon_item__visible");

    if (selectedItem.classList.contains("accordeon_item__visible")) selectedItem.style.maxHeight = selectedItem.scrollHeight + "px";
    else selectedItem.style.maxHeight = null;

});
});