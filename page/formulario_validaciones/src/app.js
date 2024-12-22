import { valida } from "./js/validaciones.js";
import {} from './js/validar_productos.js';

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});
