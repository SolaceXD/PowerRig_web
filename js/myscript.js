function handleLogin() {
    const email = document.querySelector('#loginModal input[type="email"]').value;
    const password = document.querySelector('#loginModal input[type="password"]').value;
    const usuario = document.querySelector('#loginModal input[type="text"]').value;

    if (email === "usuario@gmail.com" && password === "usuario" && usuario === "usuario") {
        document.querySelector('.navbar .btn-primary').style.display = 'none';
        const userImage = document.createElement('img');
        userImage.src = 'resources/img/channels4_profile.jpg';
        userImage.style.width = '40px';
        userImage.style.height = '40px';
        userImage.style.borderRadius = '50%';
        userImage.alt = 'User Image';
        document.querySelector('.navbar').appendChild(userImage);
        closeLoginModal();
    } else {
        alert('Credenciales incorrectas');
    }
}

function openLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'block';
}

// Function to close the login modal
function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'none';
}
