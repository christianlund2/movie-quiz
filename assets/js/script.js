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
}

]

/* Declaration of variables */
const quiz = document.getElementById('quiz');
const 

//Wait for the DOM to finish loading before running the game
//Add event listners to mouse clicks

document.addEventListener("DOMContentLoaded", function() {
    button.addEventListener("click", runQuiz, {
        once: true
    })
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
    
}

function checkAnswer () {
    
}

function incrementScore () {
    
}

function showResult () {
    
}

function displayFinalScore () {
    
}