function findSafestPath(dream) {
    for(let i = 1; i < dream[0].length; i++) {
        dream[0][i] += dream[0][i - 1];

    }
    for(let i = 1; i < dream.length; i++) {
        dream[i][0] += dream[i - 1][0];
    }
    for(let i = 1; i < dream.length; i++) {
        for(let j = 1; j < dream[i].length; j++) {
            dream[i][j] += Math.min(dream[i - 1][j], dream[i][j - 1]);
        }
    }
    return dream[dream.length - 1][dream[0].length - 1];
    
  }

const dream = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]
  
  const bestPath = findSafestPath(dream) // Devuelve 7
  console.log(bestPath)
  // El mejor camino es:
  // [0, 0] -> 1
  // [0, 1] -> 3
  // [0, 2] -> 1
  // [1, 2] -> 1
  // [2, 2] -> 1
  
  // 1 -> 3 -> 1 -> 1 -> 1 = 7