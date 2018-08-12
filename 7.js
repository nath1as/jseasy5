function swapName(name) {
  var swap = name.split(' ').reverse().join(', ');
  console.log(swap);

}
swapName('Joe Roberts');    // "Roberts, Joe"

