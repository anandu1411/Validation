function validateForm() {
    let isValid = true;
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';
    document.getElementById('confirmPasswordError').innerHTML = '';
    document.getElementById('phoneError').innerHTML = '';
    document.getElementById('dobError').innerHTML = '';

    const fullName = document.getElementById('fullname').value;
    if (fullName.length < 3) {
        document.getElementById('nameError').innerHTML = 'Name must be at least 3 characters long';
        isValid = false;
    }

    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerHTML = 'Please enter a valid email';
        isValid = false;
    }

    const password = document.getElementById('password').value;
    if (password.length < 8) {
        document.getElementById('passwordError').innerHTML = 'Password must be at least 8 characters long';
        isValid = false;
    }

    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerHTML = 'Passwords do not match';
        isValid = false;
    }

  

 

    return isValid;
}