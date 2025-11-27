const d = document;
const w = window;
const stopwatchDisplay = d.getElementById("cronometro");
const toggleButton = d.getElementById("btn-inicio-pausa");
const resetButton = d.getElementById("btn-reiniciar");

let [hours, minutes, seconds] = [0, 0, 0];
let timerInterval;
let status = "pausado";

function updateTime() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
    if (minutes / 60 === 1) {
      hours++;
      minutes = 0;
    }
  }
  const formattedSeconds = formatUnit(seconds);
  const formattedMinutes = formatUnit(minutes);
  const formattedHours = formatUnit(hours);

  stopwatchDisplay.innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function formatUnit(timeUnit) {
  return timeUnit < 10 ? "0" + timeUnit : timeUnit;
}

toggleButton.addEventListener('click', function(){
  if (status === "pausado") {
    timerInterval = w.setInterval(updateTime, 1000);
    toggleButton.innerHTML = '<img src="./assets/img/icon-park--pause.png" alt="icono del boton de pausa"></img>';
    toggleButton.classList.remove('iniciar')
    toggleButton.classList.add('pausa')
    status = "en curso";
  }else{
    w.clearInterval(timerInterval);
    toggleButton.innerHTML = '<img src="./assets/img/solar--play-bold.png" alt="icono del boton de play"></img>';
    toggleButton.classList.remove('pausa')
    toggleButton.classList.add('iniciar')
    status = "pausado";
  }
})

resetButton.addEventListener('click', function(){
  w.clearInterval(timerInterval);
  [hours, minutes, seconds] = [0, 0, 0];
  stopwatchDisplay.innerText = '00:00:00';
  toggleButton.innerHTML = '<img src="./assets/img/solar--play-bold.png" alt="icono del boton de play"></img>';
  toggleButton.classList.remove('pausa')
  toggleButton.classList.add('iniciar')
  status = 'pausado';
})