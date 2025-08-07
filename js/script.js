// Heart burst on click
document.addEventListener('click', function (e) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = `${e.clientX}px`;
  heart.style.top = `${e.clientY}px`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
});

// Floating hearts periodically
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.top = '100%';
  heart.style.opacity = Math.random();
  heart.style.animationDuration = 4 + Math.random() * 4 + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}, 500);

// Fade-in on page load
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Slideshow logic for .slide images
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
if (slides.length) {
  showSlide();
  setInterval(() => {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
  }, 3000);
}

function showSlide() {
  slides.forEach((slide, i) => {
    slide.style.display = i === 0 ? 'block' : 'none';
  });
}
