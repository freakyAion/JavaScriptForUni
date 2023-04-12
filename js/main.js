/*console.log("hello");

//1 - выборка элементов
const h2 = document.getElementById("sub-title");//взять элемент по id
console.log(h2);

const lastItem = document.querySelector
    (".menu li:last-child a");//взять элемент по селектору
console.log(lastItem);

const paragrafs = document.querySelectorAll(".text");//взять все элементы по селекторы - возвращает список узлов (примерно массив)
console.log(paragrafs);

// 2 - контент элементов (контейнеров, тегов)

console.log(h2.innerHTML);
console.log(h2.innerText);
console.log(h2.outerHTML);
console.log(h2.textContent);

h2.innerHTML = "новый <i>заголовок</i><img src='img/award-fill.svg' alt='лого'>";

//3 - классы, атрибут class

lastItem.classList.add("red");
lastItem.classList.add("big");


console.log(h2.classList.contains("small"));
h2.classList.remove("small");
console.log(h2.classList.contains("small"));

//4 - стили
const mainTitle = document.querySelector("h1");
mainTitle.style.color = "#880088";
mainTitle.style.fontSize = "72px";

//5 - атрибуты тегов

console.log(lastItem.getAttribute("href"));
console.log(lastItem.getAttribute("class"));
lastItem.setAttribute("href", "https://midis.ru/");

lastItem.setAttribute("class", "red small");

//6 - поиск родительских элементов и предков
console.log(lastItem.parentNode.parentNode);
console.log(lastItem.closest("menu"));

//7 - поиск дочерних элементов и потомков

const menu = document.querySelector(".menu");
console.log(document.querySelector("a"));
console.log(menu.childNodes);

//8 - создание элементов

let newelem = document.createElement("div");
newelem.innerHTML = "<img src='imag/nothing to be afraid of.png' alt='nothing to afraid of, dear'>nothing to be afraid of<p></p>"
newelem.classList.add("card");

const container = document.querySelector(".container");
for(let i = 0; i < 0; i++)
{
    let newelem = document.createElement("div");
    newelem.innerHTML = "<img src='imag/nothing to be afraid of.png' alt='nothing to be afraid of, dear'><br><p>nothing to be afraid of</p>"
    newelem.classList.add("card");
    console.log(i);
    container.append(newelem);
}


//9 - удаление элементов

const lastH2 = document.querySelector("h2:last-of-type");
lastH2.innerHTML = "";
lastH2.outerHTML = "";

//10 - работа с множеством элементов

for(let item of paragrafs)
{
    item.style.color = "red";
    item.innerHTML = "sucka";
}
*/

let buttonstring = ["start", "stop"];
let current = 0;

const btn = document.getElementById("button");
const crc = document.querySelector(".circle");
btn.addEventListener("click", function(){
    crc.classList.toggle("run");
    current++;

    btn.textContent = buttonstring[current % 2];
});