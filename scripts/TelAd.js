// Get form element
const form = document.querySelector('form');

// Add event listener to form submit
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validate form inputs
  if (name.trim() === '') {
    alert('Please enter your name.');
    return;
  }

  if (email.trim() === '') {
    alert('Please enter your email.');
    return;
  }

  if (message.trim() === '') {
    alert('Please enter your message.');
    return;
  }

  // Submit form data to server
  submitForm(name, email, message);
});

// Function to submit form data to server
function submitForm(name, email, message) {
  // You can use AJAX or fetch API to send the form data to the server
  // Example using fetch API
  fetch('submit_form.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, message })
  })
  .then(response => response.json())
  .then(data => {
    // Handle server response
    console.log(data);
    alert('Form submitted successfully!');
    form.reset(); // Reset form inputs
  })
  .catch(error => {
    console.error(error);
    alert('An error occurred. Please try again later.');
  });
}


$(document).ready(function() {
    $('.logo-carousel').slick({
        infinite: true,
        slidesToShow: 4, // Number of logos to show at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2 // Adjust for smaller screens
                }
            }
        ]
    });
});