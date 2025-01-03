// Event listener for CTA button
document.getElementById('cta-button').addEventListener('click', function () {
    alert("Thanks for getting started with us!");
});

// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert(`Message sent by ${name} (${email})`);
        // You can add a function to actually send the data to a server here.
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
