// Carousel Functionality
let currentSlide = 0;

function showSlide(index) {
    const items = document.querySelectorAll('.carousel-item');
    if (index >= items.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = items.length - 1;
    } else {
        currentSlide = index;
    }
    items.forEach((item, idx) => {
        item.style.transform = `translateX(${(idx - currentSlide) * 100}%)`;
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

// Shopping Cart Functionality
const cart = [];

function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cartTotal').textContent = total.toFixed(2);
}

function addToCart(event) {
    const product = event.target.dataset.product;
    const price = parseFloat(event.target.dataset.price);

    cart.push({ name: product, price: price });
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});

// Payment Processing
function processPayment(event) {
    event.preventDefault();
    alert('Payment processed successfully!');
    document.getElementById('paymentForm').reset();
    cart.length = 0;
    updateCart();
}
