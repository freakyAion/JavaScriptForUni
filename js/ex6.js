const slider = document.querySelector(".slider_items");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let current = 0;
let max = 6;
let slideWidth = 400;

console.log(current);
console.log(-1 * current * slideWidth);

nextButton.addEventListener("click", () =>
{
    if (!(current + 1 > max))
    {
        slider.style.transform = "translateX(" + ((current + 1) * -slideWidth)  + "px)";
        //slider.style.transform = `translateX(${-1 * current * slideWidth}px)`;
        current++;
    }
    console.log(current);
    console.log(-current * slideWidth);
});

prevButton.addEventListener("click", () =>
{
    if (!(current - 1 < 0))
    {
        current--;
        slider.style.transform = "translateX(" + ((current) * -slideWidth)  + "px)";
        //slider.style.transform = `translateX(${-1 * current * slideWidth}px)`;
    }
    console.log(current);
    console.log(-current * slideWidth);
});