# Form Validator

This project is a simple form validation app built using HTML, CSS, and JavaScript. It validates user inputs for username, email, father and mother’s names, and password, ensuring the required fields are filled and the password meets length criteria.

## Features
- **Validation Checks:**
  - Ensures all fields are filled before submission.
  - Validates that the password is at least 8 characters long.
- **Responsive Design:** The form is styled with CSS and adjusts well on different screen sizes.
- **Interactive Feedback:** Alerts users of missing or invalid input during form submission.

## Technologies Used
- **HTML**: For structuring the form elements.
- **CSS**: For styling the form, including fonts and layout.
- **JavaScript**: For dynamic validation and user interaction.

## How to Use
1. Clone the repository or copy the code files.
2. Open the `index.html` file in your web browser.
3. Fill out the form fields:
   - Username
   - Email
   - Father’s name
   - Mother’s name
   - Password
4. Click the **Submit** button.
5. Alerts will appear if any field is empty or if the password is less than 8 characters. Otherwise, a success message will be displayed.

## Folder Structure
```
project-folder/
|-- index.html      # Main HTML file
|-- style.css       # CSS for styling the form
|-- script.js       # JavaScript for form validation
```

## Preview
### Form Layout
![Form Validator Preview]https://formvalidorappwithjs.netlify.app

## Code Snippets
### JavaScript Validation Logic
```javascript
form.addEventListener('submit', event => {
  event.preventDefault();
  if (username.value === '') {
    alert('Please enter your username');
  } else if (email.value === '') {
    alert('Please enter your email');
  } else if (father.value === '') {
    alert('Please enter your father\'s name');
  } else if (mother.value === '') {
    alert('Please enter your mother\'s name');
  } else if (password.value === '') {
    alert('Please enter your password');
  } else if (password.value.length < 8) {
    alert('Password must be at least 8 characters long');
  } else {
    alert('Form submitted successfully!');
  }
});
```

## Customization
Feel free to update the styles in `style.css` or modify the JavaScript logic in `script.js` to meet your specific requirements.

## License
This project is open-source and available under the [MIT License](LICENSE).

---

### Feedback
If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.
