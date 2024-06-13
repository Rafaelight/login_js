const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar credenciales (en este caso, solo verificamos que sean "admin" y "password")
    if (username === 'admin' && password === 'password') {
        // Redirigir a la página deseada
        window.location.href = 'welcome.html';
    } else {
        alert('Credenciales incorrectas');
    }
});