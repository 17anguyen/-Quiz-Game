var startButton = document.querySelector(".start");
var timer = document.querySelector(".timer");
var mainEl = document.getElementById(".main");
var questions = document.querySelector(".question");
var answers = document.querySelector(".answers");
var initialsButton = document.querySelector("#initials-submit");
var initEl= document.getElementById("#initials")
var score = 0
var timerId;
var currentQuestionIndex = 0;
var choicesEl = document.getElementById('choices');
var time = 60;
var endQuiz = document.querySelector(".quiz-end");
var scoreButton = document.querySelector(".scores")
// var initials = inputInitials.value.trim(); initials.toUpperCase();


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
// // Function to check the user's answer
// function checkAnswer(event) {

//   // Get the text content of the clicked answer
//   var answer = event.target.textContent;

//   // Check if the user's answer is correct
//   if (answer === "true") {
//     console.log("answer is true")
//     result.textContent = "Correct!";
//     score = score + 1
//     result.style.color = "#97c1a9";
//     currentQuestionIndex++;
//     console.log("answer section is working")
//   } else {
//     time -= 10
//     result.textContent = "Wrong answer, try again.";
//     result.style.color = "#ff967a";
//     currentQuestionIndex++;
//   }
// }

getQuestion();

function questionClick(event) {
  // result right or wrong
  answer = event.target;
  console.log("click event is working")
  // move to next question
  currentQuestionIndex++;
  // checkAnswer();
  // check if we've run out of questions
  if (time <= 0 || currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}



function startTimer() {
  timerId = setInterval(function () {
    if (time > 0) {
      timer.textContent = time;
      time--;
    } else if (time <= 0) {
      quizEnd();
    }
  }, 1000);
}
startTimer()

choicesEl.onclick = questionClick;

// document.addEventListener("submit",function(event)){
//     event.preventDefault();
//     event.target.matches("form")
//     retrieveScores();
//     var initialsInput = document.querySelector("form input");
//     if (initials === "") {
//         return;
//     }
//  var scoreResult = [] {
//     scoreResult.push(initials);
//     scoreResult.push(score);
//     highScores.push(scoreResult)
//     storeScores();
//     renderScores();
//     replayBtn.textContent = "replay";
//     assessment.textContent=""
//   };

function quizEnd() {
  // stop timer
  clearInterval(timerId);
  saveScores ();

  // display initials section


  

  // create an array to push a new key value pair with initials and a score

  // format new score object for current user

  // 1. get existing scores
  // 1. a. if no existing, create empty array
  // 2. add newscore to array
  // 3. setItem back to ls


 
};


function saveScores () {
  var newScore = {
    highscores = "";
    init = "";
    console.log(newScore);
  }; 


  var highscores= JSON.parse(localStorage.getItem("highscores"))
  if ( highscores == null) {
    highscores = []
  }
  // save to localstorage
  highscores.push(newScore);
  localStorage.setItem('highscores', JSON.stringify(highscores));
  // render topscores on the page
  endQuiz.classList.remove("hidden")


  var init= JSON.parse(localStorage.getItem("init"))

  initialsButton.addEventListener("click", function (){
  localStorage.setItem('init', JSON.stringify(init));
  init.push(newScore);

    // get value of initials input 
    // saveScores(initials)
  }) ;
}


