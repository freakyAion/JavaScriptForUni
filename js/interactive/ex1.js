let button = document.querySelector(".button_open");
let modal  = document.querySelector      (".modal");

const modalViewHandler = () =>
{
    document.querySelector(".modal").classList.toggle("__modal_open");
}

button.addEventListener('click', modalViewHandler);
modal.addEventListener ('click', modalViewHandler);