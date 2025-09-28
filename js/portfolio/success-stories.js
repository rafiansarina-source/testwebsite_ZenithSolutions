// Success Stories interactions (optional)
// Currently adds simple fade-in animation on scroll

document.addEventListener("DOMContentLoaded", function () {
  const stories = document.querySelectorAll(".story-card");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-story");
        }
      });
    },
    { threshold: 0.2 }
  );

  stories.forEach(story => {
    observer.observe(story);
  });
});
