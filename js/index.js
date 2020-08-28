//знаходимо лінк та змінюємо його

const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

//створюємо параграф
const sect = document.querySelector("section");
const para = document.createElement("p");
sect.appendChild(para);
para.textContent = "We hope you enjoyed the ride.";

//створюємо 10 параграфів
for (let i = 1; i <= 1000; i++) {
  const p = document.createElement("p");
  p.textContent = i + " lorem ipsum";
  sect.appendChild(p);
}
