const content = document.querySelector("#content");
console.log(content);

const container = document.querySelector(".container");
console.log(container);

let paragrafo = "";

const paragrafos = [];

for (let i = 0; i < 10; i++) {
  paragrafo = document.createElement("p");
  paragrafos.push(paragrafo);
}

const dimensoesDocumento = document.documentElement;

paragrafos[0].textContent = `offsetLeft: ${container.offsetLeft}`;
paragrafos[1].textContent = `offsetTop: ${container.offsetTop}`;
paragrafos[2].textContent = `offsetHeight: ${container.offsetHeight}`;
paragrafos[3].textContent = `offsetWidth: ${container.offsetWidth}`;
paragrafos[4].textContent = `scrollTop: ${container.scrollTop}`;
paragrafos[5].textContent = `scrollHeight: ${container.scrollHeight}`;
paragrafos[6].textContent = `largura documento: ${dimensoesDocumento.clientWidth}`;
paragrafos[7].textContent = `altura visível documento: ${dimensoesDocumento.clientHeight}`;
paragrafos[8].textContent = `altura completa documento: ${dimensoesDocumento.scrollHeight}`;
paragrafos[9].textContent = `scroll horizontal: ${dimensoesDocumento.scrollWidth}`;

content.after(
  paragrafos[0],
  paragrafos[1],
  paragrafos[2],
  paragrafos[3],
  paragrafos[4],
  paragrafos[5],
  paragrafos[6],
  paragrafos[7],
  paragrafos[8],
  paragrafos[9]
);
