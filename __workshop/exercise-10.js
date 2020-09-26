function exercise10() {
  // Exercise 10
  //
  // Write a loop that makes seven calls to console.log to
  // output the following triangle:
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######
  //
  // Write code between the lines (below)
// const hash = "#";
// for (line = 0; line < 8; line++) {
//   hash += "#";
//   console.log(hash);
// }
var hash = "#";

for(counter = 1; counter < 8; counter ++){
  console.log(hash);
  hash += "#"
}

  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-10

module.exports = exercise10;
