const d = document;
const btnInicio = d.getElementById("btn-inicio-pausa");
const btnReiniciar = d.getElementById("btn-reiniciar");

let [horas, minutos, segundos] = [0, 0, 0];
let intervaloDeTiempo;
let estado = "pausado";

function actualizar() {
  segundos++;
  if (segundos == 60) {
    minutos++;
    segundos = 0;
    if (minutos / 60 === 1) {
      horas++;
      minutos = 0;
    }
  }
  const segundosFormato = asignarFormato(segundos);
  const minutosFormato = asignarFormato(minutos);
  const horasFormato = asignarFormato(horas);
}
function asignarFormato(unidadTiempo) {
  return unidadTiempo < 10 ? "0" + unidadTiempo : unidadTiempo;
}
