function validateLogin(event) {
    event.preventDefault(); // Prevent form submission

    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password match the correct credentials
    if (username === 'ADMIN' && password === 'ADMIN') {
        // Redirect to the dashboard if login is successful
        window.location.href = 'dashboard.html'; // หน้า Dashboard

    } else {
        // Display error message if login fails
        document.getElementById('error-message').style.display = 'block';
    }
}
