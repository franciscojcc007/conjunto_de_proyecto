// function canPyramidHeadReach(room) {
//   const directions = [
//     [0, 1], // derecha
//     [1, 0], // abajo
//     [0, -1], // izquierda
//     [-1, 0], // arriba
//   ];

//   const n = room.length;
//   let start = null;
//   let target = null;

//   // Encontrar la posición inicial de ▲ y T
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (room[i][j] === '▲') start = [i, j];
//       if (room[i][j] === 'T') target = [i, j];
//     }
//   }

//   // Si no se encuentra ▲ o T, devolvemos -1
//   if (!start || !target) return -1;

//   const queue = [[...start, 0]]; // [fila, columna, pasos]
//   const visited = Array.from({ length: n }, () => Array(n).fill(false));
//   visited[start[0]][start[1]] = true;

//   while (queue.length > 0) {
//     const [x, y, steps] = queue.shift();

//     // Si llegamos a la posición de T, devolvemos los pasos
//     if (x === target[0] && y === target[1]) return steps;

//     for (const [dx, dy] of directions) {
//       const nx = x + dx;
//       const ny = y + dy;

//       // Verificar si la celda vecina es válida
//       if (
//         nx >= 0 &&
//         ny >= 0 &&
//         nx < n &&
//         ny < n &&
//         !visited[nx][ny] &&
//         room[nx][ny] !== '#'
//       ) {
//         visited[nx][ny] = true;
//         queue.push([nx, ny, steps + 1]);
//       }
//     }
//   }

//   // Si no se encuentra un camino, devolvemos -1
//   return -1;
// }


// function escapePyramidHead(room) {

//   return -1
// }


const room = [
  ['.', '.', '#', '.', '▲'],
  ['#', '.', '#', '.', '#'],
  ['.', '.', '.', '.', '.'],
  ['#', '#', '#', '.', '#'],
  ['T', '.', '.', '.', '.'],
]

console.log( escapePyramidHead(room)) // -> true 8

const room2 = [
  ['T', '.', '#', '.'],
  ['.', '.', '.', '.'],
  ['▲', '.', '.', '#'],
  ['.', '#', '#', '#'],
]

console.log( escapePyramidHead(room2))  // -> true 2

const room3 = [
  ['#', '#', '#'],
  ['▲', '.', '#'],
  ['.', '#', 'T'],
]
console.log( escapePyramidHead(room3)) // -> false -1


// Tú no puedes moverte, y Pyramid Head se mueve una celda por turno, en cualquiera de las cuatro direcciones cardinales (arriba, abajo, izquierda, derecha), pero siempre elige el camino más corto hacia tu posición. Tu objetivo es determinar si Pyramid Head puede alcanzarte.

// La habitación está representada por una matriz n x n:
// T: tu posición (donde te encuentras atrapado).
// ▲: la posición inicial de Pyramid Head.
// .: espacios vacíos donde Pyramid Head puede moverse.
// #: paredes que Pyramid Head no puede atravesar.
// Escribe una función que determine si Pyramid Head podrá alcanzarte. Si Pyramid Head puede alcanzarte, devuelve el número de pasos con lo que lo puede lograr, si no puede alcanzarte entonces devuelve -1.


// Identificar las posiciones iniciales:

// Encuentra las coordenadas de T (tu posición) y ▲ (posición inicial de Pyramid Head).
// Usar una cola para BFS:

// Coloca la posición inicial de Pyramid Head (▲) en una cola junto con un contador de pasos (0).
// Marca la posición como visitada para evitar ciclos.
// Explorar vecinos válidos:

// Para cada posición, mueve en las cuatro direcciones cardinales (arriba, abajo, izquierda, derecha).
// Si una celda es válida (. o T), añádela a la cola con un incremento en los pasos.
// Comprobar condiciones de salida:

// Si Pyramid Head alcanza la posición T, devuelve el número de pasos.
// Si la cola se vacía y no hay camino, devuelve -1.