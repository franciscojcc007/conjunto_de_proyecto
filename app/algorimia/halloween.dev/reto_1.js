function createMagicPotion(potions, goal) {
  const seen = new Map()

  for (const [index, potionValue] of potions.entries()){
    const requiredPotion = goal - potionValue

    if(seen.has(requiredPotion)){
      return [seen.get(requiredPotion), index]
    }
    seen.set(potionValue, index)
  }
  return undefined
}

const potions = [4, 5, 6, 2]
const goal = 8

console.log(createMagicPotion(potions, goal)) // [2, 3] 