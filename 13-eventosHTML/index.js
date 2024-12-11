const mouseEnter = () =>
  (document.querySelector("#mouseEnter").value = "Mouse Entrou");

const onChange = () =>
  (document.querySelector("#onChange").value = "Mudou Valor");

const onFocus = () => (document.querySelector("#onFocus").value = "Focou Aqui");

const onBlur = () => (document.querySelector("#onBlur").value = "Saiu do Foco");

const onClick = () =>
  (document.querySelector("button").textContent = "Clicou Aqui");
