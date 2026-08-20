  // Tab Switching Logic
        function switchTab(tabName) {
            const loginView = document.getElementById('view-login');
            const registerView = document.getElementById('view-register');
            const loginTab = document.getElementById('tab-login');
            const registerTab = document.getElementById('tab-register');

            // Reset errors on switch
            document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
            document.querySelectorAll('input').forEach(el => el.classList.remove('input-error'));

            if (tabName === 'login') {
                registerView.classList.remove('active');
                setTimeout(() => {
                    loginView.classList.add('active');
                }, 150); // slight delay for fade effect

                loginTab.className = "flex-1 py-sm rounded-full text-center text-body-md font-body-md font-bold bg-primary text-on-primary transition-colors duration-200";
                registerTab.className = "flex-1 py-sm rounded-full text-center text-body-md font-body-md font-medium text-on-surface-variant hover:text-primary transition-colors duration-200";
            } else {
                loginView.classList.remove('active');
                setTimeout(() => {
                    registerView.classList.add('active');
                }, 150);

                registerTab.className = "flex-1 py-sm rounded-full text-center text-body-md font-body-md font-bold bg-primary text-on-primary transition-colors duration-200";
                loginTab.className = "flex-1 py-sm rounded-full text-center text-body-md font-body-md font-medium text-on-surface-variant hover:text-primary transition-colors duration-200";
            }
        }

        // Password Visibility Toggle
        function togglePassword(inputId, iconId) {
            const input = document.getElementById(inputId);
            const icon = document.getElementById(iconId);
            
            if (input.type === "password") {
                input.type = "text";
                icon.textContent = "visibility";
            } else {
                input.type = "password";
                icon.textContent = "visibility_off";
            }
        }

        // Basic Form Validation
        function validateForm(e, formType) {
            e.preventDefault();
            let isValid = true;

            // Reset previous errors
            document.querySelectorAll(`#form-${formType} .error-message`).forEach(el => el.style.display = 'none');
            document.querySelectorAll(`#form-${formType} input`).forEach(el => el.classList.remove('input-error'));

            if (formType === 'login') {
                const identifier = document.getElementById('login-identifier');
                const password = document.getElementById('login-password');

                if (!identifier.value.trim()) {
                    showError(identifier, 'error-login-identifier');
                    isValid = false;
                }
                if (!password.value.trim()) {
                    showError(password, 'error-login-password');
                    isValid = false;
                }
            } else if (formType === 'register') {
                const name = document.getElementById('reg-name');
                const email = document.getElementById('reg-email');
                const phone = document.getElementById('reg-phone');
                const password = document.getElementById('reg-password');
                const terms = document.getElementById('reg-terms');

                if (!name.value.trim()) {
                    showError(name, 'error-reg-name');
                    isValid = false;
                }
                if (!email.value.trim() || !email.value.includes('@')) {
                    showError(email, 'error-reg-email');
                    isValid = false;
                }
                if (!phone.value.trim()) {
                    showError(phone, 'error-reg-phone');
                    isValid = false;
                }
                if (password.value.length < 8) {
                    showError(password, 'error-reg-password');
                    isValid = false;
                }
                if (!terms.checked) {
                    document.getElementById('error-reg-terms').style.display = 'block';
                    isValid = false;
                }
            }

            if (isValid) {
                // Simulate form submission success
                const btn = e.target.querySelector('button[type="submit"]');
                const originalText = btn.textContent;
                btn.textContent = "جاري التحميل...";
                btn.style.opacity = "0.7";
                
                setTimeout(() => {
                    alert('تمت العملية بنجاح! سيتم توجيهك الآن.');
                    btn.textContent = originalText;
                    btn.style.opacity = "1";
                }, 1500);
            }
        }

        function showError(inputElement, errorId) {
            inputElement.classList.add('input-error');
            document.getElementById(errorId).style.display = 'block';
        }