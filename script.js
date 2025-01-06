tailwind.config = {
  darkMode: "class",
};

// Theme toggle functionality
const themeToggleButtons = document.querySelectorAll(
  "#theme-toggle, #theme-toggle-mobile"
);
const html = document.documentElement;

// Toggle theme
themeToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.theme = html.classList.contains("dark") ? "dark" : "light";
  });
});

// Mobile menu functionality
function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("hidden");
}

document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("mobileMenu").classList.add("hidden");
  });
});

// Carousel functionality
function initializeCarousel() {
  const carousels = document.querySelectorAll(".carousel-container");

  carousels.forEach((carousel) => {
    const slides = carousel.querySelectorAll(".carousel-slide");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");
    const dotsContainer = carousel.querySelector(".carousel-dots");
    let currentSlide = 0;

    // Hide all slides except the first one
    slides.forEach((slide, index) => {
      if (index !== 0) {
        slide.style.display = "none";
      }

      // Create dot for each slide
      const dot = document.createElement("button");
      dot.classList.add(
        "w-2",
        "h-2",
        "rounded-full",
        "bg-gray-300",
        "dark:bg-gray-600"
      );

      if (index === 0) {
        dot.classList.add("bg-gray-800", "dark:bg-white");
      }

      dot.addEventListener("click", () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });

    function updateDots() {
      const dots = dotsContainer.querySelectorAll("button");
      dots.forEach((dot, index) => {
        if (index === currentSlide) {
          dot.classList.add("bg-gray-800", "dark:bg-white");
          dot.classList.remove("bg-gray-300", "dark:bg-gray-600");
        } else {
          dot.classList.remove("bg-gray-800", "dark:bg-white");
          dot.classList.add("bg-gray-300", "dark:bg-gray-600");
        }
      });
    }

    function goToSlide(index) {
      slides[currentSlide].style.display = "none";
      currentSlide = index;
      if (currentSlide >= slides.length) currentSlide = 0;
      if (currentSlide < 0) currentSlide = slides.length - 1;
      slides[currentSlide].style.display = "block";
      updateDots();
    }

    // Event listeners for next and previous buttons
    nextBtn.addEventListener("click", () => goToSlide(currentSlide + 1));
    prevBtn.addEventListener("click", () => goToSlide(currentSlide - 1));
  });
}

// Initialize carousel when the page loads
document.addEventListener("DOMContentLoaded", initializeCarousel);
