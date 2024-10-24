const d = document;
const inputRojo = d.getElementById("rojo");
const inputVerde = d.getElementById("verde");
const inputAzul = d.getElementById("azul");

const textoRojo = d.getElementById("texto-rojo");
const textoVerde = d.getElementById("texto-verde");
const textoAzul = d.getElementById("texto-azul");

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

const actualizar = (rojo, verde, azul) => {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  d.body.style.backgroundColor = colorRGB;
};

inputRojo.addEventListener("change", (e) => {
  rojo = e.target.value;
  textoRojo.innerText = rojo;
  actualizar(rojo, verde, azul);
});

inputVerde.addEventListener("change", (e) => {
  verde = e.target.value;
  textoRojo.innerText = verde;
  actualizar(rojo, verde, azul);
});

inputAzul.addEventListener("change", (e) => {
  azul = e.target.value;
  textoRojo.innerText = azul;
  actualizar(rojo, verde, azul);
});
