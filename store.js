let currentSlides = [0, 0, 0, 0]; // Track the current slide for each carousel
const slideWidth = 100; // Percentage width of each slide (assuming one slide takes 100% of the carousel's width)

function showSlide(carouselIndex, index) {
    const items = document.querySelectorAll(`.carousel:nth-of-type(${carouselIndex + 1}) .carousel-item`);
    const totalItems = items.length;

    // Calculate the correct index, wrapping around if necessary
    currentSlides[carouselIndex] = (index + totalItems) % totalItems;

    // Move the carousel to the correct position
    const newTransformValue = -currentSlides[carouselIndex] * slideWidth;
    const carouselInner = document.querySelector(`.carousel:nth-of-type(${carouselIndex + 1}) .carousel-inner`);
    carouselInner.style.transform = `translateX(${newTransformValue}%)`;
}

function nextSlide(carouselIndex) {
    showSlide(carouselIndex, currentSlides[carouselIndex] + 1);
}

function prevSlide(carouselIndex) {
    showSlide(carouselIndex, currentSlides[carouselIndex] - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    currentSlides.forEach((_, idx) => showSlide(idx, 0));
});
