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
    title: 'Which was the most expensive Nintendo console ever?,
    choices: ['OLED Switch', 'Game Boy Advance', '3DS', 'Wii Supreme'],
    answer: 'parentheses',
  },
  {
    title: 'Arrays in JavaScript can be used to store ____.',
    choices: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above',
    ],
    answer: 'all of the above',
  },
  {
    title:
      'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'quotes',
  },
  {
    title:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
    answer: 'console.log',
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

getQuestion();

function questionClick(event) {
  // result right or wrong
  var buttonEl = event.target;

  // move to next question
  currentQuestionIndex++;

  // check if we've run out of questions
  if (time <= 0 || currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

choicesEl.onclick = questionClick;
// start timer
timerId = setInterval(clockTick, 1000);

function clockTick() {
  // update time
  time--;
  // timerEl.textContent = time;

  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}

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
