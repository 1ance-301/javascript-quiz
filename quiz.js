// timer element
var timerEL = document.getElementById("countdownTimer");
var sec = 60;
timer();

function timer() {
    timerEL.innerHTML = sec;

    sec--;
    
    if (sec <= 0){
        stopTimer();
        timerEL.innerHTML = "0";
        endpage();
    }
}
var interval = setInterval(timer, 1000);

// a function to stop the timer
function stopTimer() {
    clearInterval(interval);
}

// a funtion to deduct time
function deductTime() {
    sec = sec - 10;
    startQuiz();
}

// gets question and choices from html
var question = document.getElementById("questions");
var choices = Array.from(document.getElementsByClassName("choices-text"));
var commentEl = document.getElementById("comment");
var currentQuesiton = [];

// 5 questions of the quiz
var questionsArray = [
    {
        question: "What do we use to comment in CSS?",
        choice1: "( ... )", 
        choice2: "/* ... */",
        choice3:  "// ...", 
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

function startQuiz() {
    if (questionsArray.length === 0) {
        endpage();
    }
    var index = Math.floor(Math.random() * questionsArray.length);
    currentQuesiton = questionsArray[index];
    question.innerHTML = currentQuesiton.question;

    choices.forEach( choice => {
        var number = choice.dataset["number"];
        var currentChoices = currentQuesiton["choice" + number];
        choice.innerText = currentChoices;
    });

    questionsArray.splice(index, 1);
};

startQuiz();

choices.forEach( choice => {
    choice.addEventListener("mouseover", removeComment);
    function removeComment(){
        commentEl.innerText = "";
    }

    choice.addEventListener("click", e => {
       var selectedNumber = e.target;
       var selectedChoice = selectedNumber.dataset["number"];
       var answer = currentQuesiton.answer
       if (selectedChoice == answer) {
           commentEl.innerText = "CORRECT!";
           startQuiz();
       } else {
           commentEl.innerText = "WRONG!";
           deductTime();
       }
    });
});

function endpage() {
    window.location = "end-page.html";
};