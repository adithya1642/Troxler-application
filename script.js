const timerElement = document.getElementById("timer");

// Initialize timer variables
let startTime = null;
let elapsedTime = null;
let timerInterval = null;

// Start the timer when 'a' is pressed
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyA" && !startTime) {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTimer, 10);
  }
});

// Stop the timer when 'z' is pressed
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyZ" && startTime) {
    clearInterval(timerInterval);
    elapsedTime = new Date().getTime() - startTime;
    displayElapsedTime();
    startTime = null;
  }
});

// Update the timer element every 10 milliseconds
function updateTimer() {
  const currentTime = new Date().getTime();
  const timeDiff = currentTime - startTime;
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);
  const milliseconds = Math.floor((timeDiff % 1000) / 10);

  // Display the elapsed time in the timer element
  timerElement.innerHTML = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds
    .toString()
    .padStart(2, "0")}`;
}

// Display the elapsed time when the timer stops
function displayElapsedTime() {
  alert(`Elapsed time: ${elapsedTime / 1000} s`);
}

// get all the circle elements
const circles = document.querySelectorAll(".circle");

// define an array of colors
const colors = [
  "rgb(255, 229, 225)",
  "rgb(255, 211, 205)",
  "rgb(255, 193, 185)",
  "rgb(255, 176, 165)",
  "rgb(255, 158, 145)",
  "rgb(255, 132, 115)",
  "rgb(255, 105, 85)",
  "rgb(255, 79, 55)",
  "rgb(255, 105, 85)",
  "rgb(255, 132, 115)",
  "rgb(255, 158, 145)",
  "rgb(255, 176, 165)",
  "rgb(255, 193, 185)",
  "rgb(255, 211, 205)",
  "rgb(255, 229, 225)",
];

const colors1 = [
  "rgb(235, 247, 233)",
  "rgb(221, 242, 218)",
  "rgb(208, 237, 203)",
  "rgb(194, 232, 188)",
  "rgb(180, 226, 174)",
  "rgb(153, 216, 144)",
  "rgb(126, 204, 116)",
  "rgb(99, 194, 86)",
  "rgb(126, 204, 116)",
  "rgb(153, 216, 144)",
  "rgb(180, 226, 174)",
  "rgb(194, 232, 188)",
  "rgb(208, 237, 203)",
  "rgb(221, 242, 218)",
  "rgb(235, 247, 233)",
];

const colors2 = [
  "rgb(255, 246, 225)",
  "rgb(255, 240, 205)",
  "rgb(255, 235, 185)",
  "rgb(255, 229, 165)",
  "rgb(255, 224, 145)",
  "rgb(255, 215, 115)",
  "rgb(255, 206, 85)",
  "rgb(255, 198, 55)",
  "rgb(255, 206, 85)",
  "rgb(255, 215, 115)",
  "rgb(255, 224, 145)",
  "rgb(255, 229, 165)",
  "rgb(255, 235, 185)",
  "rgb(255, 240, 205)",
  "rgb(255, 246, 225)",
];
// listen for keydown event on document
document.addEventListener("keydown", function (event) {
  // check if the key pressed is 'r'
  if (event.key === "r") {
    // loop through all the circles and change their border color to a shade of red
    circles.forEach((circle, index) => {
      circle.style.borderColor = colors[index % colors.length];
    });
  }

  if (event.key === "g") {
    // loop through all the circles and change their border color to a shade of red
    circles.forEach((circle, index) => {
      circle.style.borderColor = colors1[index % colors1.length];
    });
  }

  if (event.key === "y") {
    // loop through all the circles and change their border color to a shade of red
    circles.forEach((circle, index) => {
      circle.style.borderColor = colors2[index % colors2.length];
    });
  }
  if (event.key === "b") {
    // reload the page
    location.reload();
  }
});
