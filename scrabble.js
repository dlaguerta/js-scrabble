var Scrabble = function() {
  this.TILE_SCORES = {
  1: ["A", "E", "I","O","U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"]
  };
};

Scrabble.prototype.score = function(word) {
  
};
// YOUR CODE ABOVE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

module.exports = Scrabble;


// to make something uppercase: .toUpperCase()
