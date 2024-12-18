let fahr = parseFloat(prompt('ingrese sus datos en fahrenheit'))


const conversion =(fahr)=>{
  const scaleAdjustment = 32
  const carryEquivalentToFahr = 5/9
  const cels = ( (fahr - scaleAdjustment) * (carryEquivalentToFahr)) 
  return cels
}
console.log(`La temperatura en grados celsius: ${Math.round(conversion(fahr))}`)
