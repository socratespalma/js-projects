/**
 * @constant {DOM}
 */
const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay");

/**
 * This is a funtion that adds a class to open a modal
 */
function openModal() {
  modalOverlay.classList.add("open-modal");
}

/**
 * This is a function that removes a class to close a modal
 */
function removeModal() {
  modalOverlay.classList.remove("open-modal");
}

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", removeModal);
