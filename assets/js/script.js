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
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let result = 0;
let maxQuizQuestions = 8;
let presentQuestion;

let currentQuiz = 0;
let score = 0;

runQuiz()

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
    deselectAnswers()

    const currentQuizQuestions = quizQuestions[currentQuiz]
    
    //*let mixItUp = quizQuestions.sort(() => Math.random() - 0.5);
    //*nextQuestion();

    questionElement.innerText = currentQuizQuestions.question
    a_text.innerText = quizQuestions.a
    b_text.innerText = quizQuestions.b
    c_text.innerText = quizQuestions.c
    d_text.innerText = quizQuestions.d
}

function deselectAnswers() {
    answerElements.forEach(answerElements => answerElements.checked = false);
}

function getSelected() {
    let answerElements
    answerElements.forEach(answerElements => {
        if(answerElements.checked) {
            answer = answerElements.id
        }
    
    })
    return answer
}

/* Event listener for submit button */
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if (answer ===quizQuestions[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizQuestions.length) {
            runQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizQuestions.length} questions correct!</h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})

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