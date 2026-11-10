// ZEL'S HAIR COLLECTION
// Shared website interactions

document.addEventListener("DOMContentLoaded", () => {

  // MOBILE NAVIGATION
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", isOpen);
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
      );
    });

    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }


  // CURRENT YEAR
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  // NEWSLETTER DEMO
  const newsletterForm = document.getElementById("newsletterForm");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const emailInput = document.getElementById("newsletterEmail");
      const message = newsletterForm.querySelector(".form-message");

      if (emailInput && message && emailInput.value.trim()) {
        message.textContent =
          "Thank you for your interest! Newsletter registration will be available soon.";

        emailInput.value = "";
      }
    });
  }


  // SHOPPING BAG COUNT
  const cartCount = document.querySelector(".cart-count");

  if (cartCount) {
    const savedCart = JSON.parse(
      localStorage.getItem("zelHairCart") || "[]"
    );

    const totalItems = savedCart.reduce(
      (total, item) => total + (item.quantity || 1),
      0
    );

    cartCount.textContent = totalItems;
  }


  // SEARCH PLACEHOLDER
  const searchButton = document.querySelector(".search-toggle");

  if (searchButton) {
    searchButton.addEventListener("click", () => {
      alert("Product search is coming soon.");
    });
  }


  // SHOPPING BAG PLACEHOLDER
  const cartButton = document.querySelector(".cart-toggle");

  if (cartButton) {
    cartButton.addEventListener("click", () => {
      alert("Your shopping bag will be available soon.");
    });
  }


  // WHATSAPP PLACEHOLDER
  const whatsappButton = document.querySelector(".whatsapp-float");

  if (whatsappButton) {
    whatsappButton.addEventListener("click", () => {
      alert("WhatsApp support will be connected once the business number is confirmed.");
    });
  }

});
