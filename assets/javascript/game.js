$(document).ready(function () {

    var hangman = {
        wordList: ["Awkward", "Bagpipes", "Banjo", "Bungler", "Croquet", "Crypt", "Dwarves", "Fervid",
            "Fishhook", "Fjord", "Gazebo", "Gypsy", "Haiku", "Haphazard", "Hyphen", "Ivory", "Jazzy", "Jiffy",
            "Jinx", "Jukebox", "Kayak", "Kiosk", "Klutz", "Memento", "Mystify", "Numbskull", "Ostracize",
            "Oxygen", "Pajama", "Phlegm", "Pixel", "Polka", "Quad", "Quip", "Rhythmic", "Rogue", "Sphinx",
            "Squawk", "Swivel", "Toady", "Twelfth", "Unzip", "Waxy", "Wildebeest", "Yacht", "Zealous",
            "Zigzag", "Zippy", "Zombie", "Zygote"],
        currentWord: "",
        alphabet: "abcdefghijklmnopqrstuvwxyz",
        guessedLetters: "",
        initialGuesses: 10,
        guessesLeft: 0,
        wins: 0,
        losses: 0,
        initializeGame: function () {
            $(document).off("keyup");
            $(document).on("keyup", function (e) {
                hangman.letterGuess(e);
            });
            $("#restart-button").on("click", function () {
                $("#restart-button").off("click");
                $("#the-word").empty();
                $("#msg-box").empty();
                $("#guessed-letters").empty();
                hangman.initializeGame();
            });
            $("#msg-box").text("press any letter to begin guessing.");
            this.guessesLeft = this.initialGuesses;
            $("#guesses-left").text(this.initialGuesses);
            $("#wins-span").text(this.wins);
            $("#losses-span").text(this.losses);
            this.currentWord = this.wordList[Math.floor(Math.random() * this.wordList.length)].toLowerCase();
            console.log(this.currentWord);
            this.guessedLetters = "";
            for (var i = 0; i < this.currentWord.length; i++) {
                if (this.currentWord[i] === " ") {
                    $("#the-word").append(" ");
                } else {
                    $("#the-word").append("<span id=\"letter" + i + "\">-</span>");
                }
            }
        },
        letterGuess: function (guess) {
            if (guess.which >= 65 && guess.which <= 90) {
                var guessKey = guess.key.toLowerCase();
                if (this.guessedLetters.search(guessKey) !== -1) {
                    $("#msg-box").text(guessKey + " has already been guessed.");
                } else {
                    this.guessedLetters += guessKey;
                    $("#guessed-letters").append("<span>" + guessKey + " </span>");
                    var j = this.currentWord.search(guessKey);
                    if (j === -1) {
                        $("#msg-box").text("that's a miss.");
                        this.guessesLeft--;
                        $("#guesses-left").text(this.guessesLeft);
                        if (this.guessesLeft === 0) {
                            this.endGame(false);
                        }
                    } else {
                        $("#msg-box").text("that's a hit.");
                        while (j < this.currentWord.length) {
                            if (this.currentWord[j] === guessKey) {
                                $("#letter" + j).text(guessKey);
                            }
                            j++;
                        }
                        if ($("#the-word").text() === this.currentWord) {
                            this.endGame(true);
                        }
                    }
                }

            }
        },
        endGame: function (isWin) {
            if (isWin) {
                this.wins++;
                $("#msg-box").text("you win. yay.");
                $("#wins-span").text(this.wins);
            } else {
                this.losses++;
                $("#msg-box").text("you lose. rip");
                $("#losses-span").text(this.losses);
            }
            $(document).off("keyup");
        }

    }

    hangman.initializeGame();

});
