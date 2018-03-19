//Both Bootstrap and Vanilla CSS Portfolios have been updated.
//Find both links here:
//https://tlorenzo.github.io/Bootstrap-Portfolio/portfolio.html
//https://tlorenzo.github.io/Responsive-Portfolio/Basic-Portfolio/portfolio.html



//!!IMPORTANT!!  Pseudocode - Still to be Done:  Find a way to have the app ignore all keystrokes that aren't letters.
//Pseudocode - Still to be Done: Add sounds that indicate that the user has won or lost a game.


//This is our array storing all of our alphabet letters as strings.
var alphabetSoup = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Will be incremented with a ++ operator and displayed through the DOM once the user guesses all letters in time. 
var wins = 0;
//Will be incremented with a ++ operator and displayed through the DOM once the user fails to guess all letters in time.
var losses = 0;
//Will be decremented with a -- operator and displayed through the DOM everytime the user guesses an incorrect letter.
var guessesLeft = 10;
//Any correct guess will start a new game.  So any incorrect guesses will be stored in this array and this array will be reset
//This array will be displayed in the DOM to let the user keep track of whatever letters they chose.
var yourGuessesSoFar = [];
//Will be incremented with a ++ operator and displayed through the DOM, after each game, win or lose.
var gamesPlayed = 0;
//This is where we will store the user input.
var humanChoice;
//This is where we pull a random value from our alphabet array declared above.
var letterLottery = alphabetSoup[Math.floor(Math.random() * alphabetSoup.length)];
console.log(letterLottery);//Shows the correct letter to guess in the console.

//This function will be called when resetting our game.
function lottery(){
var letterLottery = alphabetSoup[Math.floor(Math.random() * alphabetSoup.length)];
console.log(letterLottery);
}


//Inner HTML Stuffs to be displayed through the DOM on Start Up
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
document.getElementById("yourGuessesSoFar").innerHTML = "Guesses So Far: " + yourGuessesSoFar;


//This function is triggered by a keyboard key release event
document.onkeyup = function (event) {
    //This line of code tells the app to store whatever value letter the user typed and store it in the variable declared above.
    humanChoice = String.fromCharCode(event.which).toLowerCase();
    //console.log(humanChoice);
    //Any time the user types a word that doesn't match, we decrement from the initial default value of our variable declared above.
    guessesLeft--;
    //console.log(guessesLeft);
    //This is to notify the user through the DOM what to do next.
    document.getElementById("message").innerHTML = "Keep going.  Choose another letter.";
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
   //This conditional states that as long as we have remaining guesses left
   //AND as long as the user's keystrokes match the words in the array, execute the code within the curly braces
    if (guessesLeft > 0 && alphabetSoup.indexOf(humanChoice) >= 0 ) {
        //This stores all the user's guesses into the empty array declared above.
        //Then pushes each letter, one next to another into our array, separated by a space. 
        yourGuessesSoFar.push(" " + humanChoice);
        //console.log(yourGuessesSoFar);
        //Displays the results to the user through the DOM
        document.getElementById("yourGuessesSoFar").innerHTML = "Guesses So Far: " + yourGuessesSoFar;

    }
  


//This conditional executes code once the user wins.  If the conditions are met,
//it resets into a new game with an updated scoreboard.
//The conditions being that if the user's keystroke matches with the letter chosen by the app
//AND with the alphabet array first declared above, execute the code within the curly braces.
    if (humanChoice == letterLottery && alphabetSoup.indexOf(humanChoice) >= 0) {
        //We increment the number of wins games played by one everytime the user has a successful guess.
        wins++;
        gamesPlayed++;
        //Since our trusty variables up top have been keeping track of all the action, 
        //We now need to update the DOM.  Without this update, the values on the DOM will remain the same.
        document.getElementById("message").innerHTML = "Yes! I was thinking of " + letterLottery + "! <br>You have guessed correctly! <br>Press any letter to play another game.";
        //Now we tell the app to pick a new letter to guess.
        letterLottery = alphabetSoup[Math.floor(Math.random() * alphabetSoup.length)];
        //We set the value of our guesses left again, resetting the number of guesses to our default number chosen.
        guessesLeft = 10;
        //We clean out the array that the user filled up during this previous game.
        yourGuessesSoFar = [];
        //Then we notify the user of everything that's going on through the DOM.
        document.getElementById("gamesPlayed").innerHTML = "Total Games Played: " + gamesPlayed;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
        document.getElementById("yourGuessesSoFar").innerHTML = "Guesses So Far: " + yourGuessesSoFar;
        

    }


//This conditional executes code once the user fails to guess the correct letter in time, 
//If the conditions are met,
//it resets into a new game with an updated scoreboard.
//The conditions being that if the user has run out of tries, (i.e. Our guessesLeft variable has been decremented to zero)
//execute the code within the curly braces.
    if (guessesLeft == 0 ) {
        //This sets a new incremented values for our variables up top.
        losses++;
        gamesPlayed++;
        //This resets the value of our chosen default number of guesses.
        guessesLeft = 10;
        //This cleans out our array that is tasked with holding all the non-matching letters the user chose.
        yourGuessesSoFar = []; 
        //This calls our function up top, instructing the app to pick out a new letter.
        lottery();
        //This updates the user, updates all their standings while 
        //telling them they were unsuccessful and that they should try again.
        document.getElementById("message").innerHTML = "You have run out of guesses!  Press any letter to try again.";
        document.getElementById("gamesPlayed").innerHTML = "Total Games Played: " + gamesPlayed;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
        document.getElementById("yourGuessesSoFar").innerHTML = "Guesses So Far : " + yourGuessesSoFar;
        
    }

}