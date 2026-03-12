// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Swiper Hero Slider
const swiper = new Swiper('.hero-slider', {
  loop: true,
  autoplay: { delay: 4000, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
});
