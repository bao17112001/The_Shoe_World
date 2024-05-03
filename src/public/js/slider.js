const btnPrev = document.querySelector(".arrow-left");
const btnNext = document.querySelector(".arrow-right");
const imgSliders = document.querySelectorAll(".img-js");
let currentSlide = 0;

function showSlide(index) {
  imgSliders[currentSlide].classList.remove("active");
  imgSliders[index].classList.add("active");
  currentSlide = index;
}

function nextSlide() {
  const nextIndex = (currentSlide + 1) % imgSliders.length;
  showSlide(nextIndex);
}

function prevSlide() {
  const prevIndex = (currentSlide - 1 + imgSliders.length) % imgSliders.length;
  showSlide(prevIndex);
}

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);

showSlide(currentSlide);

setInterval(nextSlide, 5000);
