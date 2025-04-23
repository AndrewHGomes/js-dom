const mainContent = document.querySelector("#content");
mainContent.style.border = "2px solid";
mainContent.style.padding = "1em";

const paragrafos = [];
let meuParagrafo;

for (let i = 0; i <= 6; i++) {
  meuParagrafo = document.createElement("p");
  meuParagrafo.textContent = "Sou Um Elemento";
  paragrafos.push(meuParagrafo);
}

// before
mainContent.before(paragrafos[0]);
// mainContent.before("Sou um texto simples");

// prepend
mainContent.prepend(paragrafos[1]);
// mainContent.prepend("Sou um texto simples");

// append
mainContent.append(paragrafos[2]);
// mainContent.append("Sou um texto simples");

// after
mainContent.after(paragrafos[3]);
// mainContent.after("Sou um texto simples");
