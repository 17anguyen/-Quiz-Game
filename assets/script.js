var startButton = document.querySelector(".start");
var timer = document.querySelector(".timer");
var mainEl = document.getElementById(".main");
var questions = document.querySelector (".question");
var answers = document.querySelector (".answers");
var count = document.querySelector("#count");
var score = 0
var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");
var questionNum = 1
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

function changeQuestion() {
  if (questionNum===1){
    q1.classList.add("hidden")
    q2.classList.remove("hidden")
  } 
  else if (questionNum===2){
    q2.classList.add("hidden")
    q3.classList.remove("hidden")
  } 
  else if (questionNum===3){
    q3.classList.add("hidden")
    q4.classList.remove("hidden")
  } 
  else if (questionNum===4){
    q4.classList.add("hidden")
    q5.classList.remove("hidden")
  } 
}

// Store the correct answer in a variable
// var correctAnswer = "Dolphin";

// Get references to the list items and result element
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var result = document.getElementById("result");
console.log ("element", answer1);

// Add event listeners to each list item
answer1.addEventListener("click", checkAnswer);
answer2.addEventListener("click", checkAnswer);
answer3.addEventListener("click", checkAnswer);
answer4.addEventListener("click", checkAnswer);

// Function to check the user's answer
function checkAnswer(event) {
  
  // Get the text content of the clicked answer
  var userAnswer = event.target.textContent;
  
  if (event.target.getAttribute("data-answerChoice")==="true") {
    console.log("answer is true")
  }
  // Check if the user's answer is correct
  if (event.target.getAttribute("data-answerChoice")==="true") {
    console.log("answer is true")
    result.textContent = "Correct!";
    score = score+1
    result.style.color = "#97c1a9";
    questionNum++
    changeQuestion();
  } else {
    result.textContent = "Wrong answer, try again.";
    result.style.color = "#ff967a";
    questionNum++
    changeQuestion();
  } 
  console.log(questionNum);
}