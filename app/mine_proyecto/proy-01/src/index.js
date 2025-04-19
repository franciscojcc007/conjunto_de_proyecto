const d = document
const bntElemento = d.querySelector('button');
const spanElemento = d.querySelector('span');

bntElemento.addEventListener('click', ()=>{
    const yourName = prompt('¿Cuál es tu nombre?')
    spanElemento.textContent = yourName
})