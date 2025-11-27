const d = document;

const generateButton = d.getElementById('btn')
const colorText = d.getElementById('color')

const generateRandomColor = ()=>{
    let hexDigits = '01235456789ABCDEF';
    let generatedColor = '#';
    for (let i = 0; i < 6; i++) {
      generatedColor += hexDigits[Math.floor(Math.random() * 16)];
      // let indice =  Math.floor(Math.random()*16)
      // colorGuardado += dígitos[indice];
    }
    return generatedColor;
}
generateButton.addEventListener('click',function () {
  let colorString = generateRandomColor();
  // text.style.color = colorString;
  colorText.textContent = colorString;
  d.body.style.backgroundColor = colorString;
  
});