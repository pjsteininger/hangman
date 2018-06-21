$(document).ready(function() {
    var hangman = {
        wordList: ["hello world"],
        currentWord: "",
        alphabet: "abcdefghijklmnopqrstuvwxyz",
        guessedLetters: "",
        initializeGame: function () {
            this.currentWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
            console.log(this.currentWord);
            this.guessedLetters = "";
            for(var i = 0; i < this.currentWord.length; i++) {
                if(this.currentWord[i] === " ") {
                    $("#the-word").append("  ");
                } else {
                    $("#the-word").append("<span id=\"letter"+i+"\">-</span>");
                }
            }
        },
        letterGuess: function (guess) {
            console.log(guess.key);
            //this.currentWord.search(guess.key);
            console.log(this.currentWord.search(guess.key));
            var j = this.currentWord.search(guess.key);
            console.log($("#letter"+j));
        },
        endGame: function () {

        }

    };

    hangman.initializeGame();
    $(document).on("keyup", function(e) {
        hangman.letterGuess(e);
    });
    $("#guessed-letters").click(hangman.letterGuess);
    $("")
});
