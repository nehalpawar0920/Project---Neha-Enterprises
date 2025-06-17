// Contact Form Submission Logic
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message Sent Successfully!');
    document.getElementById('contact-form').reset();
});
