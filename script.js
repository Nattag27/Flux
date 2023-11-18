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

var cartCount = 0;

function openCart() {
    // Här kan du lägga till koden för att öppna kundvagnen eller navigera till kundvagnssidan.
    // Exempel: window.location.href = "kundvagn.html";
}

// Funktion för att uppdatera antalet varor i kundvagnen
function updateCartCount(count) {
    cartCount = count;
    document.getElementById('cartCount').innerText = cartCount;
}

// Anropa denna funktion när du vill lägga till en vara i kundvagnen
function addToCart() {
    updateCartCount(cartCount + 1);
}

// Anropa denna funktion när du vill ta bort en vara från kundvagnen
function removeFromCart() {
    if (cartCount > 0) {
        updateCartCount(cartCount - 1);
    }
}