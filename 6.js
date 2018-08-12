function sequence(num) {
  var i;
  var newArray = [];
  for (i = 1; i <= num; i++) {
    newArray.push(i);
  }
  console.log(newArray);
}
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
