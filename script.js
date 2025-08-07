// Heart animation on click
document.addEventListener('click', function (e) {
  let heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1000);
});

// Floating hearts every 0.5s
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "float-heart";
  heart.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}, 500);

// Page load animation class
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
