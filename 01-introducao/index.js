console.log(window);

console.log(document);

console.log(document.documentElement.childNodes);
console.log(document.documentElement.children);

console.log(document.head.childNodes);
console.log(document.head.children);

console.log(document.body.childNodes);
console.log(document.body.children);

console.log(
  `
    Largura interior: ${window.innerWidth}
    Altura interior: ${window.innerHeight}
    URL: ${window.location}
    `
);

document.body.childNodes.forEach((e) => console.log(e));
