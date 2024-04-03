const hoverMe = document.querySelector('.hover-me');
const hoverTrigger = document.querySelector('.nav-links li:nth-child(6)');

// When the mouse enters the hover trigger, show the .hover-me div
hoverTrigger.addEventListener('mouseenter', () => {
  hoverMe.style.opacity = '1';
  hoverMe.style.visibility = 'visible';
});

// When the mouse leaves the hover trigger, do nothing
hoverTrigger.addEventListener('mouseleave', () => {});

// When the user clicks anywhere outside of the .hover-me div and outside the hover trigger, hide it
document.addEventListener('click', (event) => {
  if (!hoverMe.contains(event.target) && event.target !== hoverTrigger) {
    hoverMe.style.opacity = '0';
    hoverMe.style.visibility = 'hidden';
  }
});
const slides = document.querySelectorAll('.carousel__slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000);

showSlide(currentSlide);

