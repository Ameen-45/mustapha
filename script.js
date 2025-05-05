document.addEventListener("DOMContentLoaded", () => {
  // Hamburger toggle
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navbar ul");
  const navLinks = document.querySelectorAll(".navbar ul li a"); // Links inside the navbar

  // Toggle the menu when hamburger is clicked
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("open");
  });

  // Close the menu and scroll to section when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");  // Close the hamburger menu
      hamburger.classList.remove("open");  // Remove open state from hamburger
    });
  });

  // FAQ toggle (already implemented)
  const faqButtons = document.querySelectorAll(".faq-question");

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentlyOpen = document.querySelector(".faq-question.open");
      const answer = button.nextElementSibling;

      // Close currently open FAQ
      if (currentlyOpen && currentlyOpen !== button) {
        currentlyOpen.classList.remove("open");
        currentlyOpen.nextElementSibling.style.maxHeight = null;
      }

      // Toggle current FAQ
      button.classList.toggle("open");
      if (button.classList.contains("open")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = null;
      }
    });
  });

  // Auto-close FAQ on scroll
  let lastScrollY = window.scrollY;
  let faqOpen = false;

  const closeOpenFAQ = () => {
    const openBtn = document.querySelector(".faq-question.open");
    if (openBtn) {
      openBtn.classList.remove("open");
      openBtn.nextElementSibling.style.maxHeight = null;
      faqOpen = false;
    }
  };

  window.addEventListener("scroll", () => {
    const openBtn = document.querySelector(".faq-question.open");
    if (openBtn) {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) > 10) {
        closeOpenFAQ();
      }
      lastScrollY = currentScrollY;
    }
  });
});
