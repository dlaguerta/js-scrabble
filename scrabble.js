var Scrabble = {
  tileScores: {
  '1': [1, "A", "E", "I","O","U", "L", "N", "R", "S", "T"],
  '2': [2, "D", "G"],
  '3': [3, "B", "C", "M", "P"],
  '4': [4, "F", "H", "V", "W", "Y"],
  '5': [5, "K"],
  '6': [8, "J", "X"],
  '7': [10, "Q", "Z"]
  },
  maxTiles: 7,
  score: function(word) {
      var currentWord = word.toUpperCase();
      var totalScore = 0;
      var wordArray = currentWord.split("");
      for (var i=0; i < wordArray.length; i++ ) {
        for (var a=1; a<8; a++) {
            if (Scrabble.tileScores[a.toString()].includes(wordArray[i])) {
            totalScore += Scrabble.tileScores[a.toString()][0];
            // console.log(this.tileScores[a.toString()]);
            // console.log("HERE's what been added--------" + totalScore);
            }
            else {
            totalScore += 0;
            }
          }
      }
      if (wordArray.length == Scrabble.maxTiles) {
        totalScore += 50;
      }
      return totalScore; //return the final score
  },

  highestScoreFrom: function(arrayOfWords) {
    var bestScore = 0;
    var bestWord = "";
    for(var i=0; i<arrayOfWords.length; i++){
      var currentWord = arrayOfWords[i];
      var currentScore = Scrabble.score(arrayOfWords[i]);
        if (currentScore > bestScore) {
          bestScore = Scrabble.score(arrayOfWords[i]);
          bestWord = arrayOfWords[i];
          console.log(bestScore);
          console.log("Best word is " + bestWord);
        } //
        else if (currentScore == bestScore) {
          //checks if the best word does not have the max tile bonus
          if (bestWord.length != Scrabble.maxTiles) {
          // replaces best word with the current word that has 7 tiles
            if (currentWord == Scrabble.maxTiles) {
              bestWord = currentWord;
              bestScore = Scrabble.score(currentWord);
            }
          // if current word length is shorter, pick it
            else if (bestWord.length > currentWord.length) {
              bestWord = currentWord.length;
              bestScore = Scrabble.score(currentWord);
            }
          }
        }
    } //for loop closing
    return bestWord;
  }

};


// //  ++++++________++++++++ PLAYER OBJECT +++++_________++++++++
var Player = function(name) {
  this.name = name;
  this.plays = [];
  this.totalScoredWords = 0;
};

Player.prototype.play = function(word) {
  if (this.totalScore() > 100) {
    console.log("You've already won!");}
  else {
  this.plays.push(word);
  }
  return this.plays;
}

Player.prototype.totalScore = function() {
  // var totalScoredWords = 0;
  for (var i=0; i< this.plays.length ; i++) {
    this.totalScoredWords += Scrabble.score(this.plays[i]);
  }
  return this.totalScoredWords;
};

Player.prototype.hasWon = function() {
  if (this.totalScoredWords > 100) {
    console.log("winner!");
    return true;
  }
  else {
    console.log("Haven't won yet!");
    return false;
  }
};

Player.prototype.highestScoringWord = function() {
  var bestPlayedWord = Scrabble.highestScoreFrom(this.plays);
  return bestPlayedWord;
};

Player.prototype.highestWordScore = function() {
  var bestPlayedScore = Scrabble.score(this.highestScoringWord());
  return bestPlayedScore;
};
// ++++++++++++++Test for Scrabble +++++++++++++++++
// var testing = new Scrabble();
var tester = Scrabble.score("zoo");
console.log(tester);

// var testTwo = new Scrabble();
var SevenLetters = Scrabble.score("pizzazz");
console.log(SevenLetters);

// var highScore = new Scrabble();
var returnedVal = Scrabble.highestScoreFrom(["cat", "zoo", "do", "pizzazz"]);
console.log(returnedVal);

// var TiedScore = new Scrabble();
var shortWord = Scrabble.highestScoreFrom(["aeiu", "dg"]);
console.log(shortWord);

// var TiedPoints = new Scrabble();
var maxTiledWord = Scrabble.highestScoreFrom(["AAAAAAD", "ZZZZZJ"]);
console.log(maxTiledWord);


// // ++++++++++++++Test for Player +++++++++++++++++

//test for name property
var newPlayer = new Player("dianne");
console.log(newPlayer.name);
//test for adding words to plays
var playsArray = newPlayer.play("pizzazz");
console.log(playsArray);
var playsArray = newPlayer.play("pizza");
console.log(playsArray);
//should not be added
var playsArray = newPlayer.play("octopus");
console.log(playsArray);

var playedScore = newPlayer.totalScore();
console.log(playedScore);

var winner = newPlayer.hasWon();
console.log(winner);

var bestWord = newPlayer.highestScoringWord();
console.log(bestWord);

var bestWordScore = newPlayer.highestWordScore();
console.log(bestWordScore);

//player who hasn't won
// var secondPlayer = new Player("Yasmine");
// console.log(secondPlayer.name);
// //test for adding words to plays
// var playsArray = secondPlayer.play("tooth");
// console.log(playsArray);
//
// var playedScore = secondPlayer.totalScore();
// console.log(playedScore);
//
// var loser = secondPlayer.hasWon();
// console.log(loser);
//
// var bestWord2 = secondPlayer.highestScoringWord();
// console.log(bestWord2);

// END OF FILEEEEEEEEEEEEEEEEEEEEEEEEE
// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };

module.exports = Scrabble;


// to make something uppercase: .toUpperCase()
