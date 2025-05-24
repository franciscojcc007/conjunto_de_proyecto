// Valor a modificar
let nota=8;
const d = document;

/*
A mostrar en el <div class="resultado">
Si es de 5 a 10: "¡¡Has APROBADO!!"(color "green")
o sinó: "Has suspendido" (color "red")

A mostrar en el <div class="nota">
De 9 en adelante:       "Excelente"
De 7 a menos de 9:      "Notable"
De 5 hasta menos de 7:  "Aprobado"
Menos de 5:             "Suspendido"
Menos de 0 o más de 10: "No te flipes"
*/

/* Usar sólo TERNARIOS
(...) ? :
*/

(nota < 0 || nota > 10)
?dibujar('no te flipes')
:(nota < 5)
    ?dibujar('suspendido')
    :(nota < 7)
      ?dibujar('Aprobado')
      :(nota < 9)
        ?dibujar('Notable')
        :dibujar('Excelente')

function dibujar(valor){
  
  (nota >= 5 && nota <= 10)
  ? d.querySelector('.resultado').innerHTML = `<div class="aprobado">¡¡Has APROBADO con ${nota}!!</div>`
  : d.querySelector('.resultado').innerHTML = `<div class="suspendido">Has suspendido con ${nota}</div>`
  
  d.querySelector('.nota').innerHTML = valor;
}