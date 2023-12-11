document.addEventListener("DOMContentLoaded", function() {
    var nameInput = document.getElementById("fname");
    var emailInput = document.getElementById("lname");
    var messageInput = document.getElementById("email");
    var submitButton = document.getElementById("submit-button");
    var clearButton = document.getElementById("clear-button");
    var contactForm = document.getElementById("contact-form");
    var outputDiv = document.createElement("div");

    submitButton.addEventListener("click", function(event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Validate the first name
        var name = nameInput.value;
        if (!isNameValid(name)) {
            alert("First name must contain at least one uppercase letter and at least three digits");
            return;
        }

        // Validate other fields
        var email = emailInput.value;
        var message = messageInput.value;

        if (!isFieldValid(email) || !isFieldValid(message)) {
            alert("All fields must be filled out");
            return;
        }

        alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);

        outputDiv.innerHTML = "Name: " + name + "<br>Email: " + email + "<br>Message: " + message;
        document.body.appendChild(outputDiv);
    });

    clearButton.addEventListener("click", function() {
        contactForm.reset();
        outputDiv.innerHTML = ""; // Clear the output div when clearing the form
    });

    function isNameValid(name) {
        // Check for an uppercase letter and at least three digits
        return /[A-Z]/.test(name) && /\d{3,}/.test(name);
    }

    function isFieldValid(value) {
        // Check if the field is not empty
        return value.trim() !== "";
    }
});