let fahr = parseFloat(prompt("ingrese sus datos en fahrenheit"))


const conversion =(fahr)=>{
  const ajustarEscala = 32
  const equivalente = 5/9;
  let cels = ( (fahr - ajustarEscala) * (equivalente)) ;
  return cels;
}
console.log(`La temperatura en grados celsius: ${Math.round(conversion(fahr))}`)
