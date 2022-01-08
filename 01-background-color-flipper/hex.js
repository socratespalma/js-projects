/**
 * @constant {array}
 */
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

/**
 * @constant {DOM}
 */
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

/**
 * This is a function that changes the background color based on different HEX codes created randomly
 */
const changeColorHEX = () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
};

/**
 * This is a function that generates a random number
 * @returns {number}
 */
const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};

btn.addEventListener("click", changeColorHEX);
