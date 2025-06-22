


// Por ejemplo, para las palabras "hello", "how", "are", "you", la salida debería ser "$hello$how$are$you$".
class Add {
  constructor(...words) {
      this.words = words;
  }
  //your code goes here
  print(){
   const output = this.words.length > 0
      ? `$${this.words.join('$')}$`
      : '$';
    console.log(output);
  }
}

var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add("this", "is", "awesome");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
x.print();
y.print();
z.print();