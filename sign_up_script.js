const form = document.getElementById('form');
const usernamefield = document.getElementById('usernamefield');
const emailfield = document.getElementById('emailfield');
const passfield = document.getElementById('passfield');
const passfield2 = document.getElementById('passfield2');
const telfield = document.getElementById('telfield');
let userCheck;
let emailCheck;
let passCheck;
let passCheck2;
let telcheck;


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();


    // If the inputs are check correctly:
    if (userCheck === true && passCheck === true && passCheck2 === true && telcheck === true) {
        // Gives a pop-up to notify user.
        window.alert('Sign up successful!');
        // redirects the webpage to login page.
        window.location.href = "login.html";

    }

})

function checkInputs() {
    // get the values from the inputs

    const userValue = usernamefield.value.trim();
    const emailValue = emailfield.value.trim();
    const passValue = passfield.value.trim();
    const passValue2 = passfield2.value.trim();
    const telValue = telfield.value.trim();


    // username
    if (userValue === '') {
        //show error
        // add error class
        userCheck = setErrorMsg(usernamefield, 'Username cannot be blank');
    } else {
        // add success class
        userCheck = setSuccessMsg(usernamefield);
    }
    // email
    if (emailValue === '') {
        //show error
        // add error class
        emailCheck = setErrorMsg(emailfield, 'E-mail cannot be blank!')
    } else if (!isEmail(emailValue)) {
        setErrorMsg(emailfield, 'E-mail is not valid!')
    } else {
        // add success class
        emailCheck = setSuccessMsg(emailfield);
    }


    // password
    if (passValue === '') {
        passCheck = setErrorMsg(passfield, 'Password cannot be blank!');
    } else {
        passCheck = setSuccessMsg(passfield);
    }

    // password
    if (passValue2 === '') {
        passCheck2 = setErrorMsg(passfield2, 'Password cannot be blank!');
    }else if (passValue !== passValue2){
        setErrorMsg(passfield2, 'Password do not match!');
    } else {
        passCheck2 = setSuccessMsg(passfield2);
    }

    // telephone
    if (telValue === '') {
        telcheck = setErrorMsg(telfield, 'Phone number cannot be blank!');

    } else if(telValue.length < 10) {
        telcheck = setErrorMsg(telfield, 'Phone number is not valid!');
    } else {
        telcheck = setSuccessMsg(telfield);
    }

}

// set error
function setErrorMsg(input, message) {
    const fieldBox = input.parentElement;
    const small = fieldBox.querySelector('small');
    // add error message inside small
    small.innerText = message;
    fieldBox.className = 'fieldBox error'
    return false;
}

// Set success 
function setSuccessMsg(input) {
    const fieldBox = input.parentElement;
    fieldBox.className = 'fieldBox success'
    return true;
}


// email function
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}