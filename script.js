function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "ADMIN" && password === "ADMIN") {
        alert("Login Successful!");
    } else {
        alert("Invalid Username or Password.");
    }
}
