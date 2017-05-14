var userInput = document.getElementById("guess-form");
var displayGuess = document.getElementById('display-guess');
var guessButton = document.querySelector('#guess-button');
var clearButton= document.getElementById('clear-button');

var randomNum = Math.floor(Math.random() * (100) +1);

//guess button functionality
guessButton.addEventListener('click', function() {
  var input = userInput.value;
  console.log(input)
  displayGuess.innerText=input;
  userInput.value='';
  console.log(randomNum);
})

//clear guess button
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
function userGuess () {
  if (userInput < randomNum) {
    //too low
  }
  else if (userInput > randomNum) {
    //too high
  } else {
    //correct!!
  }

    var guessNumber = parseInt
}

  var x = document.getElementById("guess-form").value;
  document.getElementById("display-guess").innerHTML = x;
