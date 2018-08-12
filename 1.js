function repeater(string) {
  var i;
  var newArray = [];

  for (i = 0; i < string.length; i++) {
    newArray.push(string[i], string[i]);
  }
  console.log(newArray.join(' '));
}
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

