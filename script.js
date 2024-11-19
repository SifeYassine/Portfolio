// Animation for skill cards
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

// Skill cards hover effect
document.querySelectorAll(".skill-card").forEach((card) => {
  observer.observe(card);

  card.addEventListener("mouseenter", () => {
    card.classList.add("highlight");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("highlight");
  });
});
