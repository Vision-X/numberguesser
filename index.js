var userInput = document.getElementById("guess-form");
var displayGuess = document.getElementById('display-guess');
var guessButton = document.querySelector('#guess-button');
var clearButton= document.getElementById('clear-button');
var displayHighLow = document.getElementById('display-high-low');

var randomNum = randomNumber();
var min = 0
var max = 100

//guess button functionality
guessButton.addEventListener('click', function() {
  var input = userInput.value;
  displayGuess.innerText=input;
  userInput.value='';
  userGuess(input)
})

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

//Place user inout into guess field after ENTER pressed //
function userGuess (userGuess) {
  console.log(randomNum);
  if (userGuess < randomNum) {
    //too low
    displayHighLow.innerText='Lowwwww';
  }
  else if (userGuess > randomNum) {
    //too high
    displayHighLow.innerText='Highhhh';
  } else {
  //correct!!
    displayHighLow.innerText='Winnerrrrr';

    randomNum = randomNumber();
  }
}

//reset button functionality

//random Number generator function
function randomNumber () {
  return Math.floor(Math.random() * (max-min) +1);
}

//function to update min

//function to update max
