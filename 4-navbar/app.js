// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

/**
 * @constant {DOM}
 */
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

/**
 * A function that toggles the 'show-links' class
 */
function navbarToggle() {
  //   links.classList.contains("show-links")
  //     ? links.classList.remove("show-links")
  //     : links.classList.add("show-links");
  links.classList.toggle("show-links");
}

navToggle.addEventListener("click", navbarToggle);
