// Toggling between Sign In and Sign Up
const signInBtn = document.querySelectorAll('.segmented-btn')[0];
const signUpBtn = document.querySelectorAll('.segmented-btn')[1];
const segmentedFocus = document.querySelector('.segmented-focus');

signInBtn.addEventListener('click', function() {
    signInBtn.setAttribute('aria-selected', 'true');
    signUpBtn.setAttribute('aria-selected', 'false');
    segmentedFocus.style.transform = 'translateX(0)';
});

signUpBtn.addEventListener('click', function() {
    signInBtn.setAttribute('aria-selected', 'false');
    signUpBtn.setAttribute('aria-selected', 'true');
    segmentedFocus.style.transform = 'translateX(100%)';
});

// Form Validation and Submission
const form = document.querySelector('.login');
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent actual form submission

    const emailInput = document.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    // Simple email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        // alert('Please enter a valid email address.');
        emailInput.focus();
    }
    else {
        alert(`Email entered: ${email}`);
        // Implement further login logic here
    }
});

// Handle Social Button Clicks
const socialButtons = document.querySelectorAll('.social-btn');
socialButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Social login clicked (to be implemented).');
    });
});