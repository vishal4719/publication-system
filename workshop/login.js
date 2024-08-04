document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    console.log(result);
    const messageElement = document.getElementById('message');

    if (result.success) {
        localStorage.setItem('token', result.token);
        localStorage.setItem('role', result.role); // Store the role in localStorage

       window.location.href = 'dashboard.html';
    } else {
        messageElement.style.color = 'red';
        messageElement.textContent = 'Login failed: ' + result.message;
    }
});
