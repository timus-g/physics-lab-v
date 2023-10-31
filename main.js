// main.js

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {

    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add an alert on button click
    document.querySelector('form button').addEventListener('click', function () {
        alert('Thank you for reaching out!');
    });

    // You can add more JavaScript functionality as needed

});
