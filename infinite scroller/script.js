let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");
let spanContainer = document.querySelector(".current-image-container");
let numberCount = document.querySelector(".number-count");

let images = document.querySelectorAll(".photo-container img");
let currentImage = 0;

let startX = 0;
let endX = 0;

function handleTouchStart(e) {
  startX = e.touches[0].clientX;
}

function handleTouchEnd(e) {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
}

function handleSwipe() {
  if (startX - endX > 50) {
    // swipe left, go to next image
    next();
  } else if (startX - endX < -50) {
    // swipe right, go to previous image
    prev();
  }
}

document.addEventListener("touchstart", handleTouchStart);
document.addEventListener("touchend", handleTouchEnd);

images.forEach((img, index) => {
  img.style.display = index === 0 ? "block" : "none";
});

function updateSpans() {
  Array.from(spanContainer.children).forEach((span, index) => {
    span.classList.toggle("active", index === currentImage);
  });
}

function updateNumberCount() {
  numberCount.textContent = `${currentImage + 1} / ${images.length}`;
}

function next() {
  images[currentImage].style.display = "none";
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].style.display = "block";
  updateSpans();
  updateNumberCount();
}

function prev() {
  images[currentImage].style.display = "none";
  currentImage = (currentImage - 1 + images.length) % images.length;
  images[currentImage].style.display = "block";
  updateSpans();
  updateNumberCount();
}

for (let i = 0; i < images.length; i++) {
  let span = document.createElement("span");
  span.classList.add("currentimage");
  span.addEventListener("click", () => {
    images[currentImage].style.display = "none";
    currentImage = i;
    images[currentImage].style.display = "block";
    updateSpans();
    updateNumberCount();
  });
  spanContainer.append(span);
}

nextButton.addEventListener("click", next);
prevButton.addEventListener("click", prev);

updateNumberCount();
updateSpans();
