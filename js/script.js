// Slide Show (page3.html)
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
function showSlides() {
  slides.forEach(slide => slide.style.display = "none");
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
if (slides.length) showSlides();

// Floating hearts (page2.html)
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart-float";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}, 800);
