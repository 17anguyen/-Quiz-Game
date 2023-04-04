var startButton = document.querySelector(".start");
var timer = document.querySelector(".timer");
var mainEl = document.getElementById(".main");
var questions = document.querySelector(".question");
var answers = document.querySelector(".answers");
var count = document.querySelector("#count");
var score = 0
var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");
var questionNum = 1
var currentQuestionIndex = 0;
var choicesEl = document.getElementById('choices');
var time = 60;


var questions = [
  {
    title: 'Like the other Nintendo games consoles, the GameCube had a nickname given to it during its development. What was the GameCubes code name during development?',
    choices: ['Narwhal', 'Dolphin', 'Megalodon', 'Arapaima'],
    answer: 'Dolphin',
  },
  {
    title: 'Which was the most expensive Nintendo console ever?',
    choices: ['OLED Switch', 'Game Boy Advance', '3DS', 'Wii Supreme'],
    answer: 'Wii Supreme',
  },
  {
    title: 'In the handheld market, Nintendo has had many trials, the most successful being the amazingly addictive Game Boy, which was introduced to the world in 1989. However, Nintendo had another console sold as a "portable system", but it definitely was not. Released in 1995, it was a heavy and a dangerous console, and a major flop! What was it called?',
    choices: ['SNES', 'Virtual Boy', '3DS', 'Wii U'],
    answer: 'Virtual Boy',
  },
  {
    title: 'What was the SNES called in Japan?',
    choices: ['Super Famicom', 'Ultra Famicom', 'Famicom', 'Famicom Platinum'],
    answer: 'Super Famicom.',
  },
  {
    title: 'Which was the first N64 game to support the Rumble Pak?',
    choices: ['Star Fox 64', 'Super Mario 64', 'Super Smash Bros.', 'Pokemon Stadium'],
    answer: 'Star Fox 64',
  },
];



function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];

  // update title with current question
  var titleEl = document.getElementById('question-title');
  titleEl.textContent = currentQuestion.title;

  // clear out any old question choices
  choicesEl.innerHTML = '';

  // loop over choices
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    // create new button for each choice
    var choice = currentQuestion.choices[i];
    var choiceNode = document.createElement('button');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', choice);

    choiceNode.textContent = choice;

    // display on the page
    choicesEl.appendChild(choiceNode);
  }
  
}
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

getQuestion();

function questionClick(event) {
  // result right or wrong
  var answer = event.target;

  // move to next question
  currentQuestionIndex++;

  // check if we've run out of questions
if (time <= 0 || currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

var timerId = setInterval(
function clockTick() {
  time = setInterval(function () {
    if (time > 1) {
      timer.textContent = time;
      time--;
    } else if (time <= 0) {
      quizEnd();
    }
  },1000);
});
function startTimer() {
  timeLeft = 100
  timer.textContent = timeLeft + " seconds left";
  gameTimer = setInterval(function(){
      timeLeft--
      timer.textContent = timeLeft + " seconds left";
      if(timeLeft<=0) {
          timesUp();
      }
  },1000)
}


choicesEl.onclick = questionClick;




function quizEnd() {
  // stop timer
  clearInterval(timerId);

  // display an input and a button 

  // get value of the input on button click 

  // save to local storage 

  // create an array to push a new key value pair with initials and a score

  // format new score object for current user
  var newScore = {
    score: time,
    initials: initials,
  };

  // save to localstorage
  highscores.push(newScore);
  window.localStorage.setItem('highscores', JSON.stringify(highscores));

}

















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
