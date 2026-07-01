document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  const form = document.querySelector("#contact-form");
  const status = document.querySelector(".form-status");

  if (form && status) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      status.textContent = "Thanks! We'll get back to you within a day.";
      status.classList.add("success");
      form.reset();
    });
  }
});
