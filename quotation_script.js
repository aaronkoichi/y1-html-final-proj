const form = document.getElementById('form');
const emailfield = document.getElementById('emailfield');
const addressline1 = document.getElementById('addressline1');
const postcode = document.getElementById('postcode');

let emailcheck;
let addresscheck;
let postcheck;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
    // If the inputs are check correctly:
    if (emailcheck === true && addresscheck === true && postcheck === true) {
        // Gives a pop-up to notify user.
        window.alert('Quotation sent! Our team will get in touch with you soon.');
        // redirects the webpage to shop page.
        window.location.href = "shop.html";

    }

})


function checkInputs() {
    const emailValue = emailfield.value.trim();
    const addressValue = addressline1.value.trim();
    const postValue = postcode.value.trim();

    // username
    if (emailValue  === '') {
        //show error
        // add error class
        emailcheck = setErrorMsg(emailfield, 'Please fill in your company email.');
    } else {
        // add success class
        emailcheck = setSuccessMsg(emailfield);
    }

    // Address
    if (addressValue  === '') {
        //show error
        // add error class
        addresscheck = setErrorMsg(addressline1, 'Please at least fill in your address.');
    } else {
        // add success class
        addresscheck = setSuccessMsg(addressline1);
    }

    //Postcode
    if (postValue  === '') {
        //show error
        // add error class
        postcheck = setErrorMsg(postcode, 'Please fill in appropriate postcode.');
    } else {
        // add success class
        postcheck = setSuccessMsg(postcode);
    }

}
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
