// Example functionality for adding items to cart
let cart = [];

function addToCart(item) {
    cart.push(item);
    alert("Added to cart!");
}

function checkout() {
    alert("Proceeding to checkout...");
}

// JavaScript for Image Carousel
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showNextImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
}

// Change image every 3 seconds
setInterval(showNextImage, 3000);

// JavaScript for Booking Request Form
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting to server

    const fullName = document.getElementById('fullName').value;
    const eventDate = document.getElementById('eventDate').value;

    // Display a confirmation message
    alert(`Thank you, ${fullName}! Your request to attend on ${eventDate} has been received. We’ll be in touch soon.`);

    // Optionally, reset the form after submission
    event.target.reset();
});

// JavaScript for searching products
function filterProducts() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const products = document.querySelectorAll(".product-card");

    products.forEach(function(product) {
        const productName = product.querySelector("h3").textContent.toLowerCase();
        if (productName.indexOf(searchQuery) !== -1) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
}