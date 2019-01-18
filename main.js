
//**Framed Reflection **//
// source: https://www.codewars.com/kata/framed-reflection/train/javascript

// given a message in text
// flip it n reverse it (a la missy elliott)
// return the reversed phrase with a border/frame around it

function frame(text, symbol) {
  let phrase = text;
  let frame = symbol;
  let len = text.length;

  let coconut = phrase.split(" ").reverse().join(" ");
  console.log(coconut);

  var count = 0;

  do {
    count ++ ;
    console.log(frame);
  }while (count < len);

  console.log(len);

  //console.log(frame);

  console.log(frame + ' ' + phrase + " " +frame)
}

frame("i like dogs", "~");
