const container = document.querySelectorAll(".container");

container.forEach(
  (e) =>
    (e.style.cssText = "border: 1px solid; padding: 1em; margin-bottom: .5em")
);

const clone1 = container[0].cloneNode(true);
clone1.innerHTML += "<p>cloneNode(true) - clona elemento e conteúdo</p>";

const clone2 = container[0].cloneNode(false);
clone2.innerHTML = "<p>cloneNode(false) - clona somente o elemento</p>";

document.querySelectorAll("section")[1].appendChild(clone1);
document.querySelectorAll("section")[1].appendChild(clone2);

clone1.remove();

document.querySelectorAll("p")[1].remove();
