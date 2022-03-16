const form = document.getElementById('form');
const firstname = document.getElementById('Firstname');
const Lastname = document.getElementById('Lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//Show input error message

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

//Email

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (Firstname.value == '') {
        showError(Firstname, 'Firstname is required');
    } else if (Firstname.value.match(/[0-9]/)) {
        showError(Firstname, 'Enter a valid name');
    } else {
        showSuccess(Firstname);
    }
    if (Lastname.value == '') {
        showError(Lastname, 'Lastname is required');
    } else if (Lastname.value.match(/[0-9]/)) {
        showError(Lastname, 'Enter a valid name');
    } else {
        showSuccess(Lastname);
    }
    if (email.value === '') {
        showError(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is not valid');
    } else {
        showSuccess(email);
    }

    if (password.value == '') {
        showError(password, 'Password is required');
    }
    if (password2.value == '') {
        showError(password2, 'password is required');
    }

    if (password = password2) {
        showError(password, 'password is not matching');
    }




});