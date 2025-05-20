// Scroll to top
const scrollBtn = document.getElementById('scrollToTop');
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
};
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Dark mode toggle
const toggle = document.getElementById("toggle-mode");
toggle.onclick = () => {
  document.body.classList.toggle("dark-mode");
  toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
};
