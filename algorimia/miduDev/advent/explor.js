function canConstruct(ransomNote, magazine) {
  const letterCount = {};

  for (let char of magazine) {
    letterCount[char] = (letterCount[char] || 0) + 1;
  }

  for (let char of ransomNote) {
    if (!letterCount[char]) {
      return false; 
    }
    letterCount[char]--; 
  }

  return true;
}

console.log(canConstruct("abc", "abc"));
