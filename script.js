function toggleForm() {
    var loginForm = document.getElementById('loginForm');
    var toggleButton = document.getElementById('toggleFormButton');
    var formLabel = document.getElementById('formLabel');

    if (loginForm && toggleButton && formLabel) {
        var isRegisterForm = toggleButton.innerText === 'Bli medlem';

        if (isRegisterForm) {
            loginForm.innerHTML = `
                <label for="email">E-post:</label>
                <input type="email" id="email" name="email" required>

                <label for="password">Lösenord:</label>
                <input type="password" id="password" name="password" required>

                <button type="button" onclick="login()">Logga in</button>
            `;
            if (formLabel) {
                formLabel.innerText = 'Logga in';
            }
            toggleButton.innerText = 'Bli medlem';
        } else {
            loginForm.innerHTML = `
                <label for="email">E-post:</label>
                <input type="email" id="email" name="email" required>

                <label for="newPassword">Nytt lösenord:</label>
                <input type="password" id="newPassword" name="newPassword" required>

                <button type="button" onclick="register()">Registrera</button>
            `;
            if (formLabel) {
                formLabel.innerText = 'Bli medlem';
            }
            toggleButton.innerText = 'Logga in';
        }
    }
}

function login() {
   
    console.log('Inloggningsförsök');
}

function register() {
  
    console.log('Registreringsförsök');
}