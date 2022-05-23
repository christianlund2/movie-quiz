const quizQuestions = [{
    question: "When was the first Ford Model-T made?",
    a: "1900",
    b: "1910",
    c: "1908",
    d: "1912",
    answer: "c",
},
{
    question:
},
{
    question:
},

];

/* Declaration of variables */
const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const optionA = document.getElementById('optionA');
const optionB = document.getElementById('optionB');
const optionC = document.getElementById('optionC');
const optionD = document.getElementById('optionD');
const next = document.getElementById('next');
let score = parseInt(score.innerText);
let result = 0;
let maxQuizQuestions = 8;
let presentQuestion;

//Wait for the DOM to finish loading before running the game
//Add event listners to mouse clicks

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "next") {
                checkAnswer();
            }
        })
    }
    
    runQuiz();
})

function runQuiz () {
    let mixItUp = quizQuestions.sort(() => Math.random() - 0.5);
    nextQuestion();

    questionElement.innerText = quizQuestions.question
    optionA.innerText = quizQuestions.a
    optionB.innerText = quizQuestions.b
    optionC.innerText = quizQuestions.c
    optionD.innerText = quizQuestions.d
}

function nextQuestion () {
    presentQuestion = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
    if (quizQuestions < maxQuizQuestions) {
        playQuiz()
    } else {

    }
}

function checkAnswer () {

}

function incrementScore () {
    
}

function showResult () {
    
}

function displayFinalScore () {
    
}