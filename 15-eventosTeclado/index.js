const keyDown = document.querySelector("#keyDown");

keyDown.onkeydown = () => console.log(keyDown, "Key Down neste input");

const keyUp = document.querySelector("#keyUp");

keyUp.onkeyup = () => console.log(keyUp, "Key Up neste input");

const keyPress = document.querySelector("#keyPress");

keyPress.onkeypress = () => console.log(keyPress, "Key Press neste input");
