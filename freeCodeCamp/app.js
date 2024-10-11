const d = document;

const contenedor = d.getElementById("contenedor");
console.log(contenedor.innerHTML);

const tilulo = d.getElementById("titulo");
console.log(tilulo.tagName);

const queso = d.getElementById("queso");
console.log(typeof queso);

const toppings = d.getElementsByClassName("topping");
console.log(toppings);
