function findTheKiller(whisper, suspects) {
  const symbols = whisper.endsWith('$');
  const baseWhisper = symbols ? whisper.slice(0, -1) : whisper;

  const birgillaWhisper = baseWhisper.replaceAll('~', '.');
  
  const basePattern = `^${birgillaWhisper.replaceAll('~', '.')}`
  const endOfPattern = symbols ? '$': '.*$'
  const completePattern = `${basePattern}${endOfPattern}`
  const regex = new RegExp(completePattern, 'i');

  const matchingSuspects = suspects.filter(suspect => regex.test(suspect));

  return matchingSuspects.join(',');

}

// function findTheKiller(whisper, suspects) {
//   const symbols = whisper.endsWith('$');
//   const baseWhisper = symbols ? whisper.slice(0, -1) : whisper;
//   const pattern = `^${baseWhisper.replaceAll('~', '.')}${symbols ? '$' : '.*$'}`;
//   const regex = new RegExp(pattern, 'i');

//   return suspects.filter(suspect => regex.test(suspect)).join(',');
// }


const whisper = 'd~~~~~a';
const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'];

findTheKiller(whisper, suspects); // -> 'Dracula'

const whisper2 = '~r~dd~';
const suspects2 = ['Freddy', 'Freddier', 'Fredderic']

findTheKiller(whisper2, suspects2); // -> 'Freddy,Freddier,Fredderic'

const whisper3 = '~r~dd$';
const suspects3 = ['Freddy', 'Freddier', 'Fredderic']

findTheKiller(whisper3, suspects3); // -> ''

const whisper4 = 'mi~~def';
const suspects4 = ['Midudev', 'Midu', 'Madeval']

findTheKiller(whisper4, suspects4); // -> ''

console.log(findTheKiller(whisper, suspects));
console.log(findTheKiller(whisper2, suspects2));
console.log(findTheKiller(whisper3, suspects3));
console.log(findTheKiller(whisper4, suspects4));