function validateForm() {
    let isValid = true;

    // Clear all error messages
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';
    document.getElementById('confirmPasswordError').innerHTML = '';
   

    const fullName = document.getElementById('fullname').value;
    if (fullName.length < 5) {
        document.getElementById('nameError').innerHTML = ' should be atleast 5 characters long';
        isValid = false;
    }

    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerHTML = 'Please enter a valid email';
        isValid = false;
    }

    const password = document.getElementById('password').value;
    if (password.length < 7) {
        document.getElementById('passwordError').innerHTML = ' must be atleast 7 characters long';
        isValid = false;
    }

    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerHTML = 'Passwords do not match';
        isValid = false;
    }

    if(document.getElementById('address').value==""){
        document.getElementById('error').style.display="block";
        isValid=false;
    }else{
        document.getElementById('er4').style.display="none";
    }


    return isValid;
}