let currentSlides = [0, 0, 0, 0]; // Track the current slide for each carousel
const slideWidth = 100; // Percentage width of each slide (assuming one slide takes 100% of the carousel's width)

// Function to show the correct slide for a carousel
function showSlide(carouselIndex, index) {
    const carousel = document.querySelectorAll('.carousel')[carouselIndex];
    const items = carousel.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Calculate the correct index, wrapping around if necessary
    currentSlides[carouselIndex] = (index + totalItems) % totalItems;

    // Move the carousel to the correct position
    const newTransformValue = -currentSlides[carouselIndex] * slideWidth;
    const carouselInner = carousel.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(${newTransformValue}%)`;
}

// Function to move to the next slide
function nextSlide(carouselIndex) {
    showSlide(carouselIndex, currentSlides[carouselIndex] + 1);
}

// Function to move to the previous slide
function prevSlide(carouselIndex) {
    showSlide(carouselIndex, currentSlides[carouselIndex] - 1);
}

// Initialize carousels on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    currentSlides.forEach((_, idx) => showSlide(idx, 0));
});


// Cart functionality
let cart = []; // Array to hold cart items

// Function to handle Add to Cart
function addToCart(product, price) {
    // Add product to the cart
    cart.push({ product, price });

    // Update the cart display
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItemsElement = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');

    // Clear the current cart display
    cartItemsElement.innerHTML = '';

    // Update cart items
    let total = 0;
    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.textContent = `${item.product} - Rs. ${item.price}`;
        cartItemsElement.appendChild(cartItemElement);

        // Calculate total price
        total += parseFloat(item.price);
    });

    // Update total in the cart
    cartTotalElement.textContent = total.toFixed(2);
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = button.getAttribute('data-price');
        addToCart(product, price);
    });
});

// Checkout and payment processing
function processPayment(event) {
    event.preventDefault(); // Prevent form submission

    // Get payment details
    const cardName = document.getElementById('cardName').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Simple validation
    if (!cardName || !cardNumber || !expiryDate || !cvv) {
        alert('Please fill in all payment details.');
        return;
    }

    // Simulate payment processing
    alert('Payment processed successfully!');

    // Clear the cart after payment
    cart = [];
    updateCart();

    // Reset the payment form
    document.getElementById('paymentForm').reset();
}

// Add event listener to the payment form
document.getElementById('paymentForm').addEventListener('submit', processPayment);

// Initialize all carousels at slide 0 on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    currentSlides.forEach((_, idx) => showSlide(idx, 0));
});
