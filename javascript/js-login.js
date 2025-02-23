document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Hardcoded credentials (for demo purposes)
    const validUsername = "admin";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        window.location.href = "https://github.com/Iwadss/HTML/blob/main/page/dashboard.html";
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
});