let rightArr = document.querySelector(".right-arr");
let leftArr = document.querySelector(".left-arr");
let slider = document.querySelectorAll(".slider-item");
let dotsContainer = document.querySelector(".dots");

let current = 0;

// Create dots dynamically based on the number of slides
function createDots() {
  slider.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === current) dot.classList.add("active");
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });
}

// Update the active slide and dot
function updateSlide(newIndex) {
  slider[current].style.display = "none";
  document.querySelectorAll(".dot")[current].classList.remove("active");

  current = newIndex;

  slider[current].style.display = "block";
  document.querySelectorAll(".dot")[current].classList.add("active");
}

// Initialize the default state
function setDefault() {
  slider.forEach((slide, index) => {
    slide.style.display = index === current ? "block" : "none";
  });
  createDots();
}

// Handle dot click
dotsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("dot")) {
    const newIndex = parseInt(event.target.dataset.index, 10);
    updateSlide(newIndex);
  }
});

leftArr.onclick = function () {
  let newIndex = current + 1;
  if (newIndex >= slider.length) newIndex = 0; // Loop back to the first slide
  updateSlide(newIndex);
};

rightArr.onclick = function () {
  let newIndex = current - 1;
  if (newIndex < 0) newIndex = slider.length - 1; // Loop to the last slide
  updateSlide(newIndex);
};

setDefault();
