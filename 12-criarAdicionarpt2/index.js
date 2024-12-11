const content = document.querySelectorAll(".content");

content.forEach((e) => {
  e.style.cssText = "border: 1px solid; padding: 1em;";
});

//---------------------------------------------------------------------

// insertAdjacentHTML
content[0].insertAdjacentHTML("beforebegin", "<p>1º: beforebegin</p>");
content[0].insertAdjacentHTML("afterbegin", "<p>2º: afterbegin</p>");
content[0].insertAdjacentHTML("beforeend", "<p>3º: beforeend</p>");
content[0].insertAdjacentHTML("afterend", "<p>4º: afterend</p>");

//---------------------------------------------------------------------

let elemento = "";
const elementos = [];

for (let i = 0; i <= 3; i++) {
  elemento = document.createElement("p");
  elemento.innerText = `${i + 1}º Tô aqui`;
  elementos.push(elemento);
}

//insertAdjacentElement
content[1].insertAdjacentElement("beforebegin", elementos[0]);
content[1].insertAdjacentElement("afterbegin", elementos[1]);
content[1].insertAdjacentElement("beforeend", elementos[2]);
content[1].insertAdjacentElement("afterend", elementos[3]);

//---------------------------------------------------------------------

//insertAdjacentText
content[2].insertAdjacentText("beforebegin", "1º: beforebegin");
content[2].insertAdjacentText("afterbegin", "2º: afterbegin");
content[2].insertAdjacentText("beforeend", "3º: beforeend");
content[2].insertAdjacentText("afterend", "4º: afterend");
