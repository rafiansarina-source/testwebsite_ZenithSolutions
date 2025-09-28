let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
document.querySelector(".carousel-prev").addEventListener("click", () => {
  showSlides(slideIndex -= 1);
});

document.querySelector(".carousel-next").addEventListener("click", () => {
  showSlides(slideIndex += 1);
});

// Dot controls
document.querySelectorAll(".dot").forEach(dot => {
  dot.addEventListener("click", (e) => {
    let index = parseInt(e.target.getAttribute("data-index"));
    showSlides(slideIndex = index);
  });
});

function showSlides(n) {
  let slides = document.querySelectorAll(".carousel-slide");
  let dots = document.querySelectorAll(".dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  slides.forEach(slide => slide.style.display = "none");
  dots.forEach(dot => dot.classList.remove("active"));

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// Auto slide every 4s
setInterval(() => {
  showSlides(slideIndex += 1);
}, 3000);
