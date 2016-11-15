var Scrabble = function() {
  this.TILE_SCORES = {
  1: [1, "A", "E", "I","O","U", "L", "N", "R", "S", "T"],
  2: [2, "D", "G"],
  3: [3, "B", "C", "M", "P"],
  4: [4, "F", "H", "V", "W", "Y"],
  5: [5, "K"],
  8: [8, "J", "X"],
  10: [10, "Q", "Z"]
  };
};


// RUBY CODE:
// this.TILE_SCORES[1]
// score = 0
// word_array = word.upcase.split(//)
// word_array.each do |letter|
//   score += Scrabble::Scoring::TILES[letter]
// end
// if word_array.length !=7
//   return score
// else
//
//   return score += SEVEN_LETTER_BONUS
// end
Scrabble.prototype.score = function(word) {
    var currentWord = word.toUpperCase();
    var totalScore = 0;
    var wordArray = currentWord.split("");
    for (var i=0; i < wordArray.length; i++ ) {
      for (var a=1; a<this.TILE_SCORES.length; a++) {
          if (this.TILE_SCORES[a.toString()].includes(wordArray[i])) {
          totalScore += this.TILE_SCORES[a.toString()][0];
          // console.log(this.TILE_SCORES[a.toString()]);
          console.log("HERE's what been added--------" + totalScore);
          }
          else {
          totalScore += 0;
          }
        }
    };
    return totalScore; //return the final score
};





// ++++++++++++++TESTTTTTT +++++++++++++++++
var testing = new Scrabble();
 tester = testing.score("cat");
 console.log(tester);



// YOUR CODE ABOVE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

module.exports = Scrabble;


// to make something uppercase: .toUpperCase()
