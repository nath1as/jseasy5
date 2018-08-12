function doubleConsonants(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var i;
  var newArray = [];

  for (i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i].toLowerCase())) {
      newArray.push(string[i], string[i]);
    } else {
      newArray.push(string[i]);
    }
  }
  console.log(newArray.join(' '));

}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

