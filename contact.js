document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (name && email && subject && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        clearForm();
    } else {
        alert("Please fill out all fields before submitting.");
    }
});

function clearForm() {
    document.getElementById("contactForm").reset();
}
