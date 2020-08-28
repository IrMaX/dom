//знаходимо лінк та змінюємо його

const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

//створюємо параграф
const sect = document.querySelector("section");
const para = document.createElement("p");
sect.appendChild(para);
para.textContent = "We hope you enjoyed the ride.";

// //створюємо 10 параграфів
// for (let i = 1; i <= 1000; i++) {
//   const p = document.createElement("p");
//   p.textContent = i + " lorem ipsum";
//   sect.appendChild(p);
// }

// //Модний підхід
// [...Array(1000)].forEach((_, i) => {
//   const p = document.createElement("p");
//   p.textContent = i + " lorem ipsum";
//   sect.appendChild(p);
// });

//зімнюємо розміщення параграфа
const linkPara = document.querySelector("p");
sect.appendChild(linkPara.cloneNode(true));

//видалення елемента
linkPara.remove();

para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";

para.classList.add("formated");

//створюємо годинник

const clock = document.querySelector(".clock");
const showClock = () => (clock.innerText = new Date().toLocaleTimeString());
setInterval(showClock, 1000);

$(click - me).click(() => $("img").toggle(3000));

//будуємо калькулятор
const display = document.querySelector(".display");

document
  .querySelectorAll(".digits button") //знаходимо усі кнопки з цифрами
  .forEach((button) => button.addEventListener("click", digitPressed)); //на всі кнопки присвоюємо єдину функцію digitPressed

function digitPressed(ev) {
  display.value += ev.target.innerText;
}
