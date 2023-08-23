
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

var btnEl1 = document.getElementById("btn1");
var btnEl2 = document.getElementById("btn2");
var btnEl3 = document.getElementById("btn3");
var btnEl4 = document.getElementById("btn4");
var btnEl5 = document.getElementById("btn5");
var buttons = [btnEl1, btnEl2, btnEl3, btnEl4];

var answersScreenEl = document.getElementById("answers-screen")
var startdialog = document.getElementsByClassName("dialog");
var questionEl = document.getElementById("question-h4");
var counterEl = document.getElementById("counter");
var startBtnEl = document.getElementById("start-btn");
var startBtnDiv = document.getElementById("start-quiz-btn");
var mainEl = document.getElementById("quiz-wrapper");
var rightWrongEl = document.getElementById("right-wrong-span");
var highScoresEl = document.getElementById("high-score-screen");
var highScoreLinkEl = document.getElementById("high-score-link");
var scoreEl = document.getElementById("score-span");
var initialsEl = document.querySelector("#initials-input");
var saveBtnFormEl = document.getElementById("save-form-btn");
var inputSectionEl = document.getElementById("input-section");
var lastPlayEl = document.getElementById("last-play-span");
var userInit = document.getElementById("user-initials-show");

var changedQuestion = 0;
var scoreItem = 0;
var isWrong = false;
var lastItem = false;
//function to display first section after start click button
function startQuiz() {

  countdown();

  startBtnDiv.setAttribute("style", "visibility: hidden;");
  highScoresEl.setAttribute("style", "visibility: hidden;");
  mainEl.setAttribute("style", "visibility: visible;");
  startdialog.setAttribute("style", "visibility: hidden;");

  //show last score played if available 
  if (localStorage.getItem("userInitials") === null) {
    lastPlayEl.textContent = ""
  } else {
    lastPlayEl.textContent = localStorage.getItem("userInitials") + ": " + localStorage.getItem("scoreTotal");

  }
  //set first question and answers

  var firstQuestion = questions[0].title;
  questionEl.textContent = firstQuestion;

  for (i = 0; i < questions[0].choices.length; i++) {
    buttons[i].textContent = questions[0].choices[i];

  }
}

//function to display each section after answers button clicked
//display correct/wrong answer after clicking

function answerClicked(event) {
  if (buttons.includes(event.target)) {

    //changedQuestion to catch first item in the questions array

    if (event.target.textContent === questions[changedQuestion].answer) {
      changedQuestion++
      scoreItem++
      rightWrongEl.setAttribute("style", "color:green;")
      rightWrongEl.textContent = "Right!"
      isWrong = false;
    } else {
      isWrong = true;
      changedQuestion++
      rightWrongEl.setAttribute("style", "color:red;")
      rightWrongEl.textContent = "Wrong!"


    }
    if (changedQuestion === questions.length) {
      lastItem = true;
      changedQuestion = 0;
    } else {

      questionEl.textContent = questions[changedQuestion].title
      for (i = 0; i < buttons.length; i++) {
        buttons[i].textContent = questions[changedQuestion].choices[i];

      }
    }

  }

}

//create a timer
//wrong answer subtract time from timer

function countdown() {
  var timeLeft = 45;
  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      rightWrongEl.textContent = " "
      if (!isWrong) {
        timeLeft--;
      } else {
        timeLeft -= 5;
        isWrong = false;
      }
      if (lastItem) {
        lastItem = false;
        clearInterval(timeInterval);
        displayFinalScore();
        counterEl.textContent = 0
      }
      counterEl.textContent = timeLeft;

    } else {
      counterEl.textContent = 0;
      clearInterval(timeInterval);
      displayFinalScore();
    }
  }, 980);
}

function displayFinalScore() {
  //display total score screen with total score and input
  mainEl.setAttribute("style", "visibility: hidden;");
  highScoresEl.setAttribute("style", "visibility: visible;");
  inputSectionEl.setAttribute("style", "visibility: visible;");

  scoreEl.textContent = scoreItem;
  userInit.textContent = "";

  saveBtnFormEl.addEventListener("click", displayTotalScores);
}

//show initials and score 
function displayTotalScores(event) {

  event.preventDefault();

  var userInitials = initialsEl.value;

  localStorage.setItem("userInitials", userInitials);
  localStorage.setItem("scoreTotal", scoreItem)

  userInit.textContent = "You initials: " + localStorage.getItem("userInitials");

  inputSectionEl.setAttribute("style", "visibility:hidden;");

  lastPlayEl.textContent = localStorage.getItem("userInitials") + ": " + localStorage.getItem("scoreTotal");

  //reset the game
  var resetBtn = document.getElementById("reset-btn");
  resetBtn.setAttribute("style", "visibility:visible;");
  resetBtn.addEventListener("click", function () {
    startBtnEl.setAttribute("style", "visibility:visible;");
  })

}


startBtnEl.addEventListener("click", startQuiz);
answersScreenEl.addEventListener("click", answerClicked);