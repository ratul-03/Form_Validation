// Selecting IDs and Classes
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const father = document.querySelector('#father');
const mother = document.querySelector('#mother');
const password = document.querySelector('#password');
const btn = document.querySelector('#btn');
let isValid = true;

// Event Listener
form.addEventListener('submit', event => {
  event.preventDefault();
  // Username recognition
  if (username.value === '') {
    alert('Please enter your username');
    isValid = false;
  }
  // Email recognition
  else if (email.value === '') {
    alert('Please enter your email');
    isValid = false;
  }
  // Email validation
  else if (!/\S+@\S+\.\S+/.test(email)) {
    // Basic email regex
    alert('Enter a valid email address!');
    isValid = false;
  }
  // Father's name recognition
  else if (father.value === '') {
    alert('Please enter your father\'s name');
    isValid = false;
  }
  // Mother's name recognition
  else if (mother.value === '') {
    alert('Please enter your mother\'s name');
    isValid = false;
  }
  // Password recognition
  else if (password.value === '') {
    alert("Please enter your password");
    isValid = false;
  }
  // Password validation
  else if (password.value.length < 8) {
    alert("Password must be at least 8 characters long");
    isValid = false;
  }
  // Form submission successfully
  else {
    alert("Form submitted successfully!");
    isValid = true;
  }
});
