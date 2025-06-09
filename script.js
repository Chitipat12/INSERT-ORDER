// script.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get username and password input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Define valid users (for demonstration purposes)
    var users = {
        "USER": "USER",       // User credentials
        "MANAGER": "MANAGER", // Approver credentials
        "STORE": "STORE"      // Receiver credentials
    };

    // Check if the entered username and password match the predefined ones
    if (users[username] && users[username] === password) {
        // Redirect to Home page upon successful login
        window.location.href = "home.html"; // Update this with your desired next page URL
    } else {
        // Show error message if login fails
        document.getElementById("error-message").style.display = "block";
    }
});
