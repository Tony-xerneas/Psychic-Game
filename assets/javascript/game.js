var wins = 0;
var loss = 0;
var guesses = 0;
var guessLeft = 9;
var alpLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    var keyType = event.key;

    var userInput = keyType;
    var compChoice = alpLetter[Math.floor(Math.random() * alpLetter.length)];

            // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
            var html =
            "<p>You chose: " + userInput + "</p>" +
            "<p>Actual Guess: " + compChoice + "</p>" +
            "<p>wins: " + wins + "</p>" +
            "<p>losses: " + loss + "</p>" +
            "<p> Guesses: " + guesses + "</p>" +
            "<p> Guess Remaining: " + guessLeft + "</p>";
            if (userInput === compChoice){
                wins ++;
            } else if (userInput !== compChoice){
                loss ++;

    
                
            }
            
  
          // Set the inner HTML contents of the #game div to our html string
          document.querySelector("#game").innerHTML = html;

}