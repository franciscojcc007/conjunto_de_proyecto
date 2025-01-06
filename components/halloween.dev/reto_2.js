function battleHorde (zombies, humans) {
  let z = 0 , h = 0;

  for (let i = 0; i < zombies.length; i++){
    z += Number(zombies[i]);
    h += Number(humans[i]);
  
  }

  if (h === z) return 'x'

  const letter = h > z ? 'h' : 'z';
  return `${Math.abs(z - h)}${letter}`
}

const zombies = '242';
const humans = '334';

const result = battleHorde(zombies, humans);  // -> "2h"
console.log(result);



// primera ronda: zombie 2 vs human 3 -> humano gana (+1)
// segunda ronda: zombie 4 vs human 3+1 -> empate
// tercera ronda: zombie 2 vs human 4 -> humano gana (+2)
// resultado: "2h"