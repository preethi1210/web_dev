document.addEventListener('DOMContentLoaded', function() {
    let passwordLength = 10; // Default password length
    let password = ''; // Generated password

    // DOM elements
    const inputSlider = document.getElementById('inputSlider');
    const lengthDisplay = document.getElementById('lengthDisplay');
    const generateBtn = document.getElementById('generateBtn');
    const passwordField = document.getElementById('password');
    const indicator = document.getElementById('indicator');
    const copyBtn = document.getElementById('copyBtn');
    const checkboxes = {
        uppercase: document.getElementById('UpChar'),
        lowercase: document.getElementById('LowChar'),
        numbers: document.getElementById('Num'),
        symbols: document.getElementById('Sym')
    };

    // Initialize slider and display
    inputSlider.value = passwordLength;
    lengthDisplay.textContent = passwordLength;

    // Event listeners
    inputSlider.addEventListener('input', function() {
        passwordLength = inputSlider.value;
        lengthDisplay.textContent = passwordLength;
        updateIndicator();
    });

    generateBtn.addEventListener('click', function() {
        password = generatePassword(passwordLength);
        passwordField.value = password;
        updateIndicator();
    });

    Object.values(checkboxes).forEach(checkbox => {
        checkbox.addEventListener('change', updateIndicator);
    });

    copyBtn.addEventListener('click', function() {
        const password = passwordField.value;
        if (password) {
            navigator.clipboard.writeText(password).then(() => {
                copyBtn.classList.add('success');
                setTimeout(() => {
                    copyBtn.classList.remove('success');
                }, 2000); // Remove success indicator after 2 seconds
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        }
    });
    

    // Function to generate password
    function generatePassword(length) {
        let charset = '';
        if (checkboxes.uppercase.checked) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (checkboxes.lowercase.checked) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (checkboxes.numbers.checked) charset += '0123456789';
        if (checkboxes.symbols.checked) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

        let password = '';
        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }

    // Function to set indicator color
    function updateIndicator() {
        const length = passwordLength;
        indicator.className = '';
        if (length <= 5) {
            indicator.classList.add('weak');
        } else if (length >5 && length<=10) {
            indicator.classList.add('medium');
        } else {
            indicator.classList.add('strong');
        }
    }

    updateIndicator();
});
