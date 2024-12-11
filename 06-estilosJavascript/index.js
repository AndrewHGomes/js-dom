// style
const divs = document.querySelectorAll("div");

divs[0].style.border = "1px solid #ff5f48";
divs[0].style.padding = "1em";

const itens1 = [...divs[0].firstElementChild.children];

itens1.forEach((e) => (e.style.color = "#30f"));

//-------------------------------------------------------------------

// style.cssText
divs[1].style.cssText = "border: 1px solid #485fff; padding: 1em";

const itens2 = [...divs[1].firstElementChild.children];

itens2.forEach((e) => {
  e.style.cssText = "color: #f03";
});

//-------------------------------------------------------------------

// getComputedStyle
divs.forEach((e) => console.log(getComputedStyle(e).border));
