const words = [
    "javascript", "developer", "coding", "challenge", "programming", 
    "game", "design", "html", "css", "react", "node", "python", 
    "java", "algorithm", "data" , "ruby" , "whizrobo" , "robotics" , "internet of things "
];

let currentWord = "";
let score = 0;
let time = 60;
let isPlaying = false;

const wordElement = document.getElementById("word");
const inputElement = document.getElementById("input");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const startButton = document.getElementById("start-button");

startButton.addEventListener("click", startGame);
inputElement.addEventListener("input", checkInput);

function startGame() {
    isPlaying = true;
    score = 0;
    time = 60;
    inputElement.disabled = false;
    inputElement.value = "";
    inputElement.focus();
    feedbackElement.textContent = "";
    startButton.style.display = "none";
    scoreElement.textContent = score;
    timeElement.textContent = time;
    showNewWord();
    setInterval(updateTime, 1000);
}

function showNewWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    wordElement.textContent = currentWord;
}

function checkInput() {
    if (inputElement.value.toLowerCase() === currentWord) {
        score++;
        scoreElement.textContent = score;
        inputElement.value = "";
        showNewWord();
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "Keep trying!";
        feedbackElement.style.color = "red";
    }
}

function updateTime() {
    if (isPlaying) {
        time--;
        timeElement.textContent = time;
        if (time === 0) {
            isPlaying = false;
            inputElement.disabled = true;
            feedbackElement.textContent = "Game Over! Your final score is: " + score;
            startButton.style.display = "inline-block";
        }
    }
}
