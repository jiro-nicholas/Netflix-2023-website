"use strict";
const toggleBtn = document.querySelectorAll(".faq-toggle");
const titles = document.querySelectorAll(".faq-title");

toggleBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("active");
  });
});

titles.forEach((title) => {
  title.addEventListener("click", () => {
    title.parentNode.classList.toggle("active");
  });
});

// function revealItem(e) {
//   removeContentB();
//   removeContentT();

//   this.parentNode.classList.add("active");
// }

// function removeContentB() {
//   toggleBtn.forEach((btn) => btn.parentNode.classList.toggle("active"));
// }

// function removeContentT() {
//   titles.forEach((title) => title.parentNode.classList.remove("active"));
// }
