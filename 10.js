function reverseWords(sentence) {
  var array = sentence.split(' ');
  var i;
  for (i =0 ; i < array.length; i++) {
    if (array[i].length >= 5) {
      array[i] = array[i].split('').reverse().join('');
    }
  }
  console.log(array.join(' '));
}
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

