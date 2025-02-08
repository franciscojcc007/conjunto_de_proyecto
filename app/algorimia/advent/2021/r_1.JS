function contarOvejas(ovejas) {
  return ovejas.filter(oveja => 
    oveja.color === 'rojo' && 
    oveja.name.toLowerCase().includes('n') &&
    oveja.name.toLowerCase().includes('a') 
    //&& oveja.name.length < 8
  )
}

const ovejas = [
  { name: 'Noa', color: 'azul' },//false
  { name: 'Euge', color: 'rojo' },//false
  { name: 'Navidad', color: 'rojo' },//true
  { name: 'Ki Na Ma', color: 'rojo'},//true
  { name: 'AAAAAaaaaa', color: 'rojo' },//false
  { name: 'Nnnnnnnn', color: 'rojo'}//false
]

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)