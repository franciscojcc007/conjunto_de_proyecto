const d = document;
const w = window;
const cronometro = d.getElementById("cronometro");
const btnInicioPausa = d.getElementById("btn-inicio-pausa");
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

  cronometro.innerText = `${horasFormato}:${minutosFormato}:${segundosFormato}`;
}

function asignarFormato(unidadTiempo) {
  return unidadTiempo < 10 ? "0" + unidadTiempo : unidadTiempo;
}

btnInicioPausa.addEventListener('click', function(){
  if (estado === "pausado") {
    intervaloDeTiempo = w.setInterval(actualizar, 1000);
    btnInicioPausa.innerHTML = '<img src="./assets/img/icon-park--pause.png" alt="icono del boton de pausa"></img>';
    btnInicioPausa.classList.remove('iniciar')
    btnInicioPausa.classList.add('pausa')
    estado = "en curso";
  }else{
    w.clearInterval(intervaloDeTiempo);
    btnInicioPausa.innerHTML = '<img src="./assets/img/solar--play-bold.png" alt="icono del boton de play"></img>';
    btnInicioPausa.classList.remove('pausa')
    btnInicioPausa.classList.add('iniciar')
    estado = "pausado";
  }
})

btnReiniciar.addEventListener('click', function(){
  w.clearInterval(intervaloDeTiempo);
  [horas, minutos, segundos] = [0, 0, 0];
  cronometro.innerText = '00:00:00';
  btnInicioPausa.innerHTML = '<img src="./assets/img/solar--play-bold.png" alt="icono del boton de play"></img>';
  btnInicioPausa.classList.remove('pausa')
  btnInicioPausa.classList.add('iniciar')
  estado = 'pausado'
});