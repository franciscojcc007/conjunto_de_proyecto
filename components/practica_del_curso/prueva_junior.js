// [1,2,3,4,56,7,8,10]
// [1,1,1,2,10]
// function que reciba un arry como parámetro que devuelva en menor, mayor y las suma de estos.

function maxMin(number) {
  const resultado = number.reduce((acc, number) => {
      if (acc.max < number) acc.max = number;
      if (acc.min > number) acc.min = number;
      return acc;
    },{ min: Infinity, max: 0 });
    console.log(resultado)
    console.log(resultado.min + resultado.max);
    return resultado.min + resultado.max;
}
maxMin([1, 2, 3, 4, 56, 7, 8, 10]);