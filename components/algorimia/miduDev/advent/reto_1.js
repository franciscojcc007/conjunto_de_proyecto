function findFirstRepeated(gifts) {
  const repetido = new Set();
  for (const gift of gifts) {
    if (repetido.has(gift)) {
      return gift;
    }
    repetido.add(gift);
  }
  return -1;
}

const giftIds = [2, 1, 3, 5, 3, 2, 5,];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId); 


const giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2); 


const giftIds3 = [5, 1, 5, 1];
const firstRepeatedId3 = findFirstRepeated(giftIds3);
console.log(firstRepeatedId3);
