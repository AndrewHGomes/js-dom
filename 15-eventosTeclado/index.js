const keyDown = document.querySelector("#keyDown");

keyDown.onkeydown = (e) => console.log(e.target.value);

const keyUp = document.querySelector("#keyUp");

keyUp.onkeyup = (e) => console.log(e.target.value);

const keyPress = document.querySelector("#keyPress");

keyPress.onkeypress = (e) => console.log(e.target.value);
