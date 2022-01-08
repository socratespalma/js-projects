/**
 * @constant {DOM}
 */
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

/**
 * This is a function that toggles the 'show-sidebar' class
 */
const sidebarToggle = () => {
  //   sidebar.classList.contains("show-sidebar")
  //     ? sidebar.classList.remove("show-sidebar")
  //     : sidebar.classList.add("show-sidebar");
  sidebar.classList.toggle("show-sidebar");
};

/**
 * This is a function that removes the 'show-sidebar' class
 */
const removeClass = () => {
  sidebar.classList.remove("show-sidebar");
};

toggleBtn.addEventListener("click", sidebarToggle);
closeBtn.addEventListener("click", removeClass);
