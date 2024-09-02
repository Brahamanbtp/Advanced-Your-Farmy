// Carousel Functionality
let slideIndex = 0;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("carousel-item");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// Cart Functionality
let cart = [];

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", event => {
        const product = event.target.getAttribute("data-product");
        const price = parseFloat(event.target.getAttribute("data-price"));
        addToCart(product, price);
    });
});

function addToCart(product, price) {
    const cartItem = cart.find(item => item.product === product);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ product, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById("cartItems");
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");
        itemElement.innerHTML = `${item.product} - $${item.price.toFixed(2)} x ${item.quantity} = $${itemTotal.toFixed(2)}`;
        cartItemsContainer.appendChild(itemElement);
    });

    document.getElementById("cartTotal").textContent = total.toFixed(2);
}

// Payment Functionality
document.getElementById("paymentForm").addEventListener("submit", event => {
    event.preventDefault();

    const cardName = document.getElementById("cardName").value;
    const cardNumber = document.getElementById("cardNumber").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;

    if (cardName && cardNumber && expiryDate && cvv) {
        alert("Payment Successful!\nThank you for your purchase.");
        clearCart();
    } else {
        alert("Please fill out all payment details.");
    }
});

function clearCart() {
    cart = [];
    updateCart();
}
