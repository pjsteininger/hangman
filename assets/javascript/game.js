$(document).ready(function () {
    var hangman = {
        wordList: ["hello worldl"],
        currentWord: "",
        alphabet: "abcdefghijklmnopqrstuvwxyz",
        guessedLetters: "",
        initializeGame: function () {
            this.currentWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
            console.log(this.currentWord);
            this.guessedLetters = "";
            for (var i = 0; i < this.currentWord.length; i++) {
                if (this.currentWord[i] === " ") {
                    $("#the-word").append("  ");
                } else {
                    $("#the-word").append("<span id=\"letter" + i + "\">-</span>");
                }
            }
        },
        letterGuess: function (guess) {
            if (this.alphabet.search(guess.key) !== -1) {
                if (this.guessedLetters.search(guess.key) !== -1) {
                    console.log("already guessed");
                } else {
                    this.guessedLetters += guess.key;
                    var j = this.currentWord.search(guess.key);
                    if (j === -1) {
                        console.log("miss");
                    } else {
                        while (j < this.currentWord.length) {
                            if (this.currentWord[j] === guess.key) {
                                $("#letter" + j).text(guess.key);
                            }
                            j++;
                        }
                    }
                }
            }
        },
        endGame: function () {

        }

    };

    hangman.initializeGame();
    $(document).on("keyup", function (e) {
        hangman.letterGuess(e);
    });
    $("#guessed-letters").click(hangman.letterGuess);
    $("")
});
