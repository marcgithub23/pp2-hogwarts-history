/* jshint esversion: 8 */

// Declare const variables
const homeScreen = document.getElementById('home-screen');
const numberOfQuestions = document.getElementById('no-of-ques');
const usernameInput = document.getElementById('username');
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const quitButton = document.getElementById('quit-btn');
const homeButton = document.getElementById('home-btn');
const playAgainButton = document.getElementById('play-again-btn');
const quizScreen = document.getElementById('quiz-screen');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultsScreen = document.getElementById('results-screen');
const questionProgress = document.getElementById('question-progress');
const totalScoreElement = document.getElementById('total-score');

// Declare let variables
let username = "";
let shuffledQuestions;
let currentQuestionIndex;
let questionCounter = 0;
let score = 0;
let percent;
let message;

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Number will automatically match if questions will be added or removed in future updates; Credit: Stack Overflow
    numberOfQuestions.innerHTML = parseInt(questions.length);
    
    // Credit: Juliia Konovalova, my mentor
    usernameInput.addEventListener('change', validateInput);

    startButton.addEventListener('click', startGame);

    nextButton.addEventListener('click', () => {
        if (currentQuestionIndex < shuffledQuestions.length) {
            handleNextButton();
        }
    });

    playAgainButton.addEventListener('click', restartGame);

    quitButton.addEventListener('click', quitGame);

    homeButton.addEventListener('click', goHome);
});

// Functions

/**
 * Validate username input to exclude front and end trailing spaces and special characters
 */
function validateInput() {
    username = this.value;
    // Credit: Usman Haider and Stack Overflow
    const isValid = /^[a-zA-Z0-9 ]+$/.test(username.trim());
    if (!isValid) {
        alert("Invalid username. Please don't use special characters.");
    }
}

/**
 * Start quiz when a username is entered; Credit: Web Dev Simplified
 */
function startGame() {
    if (username.length === 0) {
        alert('Please enter a username.');
    } else {
        homeScreen.classList.add('hide');
        quizScreen.classList.remove('hide');
        // Shuffle question order
        shuffledQuestions = questions.sort(() => Math.random() - 0.5);
        // Initialise question index, counter, and score to 0 at the start of quiz
        currentQuestionIndex = 0;
        questionCounter = 0;
        score = 0;
        setNextQuestion();
    }
}

/**
 * Set next question with a reset state, show question, increase question counter, and update question progress
 */
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    questionCounter++;
    questionProgress.innerText = `Question ${questionCounter} of ${shuffledQuestions.length}`;
}

/**
 * Show question and answer options from "questions" const array variable
 */
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        // Create a button element
        const button = document.createElement('button');
        // Insert answer option text from "questions" const array variable into each button created
        button.innerText = answer.text;
        // Apply btn class css styling
        button.classList.add('btn');
        if (answer.correct) {
            // Set custom data attribute of button to correct if answer option is correct
            button.dataset.correct = answer.correct;
        }
        // Add created buttons with inserted answer options to answer buttons div
        answerButtonsElement.appendChild(button);
        button.addEventListener('click', selectAnswer);
    });
}

/**
 * Reset to a state of hidden next button and no answer button options
 */
function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        // Remove any existing answer button options to reset to a blank state to set for the next question
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

/**
 * Execute when an answer button is selected; Credit: GreatStack
 */
function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        // If selected answer is correct, apply correct class css styling and increase score by 1
        selectedButton.classList.add("correct");
        score++;
    } else {
        // Otherwise apply wrong class css styling
        selectedButton.classList.add("wrong");
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        // Apply correct class css styling to the correct answer option button if it wasn't already selected by user as their answer
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        // Prevent users from selecting another answer once they've selected their first answer
        button.disabled = true;
    });
    nextButton.classList.remove('hide');
}

/**
 * Handle next button functionality depending on question progress
 */
function handleNextButton() {
    // Increment question index when next button is clicked
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        // Continue quiz if the current question just answered is not the last question
        setNextQuestion();
    } else {
        // Otherwise continue to results screen display and show score
        quizScreen.classList.add('hide');
        resultsScreen.classList.remove('hide');
        showScore();
    }
}

/**
 * Show total score achieved with a template literal message
 */
function showScore() {
    let rawPercent = (score / shuffledQuestions.length) * 100;
    percent = Math.round(rawPercent);
    if (percent < 40) {
        message = "you failed, better luck next time!";
    } else if (percent >= 40 && percent <= 44) {
        message = "you passed, but you can do better!";
    } else if (percent >= 45 && percent <= 49) {
        message = "you achieved Third Class Honours, but there's room for improvement!";
    } else if (percent >= 50 && percent <= 59) {
        message = "you achieved Lower Second Class Honours, well done!";
    } else if (percent >= 60 && percent <= 69) {
        message = "you achieved Upper Second Class Honours, excellent job!";
    } else if (percent >= 70 && percent <=99) {
        message = "you achieved First Class Honours, stellar job!";
    } else if (percent === 100) {
        message = "you achieved a perfect grade, perfect job!";
    }
    totalScoreElement.innerHTML = `Dear ${username},<br>
    Thank you for taking the quiz. Please find below your report card.<br>
    Student: ${username}<br>
    Total score: ${score} out of ${shuffledQuestions.length}<br>
    Percentage: ${percent}%<br>
    Overall, ${message}`;
}

/**
 * Restart game and re-initialise question counter, index, and score back to 0
 */
function restartGame() {
    resultsScreen.classList.add('hide');
    quizScreen.classList.remove('hide');
    // Reshuffle questions
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    // Re-initialise question index, counter, and score to 0
    questionCounter = 0;
    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
}

/**
 * Quit game at any point of the quiz and go back to home screen display with a confirmation message
 */
function quitGame() {
    // Credit: W3Schools
    confirm("Are you sure you want to quit?");
    quizScreen.classList.add('hide');
    homeScreen.classList.remove('hide');
    usernameInput.value = "";
}

/**
 * Go back to home screen display from the results screen display
 */
function goHome() {
    resultsScreen.classList.add('hide');
    homeScreen.classList.remove('hide');
    usernameInput.value = "";
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
];