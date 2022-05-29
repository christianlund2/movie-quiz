const quizData = [
    {
        question: "Which artist has the most Grammy awards?",
        a: "Beyonce",
        b: "Quincy Jones",
        c: "Georg Solti",
        d: "Stevie Wonder",
        correct: "c",
    },
    {
        question: "Which actor has the most appearances as James Bond?",
        a: "Daniel Craig",
        b: "Pierce Brosnan",
        c: "Roger Moore",
        d: "Timothy Dalton",
        correct: "c",
    },
    {
        question: "What is the name of the van in Scooby Doo?",
        a: "Big Bertha",
        b: "Big Diesel",
        c: "Party Wagon",
        d: "The Mystery Machine",
        correct: "d",
    },
    {
        question: "In which year did SpongeBob SquarePants first air?",
        a: "1998",
        b: "1999",
        c: "2000",
        d: "2001",
        correct: "b",
    },
    {
        question: "What is the name of the boat in Jaws?",
        a: "The Jewel",
        b: "Queen Anne's Revenge",
        c: "The Orca",
        d: "The Flying Dutchman",
        correct: "c",
    },
    {
        question: "How many studio albums did Elvis Presley release?",
        a: "18",
        b: "21",
        c: "23",
        d: "25",
        correct: "c",
    },
    {
        question: "What city was the second 'Home Alone' movie set in?",
        a: "New York",
        b: "Boston",
        c: "Chicago",
        d: "Baltimore",
        correct: "a",
    },
    {
        question: "Who was the lead singer of the band Queen?",
        a: "Freddy Mercury",
        b: "Johnny Drama",
        c: "Hans Gruber",
        d: "Buffalo Bill",
        correct: "a",
    },
    {
        question: "What is the name of the dog in 'How the Grinch stole Christmas?'",
        a: "Skip",
        b: "Dog",
        c: "Max",
        d: "Spike",
        correct: "c",
    },
    {
        question: "While fighting Darth Vader in the Cloud City, which hand does Luke Skywalker lose?",
        a: "Right",
        b: "Left",
        c: "Both",
        d: "Neither",
        correct: "a",
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

let currentQuiz = 0;
var score = 0;
var incorrect = 0;

runQuiz();

//Wait for the DOM to finish loading before running the game
//Add event listners to mouse clicks

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "next") {
                checkAnswer();
            }
        });
    }
    
    runQuiz();
});

function runQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz];
   
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerElements.forEach(answerElement => answerElement.checked = false);
}

function getSelected() {
    let answer;
    answerElements.forEach(answerElement => {
        if(answerElement.checked) {
            answer = answerElement.id;
        }
    });
    return answer;
}

/* Event listener for submit button */
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            incrementScore();
        } else {
            incrementWrongAnswer();
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            runQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correct!</h2>

            <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

/* Gets the current score from the DOM and increments it by 1 */
function incrementScore() {
    
    this.score++;
    document.getElementById("score").innerText = this.score;
}

/* Gets the current incorrect score from the DOM and increments it by 1 */
function incrementWrongAnswer() {

    this.incorrect++;
    document.getElementById("incorrect").innerText = this.incorrect;
}