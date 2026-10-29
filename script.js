console.log("Портфолио загружено");

function sayHello() {
    alert("Привет! Спасибо, что заглянули в моё портфолио.");
}

const greetButton = document.getElementById("greetButton");

greetButton.addEventListener("click", sayHello);
