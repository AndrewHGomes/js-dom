const valor = document.querySelector("#valor");

console.log(valor);

valor.addEventListener("change", (e) => {
  console.log(e);
  console.log(e.target);
  console.log(e.target.value);
  console.log(e.currentTarget.attributes);
  console.log(e.type);
});
