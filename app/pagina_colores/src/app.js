const d = document;

const bnt = d.getElementById('btn')
const text = d.getElementById('color')

const colorAleatorio = ()=>{
    let dígitos = '01235456789ABCDEF';
    let colorGuardado = '#';
    for (let i = 0; i < 6; i++) {
      colorGuardado += dígitos[Math.floor(Math.random() * 16)];
      // let indice =  Math.floor(Math.random()*16)
      // colorGuardado += dígitos[indice];
    }
    return colorGuardado;
}
bnt.addEventListener('click',function () {
  let colorString = colorAleatorio();
  // text.style.color = colorString;
  text.textContent = colorString;
  d.body.style.backgroundColor = colorString;
  
});