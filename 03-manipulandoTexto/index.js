const primeiro = document.getElementById("primeiro");
console.log(primeiro.textContent);
console.log(primeiro.innerText);
console.log(primeiro.outerText);
console.log(primeiro.innerHTML);
console.log(primeiro.outerHTML);

const segundo = document.querySelectorAll("p.segundo");
console.log(segundo[0].textContent);
console.log(segundo[0].innerText);
console.log(segundo[0].outerText);
console.log(segundo[0].innerHTML);
console.log(segundo[0].outerHTML);

const terceiro = document.querySelector("p[name='terceiro']");
console.log(terceiro.textContent);
console.log(terceiro.innerText);
console.log(terceiro.outerText);
console.log(terceiro.innerHTML);
console.log(terceiro.outerHTML);

primeiro.textContent = "Meu Text Content";

segundo[0].innerText = "Meu Inner Text";

terceiro.innerHTML = "Meu <strong>Inner HTML</strong>";

//----------------------------------------------------

const texto = document.createTextNode("Eu sou Andrew Gomes");
const elemento = document.createElement("h3");

elemento.appendChild(texto);

document.body.insertBefore(elemento, document.body.children[2]);
