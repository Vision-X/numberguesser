var userInput = document.getElementById("guess-form");
var displayGuess = document.getElementById('display-guess');
var guessButton = document.querySelector('#guess-button');
var clearButton = document.getElementById('clear-button');
var displayHighLow = document.getElementById('display-high-low');
var resetButton = document.getElementById('reset-button');
var lastGuess = document.getElementById('last-guess');
var randomNum = randomNumber();
var min = 0;
var max = 100;

//guess button functionality
guessButton.addEventListener('click', function() {
  var input = userInput.value;
  displayGuess.innerText=input;
  userInput.value='';
  userGuess(input);

})
// ----------------- watch extra lines bm --------------------- //

//clear button
clearButton.addEventListener('click', function() {
  userInput.value='';
})

//Enable Buttons when the INPUT field is typed in //
function buttonsOn() {
  document.getElementById('guess-button').removeAttribute("disabled");
  document.getElementById('clear-button').removeAttribute("disabled");
  document.getElementById('reset-button').removeAttribute("disabled");
}
// ------------------- Tell me about why you chose to put the event listener buttonsOn() in your HTML instead of adding one here in your JS file like you do with the others? bm --------------------- //

//Place user inout into guess field after ENTER pressed //
function userGuess (userGuess) {
  console.log(randomNum);
  // if (isNaN(userGuess)) {
  //   displayHighLow.innerText='Guess a fucking number dude';
  // }
  if (userGuess < 1 || userGuess > 100) {
    displayHighLow.innerText = 'Please guess a number between 1 and 100';
    // displayGuess.innerText = 'Your last guess was';
  }
  else if (userGuess === isNaN) {
    // displayGuess.innerText = 'Your last guess was';
    displayHighLow.innerText = 'That is not a number';
  }
  else if (userGuess < randomNum) {
    //too low
    // displayGuess.innerText = 'Your last guess was';
    displayHighLow.innerText='That is too low';
  }
  else if (userGuess > randomNum) {
    //too high
    // displayGuess.innerText = 'Your last guess was';
    displayHighLow.innerText='That is too high';
  } else {
  //correct!!
    // displayGuess.innerText = 'Your last guess was';
    displayHighLow.innerText='BOOM!';

    randomNum = randomNumber();
  }
}

//reset button functionality
resetButton.addEventListener('click', function() {
  userInput.value = '';
  document.getElementById('guess-button').setAttribute( "disabled", true);
  document.getElementById('clear-button').setAttribute("disabled", true);
  document.getElementById('reset-button').setAttribute("disabled", true);
  displayGuess.innerText='';
  displayHighLow.innerText='';
  lastGuess.innerText='';
})

// ----------------- I'd love to see you break out lines 72-74 into a separate function, for instance a function called "clearFields()" and its only job would be to clear the input fields. bm --------------------- //

// ----------------- To avoid repeteating yourself when doing repetitive tasks, look into using a loop to save yourself some work, like this: 
// var buttons = document.querySelectorAll('.button');
// for (var i=0; i < buttons.length; i++) {
//     buttons[i].setAttribute("disabled", true);
// }
// ----------------- this means you need to have each of the buttons share a class that applies to all of them, in this case it would be '.button' bm ------------------- //

//random Number generator function
function randomNumber () {
  return Math.floor(Math.random() * (max-min) +1);
}

//function to update min

//function to update max
