//Both Bootstrap and Vanilla CSS Portfolios have been updated.
//Find both links here:
//https://tlorenzo.github.io/Bootstrap-Portfolio/portfolio.html
//https://tlorenzo.github.io/Responsive-Portfolio/Basic-Portfolio/portfolio.html


var alphabetSoup = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var yourGuessesSoFar = [];
var gamesPlayed = 0;
var humanChoice;
var appChoice;
var letterLottery = alphabetSoup[Math.floor(Math.random() * alphabetSoup.length)];
console.log(letterLottery);


function lottery(){
var letterLottery = alphabetSoup[Math.floor(Math.random() * alphabetSoup.length)];
console.log(letterLottery);
}



//Inner HTML Stuffs on Start Up
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
document.getElementById("yourGuessesSoFar").innerHTML = "Guesses So Far: " + yourGuessesSoFar;

document.onkeyup = function (event) {
    humanChoice = String.fromCharCode(event.which).toLowerCase();
    //console.log(humanChoice);
    guessesLeft--;
    //console.log(guessesLeft);
    document.getElementById("message").innerHTML = "Keep going.  Choose another letter.";
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
   
    if (guessesLeft > 0 && alphabetSoup.indexOf(humanChoice) >= 0 ) {
        yourGuessesSoFar.push(" " + humanChoice);
        //console.log(yourGuessesSoFar);
        document.getElementById("yourGuessesSoFar").innerHTML = "Guesses So Far: " + yourGuessesSoFar;

    }
  



    if (humanChoice == letterLottery && alphabetSoup.indexOf(humanChoice) >= 0) {
        wins++;
        gamesPlayed++;
        document.getElementById("message").innerHTML = "Yes! I was thinking of " + letterLottery + "! <br>You have guessed correctly! <br>Press any letter to play another game.";
        letterLottery = alphabetSoup[Math.floor(Math.random() * alphabetSoup.length)];
        guessesLeft = 10;
        yourGuessesSoFar = [];
        document.getElementById("gamesPlayed").innerHTML = "Total Games Played: " + gamesPlayed;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
        document.getElementById("yourGuessesSoFar").innerHTML = "Guesses So Far: " + yourGuessesSoFar;
        

    }



    if (guessesLeft == 0 ) {
        losses++;
        gamesPlayed++;
        guessesLeft = 10;
        yourGuessesSoFar = []; 
        lottery();
        document.getElementById("message").innerHTML = "You have run out of guesses!  Press any letter to try again.";
        document.getElementById("gamesPlayed").innerHTML = "Total Games Played: " + gamesPlayed;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
        document.getElementById("yourGuessesSoFar").innerHTML = "Guesses So Far : " + yourGuessesSoFar;
        
    }

}