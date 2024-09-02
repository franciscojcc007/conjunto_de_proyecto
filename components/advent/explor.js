function canConstruct(ransomNote, magazine) {
    // Crear un mapa para contar las letras en magazine
    const letterCount = {};

    // Contar cada letra en magazine
    for (let char of magazine) {
        letterCount[char] = (letterCount[char] || 0) + 1;
    }

    // Revisar cada letra en ransomNote
    for (let char of ransomNote) {
        if (!letterCount[char]) {
            return false; // No hay suficiente letra o no existe en magazine
        }
        letterCount[char]--; // Usar una letra
    }

    return true; // Se puede construir la nota de rescate
}

console.log(canConstruct("abc","abdef"))