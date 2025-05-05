// Escribe aquí tus datos correctos
const NOMBRE_CORRECTO = "frank";
const ALIAS_CORRECTO = "soy frank"
const PIN_CORRECTO = 12;
const PASSWORD_CORRECTO = "1234";

/* Estos son los datos del usuario
(modifícalos para comprobar que todo funciona correctamente)*/

const NOMBRE = "soy frank";
const PIN = 1;
const PASSWORD = "1234";

/*
Si el usuario ha escrito el mismo valor  en NOMBRE, PIN y PASSWORD (pero no ha dejado ninguno vacío): es "Bien"
o bien 
Si el NOMBRE es igual al NOMBRE_CORRECTO o al ALIAS_CORRECTO
y además de eso
el PIN es igual al PIN_CORRECTO
o bien
el PASSWORD es igual al PASSWORD_CORRECTO (cualquiera de las 2)
Entonces se muestra: "Bien" (color "green")
En el resto de casos: "Mal" (color "red")
*/

/*
  (condiciones)
  ? ______
  : ______
*/

//versión mejorada 
const nombreValido = NOMBRE === NOMBRE_CORRECTO || NOMBRE === ALIAS_CORRECTO;
const credencialValida = PIN === PIN_CORRECTO || PASSWORD === PASSWORD_CORRECTO;
const tripleCoincidencia = NOMBRE == PIN && NOMBRE == PASSWORD && NOMBRE != '';

(tripleCoincidencia || (nombreValido && credencialValida))// se puede usar if() si lo prefieres
  ? dibujar(`<div class="bien">Bien</div>`)
  : dibujar(`<div class="mal">Mal</div>`);


// version de la clase 
((NOMBRE == PIN && NOMBRE == PASSWORD && NOMBRE != '') ||
  (NOMBRE === NOMBRE_CORRECTO || NOMBRE === ALIAS_CORRECTO) &&
  (PIN === PIN_CORRECTO || PASSWORD === PASSWORD_CORRECTO))
  ? dibujar(`<div class="bien">Bien</div>`)
  : dibujar(`<div class="mal">Mal</div>`)


function dibujar(valor) {
  document.querySelector(".resultado").innerHTML = valor;
}