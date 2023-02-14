const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');

emailInput.addEventListener('input', function() {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
    emailError.style.display = 'block';
  } else {
    emailError.style.display = 'none';
  }
});
passwordInput.addEventListener('input', function() {
  if (!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/.test(passwordInput.value)) {
    passwordError.style.display = 'block';
  } else {
    passwordError.style.display = 'none';
  }
});

