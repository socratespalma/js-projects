/**
 * @constant {array}
 */
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

/**
 * @constant {DOM}
 */
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

/**
 * A function that changes the background color according to a random number
 */
function changeColor() {
  // get random number between 0 - 3
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
}

/**
 * A function that creates a random number based on "colors" array's length
 * @returns {number}
 */
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

btn.addEventListener("click", changeColor);
