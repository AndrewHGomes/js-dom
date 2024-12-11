let userName = document.forms[0].usuario;

let userPassword = document.forms[0].senha;

let tarefa = document.forms[0].tarefa;

let dias = document.forms[0].dias;

const btn = document.forms[0].enviar;

// tarefa.addEventListener("change", (e) => console.log(e.target.value));

// dias.addEventListener("change", (e) => console.log(e.target.value));

// tarefa.addEventListener("input", (e) => console.log(e.target.value));

// dias.addEventListener("input", (e) => console.log(e.target.value));

btn.onclick = (e) => {
  e.preventDefault();

  console.log(userName.value);
  console.log(userPassword.value);
  console.log(tarefa.value);
  console.log(dias.value);

  userName.value = "";
  userPassword.value = "";
  tarefa.value = "";
  dias.value = "";
};

//------------------------------------------------------------------------

tarefa.addEventListener("cut", () => console.log("Recortar"));

tarefa.addEventListener("paste", () => console.log("Colar"));

tarefa.addEventListener("copy", () => console.log("Copiar"));
