const clock = document.querySelector(".clock");
const section = document.querySelector("section");
const title = document.querySelector(".title");
const startButton = document.querySelector(".start-btn");
const setupScreen = document.querySelector(".setup-interval-screen");
const clockFace = document.querySelector(".container");
const learnedCounter = document.querySelector(".learned span");
const restedCounter = document.querySelector(".rested span");

const beepSound = new Audio("./assets/Ding-sound-effect.mp3");

let resting = false;
let learned = 0;
let rested = 0;

startButton.addEventListener('click', () => {
  const learningTime = document.querySelector(".learning-time").value;
  const restingTime = document.querySelector(".resting-time").value;

  let seconds = learningTime * 60;

  displayTime(seconds);

  setupScreen.classList.add("fade-out");
  clockFace.classList.remove("fade-out");
  clockFace.classList.add("fade-in");

  setInterval(() => {
    seconds--;
    displayTime(seconds);
    if (seconds === 0 && resting == false) {
      beepSound.play();
      learned++;
      seconds = restingTime * 60;
      displayTime(seconds);
      section.style.backgroundColor = "#4361EE";
      title.textContent = "Resting";
      learnedCounter.textContent = learned;
      resting = true;
    } else if (seconds === 0 && resting) {
        beepSound.play(); 
        rested++;
        seconds = learningTime * 60;
        displayTime(seconds);
        resting = false;
        section.style.backgroundColor = "#B5179E";
        restedCounter.textContent = rested;
        title.textContent = "Learning";
    }
  }, 1000);
});

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  clock.textContent = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
}