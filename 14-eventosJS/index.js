const mouseEnter = document.querySelector("#mouseEnter");

mouseEnter.addEventListener(
  "mouseenter",
  (e) => (e.target.value = "Mouse Entrou")
);

const onChange = document.querySelector("#onChange");

onChange.addEventListener("change", (e) => (e.target.value = "Mudou Valor"));

const onFocus = document.querySelector("#onFocus");

onFocus.addEventListener("focus", (e) => (e.target.value = "Focou Aqui"));

const onBlur = document.querySelector("#onBlur");

onBlur.addEventListener("blur", (e) => (e.target.value = "Saiu do Foco"));

const onClick = document.querySelector("#onClick");

onClick.addEventListener(
  "click",
  (e) => (e.target.textContent = "Clicou Aqui")
);

//--------------------------------------------------------------------------

const container = document.querySelector("#container");

const botoes = document.querySelectorAll("button");

botoes[1].addEventListener("click", () => {
  botoes[2].addEventListener("click", executar1);

  botoes[2].addEventListener("click", executar2);
});

function executar1() {
  container.firstElementChild.textContent = new Date().getSeconds();
}

function executar2() {
  container.firstElementChild.nextElementSibling.textContent =
    new Date().getSeconds();
}

botoes[3].addEventListener("click", () => {
  botoes[2].removeEventListener("click", executar2);
});

//--------------------------------------------------------------------------

const btn = document.createElement("button");
const div = document.createElement("div");
div.id = "divLastBtn";

btn.textContent = "Click";
div.appendChild(btn);

const mainContent = document.querySelector("main");

mainContent.appendChild(div);

function imprimirConsole() {
  console.log("Clicou na div!!!");
}

div.addEventListener("click", imprimirConsole);
btn.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Clicou no botão");
});

botoes[0].addEventListener("click", () => {
  console.log("Removeu o evento da última div!!!");

  div.removeEventListener("click", imprimirConsole);
});

//--------------------------------------------------------------------------

const paragrafo = document.querySelector(".paragrafo");

paragrafo.addEventListener("mousemove", (e) => {
  paragrafo.textContent = "Moveu o mouse aqui";
  console.log(e.x);
  console.log(e.y);
});
