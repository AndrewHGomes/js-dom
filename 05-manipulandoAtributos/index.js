// hasAttribute
const paragrafoHasAttribute = document.querySelector("#id-hasAttribute");
console.log(paragrafoHasAttribute);
console.log("Possui id?", paragrafoHasAttribute.hasAttribute("id"));
console.log("Possui class?", paragrafoHasAttribute.hasAttribute("class"));

//-----------------------------------------------------------------------

// getAttribute
const paragrafoGetAttribute = document.querySelector(".class-getAttribute");
console.log(paragrafoGetAttribute);
console.log("Possui class?", paragrafoGetAttribute.hasAttribute("class"));
console.log("Qual é?", paragrafoGetAttribute.getAttribute("class"));

//-----------------------------------------------------------------------

// setAttribute
const paragrafoSetAttribute = document.querySelector("#id-setAttribute");
console.log("Possui id?", paragrafoSetAttribute.hasAttribute("id"));
console.log("Possui class?", paragrafoSetAttribute.hasAttribute("class"));
paragrafoSetAttribute.setAttribute("class", "class-setAttribute");
console.log(paragrafoSetAttribute);

//-----------------------------------------------------------------------

// removeAttribute
const paragrafoRemoveAttribute = document.querySelector(
  ".class-removeAttribute"
);
console.log(paragrafoRemoveAttribute);
console.log("Possui id?", paragrafoRemoveAttribute.hasAttribute("id"));
console.log("Possui class?", paragrafoRemoveAttribute.hasAttribute("class"));
paragrafoRemoveAttribute.removeAttribute("id");

//-----------------------------------------------------------------------

// attributes
const paragrafos = document.querySelectorAll("p");

paragrafos.forEach((e) => console.log(e.attributes));
