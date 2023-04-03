var startButton = document.querySelector(".start");
var timer = document.querySelector(".timer");
var mainEl = document.getElementById(".main");
var questions = document.querySelector (".question");
var answers = document.querySelector (".answers");
var count = document.querySelector("#count");
// score tracker
// TODO: find out how to get this to work
// scores.addEventListener("click");

// // game start button
// function startGame() {

// startButton.addEventListener("click", function () {
// timer();
// // startButton.item(0).setAttribute('style', 'display:none;')
// }
// )


// timer function
// function timer ( {
//   // timer.textContent= '';
//     count++
// }, 1000);
// }




// Store the correct answer in a variable
var correctAnswer = "Dolphin";

// Get references to the list items and result element
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var result = document.getElementById("result");

// Add event listeners to each list item
answer1.addEventListener("click", checkAnswer);
answer2.addEventListener("click", checkAnswer);
answer3.addEventListener("click", checkAnswer);
answer4.addEventListener("click", checkAnswer);

// Function to check the user's answer
function checkAnswer(event) {
  // Get the text content of the clicked answer
  var userAnswer = event.target.textContent;
  
  // Check if the user's answer is correct
  if (userAnswer === correctAnswer) {
    result.textContent = "Correct!";
    result.style.color = "#97c1a9";
  } else {
    result.textContent = "Wrong answer, try again.";
    result.style.color = "#ff967a";
  }
}