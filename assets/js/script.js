// timer element
var timerEL = document.getElementById("countdownTimer");
var sec = 60;

document.getElementById("start-btn").addEventListener("click", timer);

function timer() {
    updateTimer();
    function updateTimer() {
        timerEL.innerHTML = sec;
    
        sec--;
        
        if (sec <= 0){
            stopTimer();
            timerEL.innerHTML = "0";
        }

        function stopTimer() {
            clearInterval(interval);
        }
    }

    var interval = setInterval(updateTimer, 1000);
}

// Questions and answers
var question = document.getElementById("questions");
var choices = Array.from(document.getElementsByClassName("choices-text"));

var availableQuestions = [];
var score = 0;
var scoreCounter = 0;

// 10 questions of the quiz
var Questions = [
    {
        question: "What do we use to comment in CSS?",
        choice1: "( ... )",
        choice2: "/* ... */",
        choice3: "// ...",
        choice4: "<!-- ... -->",
        answer: 2
    },
    {
        question: "Which item is not an element in HTML?",
        choice1: "div",
        choice2: "var",
        choice3: "button",
        choice4: "function",
        answer:  4
    },
    {
        question: "What tag do we use in HTML to create a list?",
        choice1: "section",
        choice2: "form",
        choice3: "ul",
        choice4: "p",
        answer:  3
    },
    {
        question: "Arrays in JavaScript are enclosed in ___________?",
        choice1: "[]",
        choice2: "()",
        choice3: "{}",
        choice4: "''",
        answer:  1
    },
    {
        question: "What do we use in terminal to create a new git branch",
        choice1: "git init <branch>",
        choice2: "git checkout <branch>",
        choice3: "git branch <branch>",
        choice4: "git create <branch>",
        answer:  3
    }
]
