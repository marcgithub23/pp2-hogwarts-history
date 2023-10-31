const homeScreen = document.getElementById('home-screen');
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const playAgainButton = document.getElementById('play-again-btn');
const quizScreen = document.getElementById('quiz-screen');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultsScreen = document.getElementById('results-screen');
const totalScoreElement = document.getElementById('total-score');

let shuffledQuestions;
let currentQuestionIndex;
let score = 0;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < shuffledQuestions.length) {
        handleNextButton();
    }
});
playAgainButton.addEventListener('click', restartGame);

function startGame() {
    homeScreen.classList.add('hide');
    quizScreen.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
}

function restartGame() {
    resultsScreen.classList.add('hide');
    quizScreen.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("wrong");
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.classList.remove('hide');
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        setNextQuestion();
    } else {
        quizScreen.classList.add('hide');
        resultsScreen.classList.remove('hide');
        showScore();
    }
}

function showScore() {
    totalScoreElement.innerHTML = `You scored ${score} out of ${shuffledQuestions.length}!`;
}

// Questions and answers
const questions = [
    {
        question: "Who is the headmaster of Hogwarts School of Witchcraft and Wizardry throughout most of the series?",
        answers: [
            {text: "Alastor Moody", correct: false},
            {text: "Severus Snape", correct: false},
            {text: "Minerva McGonagall", correct: false},
            {text: "Albus Dumbledore", correct: true}
        ]
    },
    {
        question: "Which magical creature guards the entrance to the Chamber of Secrets?",
        answers: [
            {text: "Hippogriff", correct: false},
            {text: "Basilisk", correct: true},
            {text: "Thestral", correct: false},
            {text: "Acromantula", correct: false}
        ]
    },
    {
        question: "What is the name of Harry's owl?",
        answers: [
            {text: "Crookshanks", correct: false},
            {text: "Fawkes", correct: false},
            {text: "Hedwig", correct: true},
            {text: "Dobby", correct: false}
        ]
    },
    {
        question: "Which magical sport is played on broomsticks in the wizarding world?",
        answers: [
            {text: "Gobstones", correct: false},
            {text: "Quidditch", correct: true},
            {text: "Chess", correct: false},
            {text: "Exploding Snap", correct: false}
        ]
    },
    {
        question: "What is the core of Harry Potter's wand?",
        answers: [
            {text: "Dragon heartstring", correct: false},
            {text: "Phoenix feather", correct: false},
            {text: "Unicorn hair", correct: true},
            {text: "Veela hair", correct: false}
        ]
    },
    {
        question: "Which Horcrux did Harry accidentally destroy while hunting for Horcruxes?",
        answers: [
            {text: "Slytherin's locket", correct: false},
            {text: "Marvolo Gaunt's ring", correct: false},
            {text: "Nagini", correct: false},
            {text: "Tom Riddle's diary", correct: true}
        ]
    },
    {
        question: "What is the name of the three-headed dog guarding the trapdoor to the Philosopher's Stone?",
        answers: [
            {text: "Norbert", correct: false},
            {text: "Fluffy", correct: true},
            {text: "Buckbeak", correct: false},
            {text: "Aragog", correct: false}
        ]
    },
    {
        question: "What magical ability does Luna Lovegood possess?",
        answers: [
            {text: "Legilimency", correct: false},
            {text: "Parseltongue", correct: false},
            {text: "Divination", correct: false},
            {text: "Seeing Thestrals", correct: true}
        ]
    },
    {
        question: "Who is the head of the Malfoy family in the Harry Potter series?",
        answers: [
            {text: "Lucius Malfoy", correct: true},
            {text: "Draco Malfoy", correct: false},
            {text: "Bellatrix Lestrange", correct: false},
            {text: "Severus Snape", correct: false}
        ]
    },
    {
        question: "What is the name of Hagrid's pet spider in the Forbidden Forest?",
        answers: [
            {text: "Buckbeak", correct: false},
            {text: "Aragog", correct: true},
            {text: "Fluffy", correct: false},
            {text: "Dobby", correct: false}
        ]
    }
]