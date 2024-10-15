let fahr = parseInt(prompt("ingrese sus datos en fahrenheit"))

const conversion =(fahr)=>{
    let cels = ( (fahr -32) * (5 / 9)) ;
    return cels;
}
console.log(`La temperatura en grados celsius: ${Math.round(conversion(fahr))}`)
