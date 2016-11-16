var Scrabble = function() {
  this.TILE_SCORES = {
  1: [1, "A", "E", "I","O","U", "L", "N", "R", "S", "T"],
  2: [2, "D", "G"],
  3: [3, "B", "C", "M", "P"],
  4: [4, "F", "H", "V", "W", "Y"],
  5: [5, "K"],
  6: [8, "J", "X"],
  7: [10, "Q", "Z"]
  };
  this.MAX_TILES = 7;
};

Scrabble.prototype.score = function(word) {
    var currentWord = word.toUpperCase();
    var totalScore = 0;
    var wordArray = currentWord.split("");
    for (var i=0; i < wordArray.length; i++ ) {
      for (var a=1; a<8; a++) {
          if (this.TILE_SCORES[a.toString()].includes(wordArray[i])) {
          totalScore += this.TILE_SCORES[a.toString()][0];
          // console.log(this.TILE_SCORES[a.toString()]);
          // console.log("HERE's what been added--------" + totalScore);
          }
          else {
          totalScore += 0;
          }
        }
    }

    if (wordArray.length == this.MAX_TILES) {
      totalScore += 50;
    }
    return totalScore; //return the final score
};

// function for returning the highest scoring word
Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  var bestScore = 0;
  var bestWord = "";
  for(var i=0; i<arrayOfWords.length; i++){
    var currentWord = arrayOfWords[i];
    var currentScore = this.score(arrayOfWords[i]);
      if (currentScore > bestScore) {
        bestScore = this.score(arrayOfWords[i]);
        bestWord = arrayOfWords[i];
        console.log(bestScore);
        console.log("Best word is " + bestWord);
      } //
      else if (currentScore == bestScore) {
        //checks if the best word does not have the max tile bonus
        if (bestWord.length != this.MAX_TILES) {
        // replaces best word with the current word that has 7 tiles
          if (currentWord == this.MAX_TILES) {
            bestWord = currentWord;
            bestScore = this.score(currentWord);
          }
        // if current word length is shorter, pick it
          else if (bestWord.length > currentWord.length) {
            bestWord = currentWord.length;
            bestScore = this.score(currentWord);
          }
        }
      }
  } //for loop closing
  return bestWord;
};


// ++++++++++++++TESTTTTTT +++++++++++++++++
var testing = new Scrabble();
var tester = testing.score("zoo");
console.log(tester);

var testTwo = new Scrabble();
var SevenLetters = testing.score("pizzazz");
console.log(SevenLetters);


var highScore = new Scrabble();
var returnedVal = highScore.highestScoreFrom(["cat", "zoo", "do", "pizzazz"]);
console.log(returnedVal);

var TiedScore = new Scrabble();
var shortWord = highScore.highestScoreFrom(["aeiu", "dg"]);
console.log(shortWord);

var TiedPoints = new Scrabble();
var maxTiledWord = highScore.highestScoreFrom(["AAAAAAD", "ZZZZZJ"]);
console.log(maxTiledWord);

// YOUR CODE ABOVE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

module.exports = Scrabble;


// to make something uppercase: .toUpperCase()
