const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

const sidebarToggle = () => {
  //   sidebar.classList.contains("show-sidebar")
  //     ? sidebar.classList.remove("show-sidebar")
  //     : sidebar.classList.add("show-sidebar");
  sidebar.classList.toggle("show-sidebar");
};

const removeClass = () => {
  sidebar.classList.remove("show-sidebar");
};

toggleBtn.addEventListener("click", sidebarToggle);
closeBtn.addEventListener("click", removeClass);
