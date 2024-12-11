const valor = document.querySelector("#valor");

console.log(valor);

valor.addEventListener("click", (e) => console.log(e.target.value));

valor.onclick = (e) => console.log(e);
