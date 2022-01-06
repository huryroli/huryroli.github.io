let seconds = 25 * 60;
const clock = document.querySelector(".clock");
const section = document.querySelector("section");
const title = document.querySelector(".title");
let resting = false;

const beepSound = new Audio("./assets/Ding-sound-effect.mp3");

displayTime(seconds);

const countDown = setInterval(() => {
  seconds--;
  displayTime(seconds);
  if (seconds === 0 && resting == false) {
    seconds = 5 * 60;
    displayTime(seconds);
    section.style.backgroundColor = "#e9c46a";
    title.textContent = "Resting";
    resting = true;
    beepSound.play();
  } else if (seconds === 0 && resting) {
      seconds = 25 * 60;
      displayTime(seconds);
      resting = false;
      section.style.backgroundColor = "#2a9d8f";
      title.textContent = "Learning";
      beepSound.play();
  }
}, 1000);

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  clock.textContent = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
}