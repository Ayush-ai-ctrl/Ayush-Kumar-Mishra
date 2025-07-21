document.addEventListener("DOMContentLoaded", () => {
  const faqBoxes = document.querySelectorAll(".faq-box");

  faqBoxes.forEach((box) => {
    const header = box.querySelector(".faq-header");

    header.addEventListener("click", () => {
      box.classList.toggle("open");
    });
  });
});