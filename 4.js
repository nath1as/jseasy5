function centerOf(string) {
  if (string.length % 2 === 0) {
    console.log(string[(string.length / 2) - 1] + string[string.length / 2]);
  } else {
    console.log(string[(string.length - 1) / 2]);
  }
}
centerOf('I Love Ruby');      // "e"
centerOf('Launch School');    // " "
centerOf('Launch');           // "un"
centerOf('Launchschool');     // "hs"
centerOf('x');                // "x"

