$(document).ready(function() {



    // document.getElementById("guessedLetters").onclick = function addP() {
    //     document.getElementById("guessedLetters").innerHTML += "P";
    // }







    var hangman = {
        wordList: [],
        currentWord: "",
        alphabet: "abcdefghijklmnopqrstuvwxyz",
        guessedLetters: "",

        startGame: function () {
            this.currentWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
            this.guessedLetters = "";

        },
        letterGuess: function () {
            $("#guessedLetters").append("P");
        },
        endGame: function () {

        }

    };
    $("#guessedLetters").click(hangman.letterGuess);


    //     function letterGuess() {
    //         var LETTERS = document.getElementById("guessedLetters");
    //         LETTERS.innerHTML += "P";
    //     }

    

    // window.onclick = letterGuess();
    // }

    function modifyText() {
        var t2 = document.getElementById("t2");
        if (t2.firstChild.nodeValue == "three") {
          t2.firstChild.nodeValue = "two";
        } else {
          t2.firstChild.nodeValue = "three";
        }
      }
      
      // add event listener to table
      var el = document.getElementById("outside");
      el.addEventListener("click", modifyText, false);

});