/**
 * @constant {DOM}
 */
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

/**
 * @type {number}
 */
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    // * setting the logic of the counter
    styles.contains("decrease")
      ? count--
      : styles.contains("increase")
      ? count++
      : (count = 0);

    // *  Changing colors according to value
    count > 0
      ? (value.style.color = "green")
      : count < 0
      ? (value.style.color = "red")
      : (value.style.color = "#222");
    value.textContent = count;
  });
});
