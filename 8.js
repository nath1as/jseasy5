function sequence(num, step) {
  var i;
  var newArray = [];
  for (i = 1; i <= num; i++) {
    newArray.push(i * step);
  }
  console.log(newArray);
}
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);
