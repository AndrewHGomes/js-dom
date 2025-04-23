const paragrafoId = document.getElementById("paragrafo-id");
console.log(paragrafoId);

const paragrafoTag = document.getElementsByTagName("p");
console.log(paragrafoTag);

const paragrafoClass = document.getElementsByClassName("paragrafo-class");
console.log(paragrafoClass);

const paragrafoName = document.getElementsByName("paragrafo-name");
console.log(paragrafoName);

const classParagrafo = document.querySelectorAll(".class-paragrafo");
console.log(classParagrafo);

const idParagrafo = document.querySelector("#id-paragrafo");
console.log(idParagrafo);

//===========================================================================

function acao() {
  paragrafoId.innerText = "getElementById";
  paragrafoTag[1].innerText = "getElementsTagName";
  paragrafoClass[0].innerText = "getElementsByClassName";
  paragrafoName[0].innerText = "getElementsByName";
  classParagrafo[0].innerText = "querySelectorAll";
  idParagrafo.innerText = "querySelector";
}
