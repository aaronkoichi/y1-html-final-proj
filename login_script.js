// Variables used to check form.
const form = document.getElementById('form');
const usernamefield = document.getElementById('usernamefield');
const passfield = document.getElementById('passfield');

// boolean variables
let userCheck;
let passCheck;

// Date
let today = new Date();
// For creating the date.
let monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let date = today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
    // If the inputs are check correctly:
    if (userCheck === true && passCheck === true) {
        // Gives a pop-up to notify user.
        window.alert('Login successful!');
        // redirects the webpage to shop page.
        window.location.href = "shop.html";

         // Store the updated footer value in local storage
        const updatedFooter = 'Last data collection: ' + date;
        localStorage.setItem('footer_login', updatedFooter);
    }

})

// Retrieve the footer value from local storage on page load
window.addEventListener('load', () => {
    const footer = document.querySelector('.dateUpdate_login');
    const storedFooter = localStorage.getItem('footer_login');
    if (storedFooter) {
        footer.innerText = storedFooter;
    }
});


function checkInputs() {
    const userValue = usernamefield.value.trim();
    const passValue = passfield.value.trim();
    // username
    if (userValue === '') {
        //show error
        // add error class
        userCheck = setErrorMsg(usernamefield, 'Username cannot be blank');
    } else {
        // add success class
        userCheck = setSuccessMsg(usernamefield);
    }

    // password
    if (passValue === '') {
        passCheck = setErrorMsg(passfield, 'Password cannot be blank!');
    } else {
        passCheck = setSuccessMsg(passfield);
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

