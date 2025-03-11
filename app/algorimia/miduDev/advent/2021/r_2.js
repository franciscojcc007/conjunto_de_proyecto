function listGifts(letter) {
  let arr = letter.split(' ')
  // arr = arr.filter((el) =>  )
  console.log(arr)
}

const carta = 'bici coche balón _playstation bici coche peluche'

const regalos = listGifts(carta)

console.log(regalos)


/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/