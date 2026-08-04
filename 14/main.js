const form = document.getElementById('form');
const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const email = document.getElementById('email');

const message = document.getElementById('message');
const consent = document.getElementById('consent');

const success = document.querySelector('.success_message')
//error messages
const first_name_error = document.getElementById('first_name_error')
const last_name_error = document.getElementById('last_name_error')
const valid_email_error = document.getElementById('valid_email_error')
const email_error = document.getElementById('email_error')
const queryType_error = document.getElementById('queryType_error')
const message_error = document.getElementById('message_error')
const consent_error = document.getElementById('consent_error')

function validateForm() {
    let isValid = true;

    const isValidEmail = /^\S+@\S+\.\S+$/;

    // First Name
    if (!first_name.value.trim()) {
        first_name.classList.add("outline-red-800");
        first_name.classList.remove("outline-Grey-500");
        first_name_error.classList.remove("hidden");
        isValid = false;
    } else {
        first_name.classList.remove("outline-red-800");
        first_name.classList.add("outline-Grey-500");
        first_name_error.classList.add("hidden");
    }

    // Last Name
    if (!last_name.value.trim()) {
        last_name.classList.add("outline-red-800");
        last_name.classList.remove("outline-Grey-500");
        last_name_error.classList.remove("hidden");
        isValid = false;
    } else {
        last_name.classList.remove("outline-red-800");
        last_name.classList.add("outline-Grey-500");
        last_name_error.classList.add("hidden");
    }

    // Email
    if (!email.value.trim()) {
        email.classList.add("outline-red-800");
        email.classList.remove("outline-Grey-500");
        email_error.classList.remove("hidden");
        valid_email_error.classList.add("hidden");
        isValid = false;
    } else if (!isValidEmail.test(email.value.trim())) {
        email.classList.add("outline-red-800");
        email.classList.remove("outline-Grey-500");
        valid_email_error.classList.remove("hidden");
        email_error.classList.add("hidden");
        isValid = false;
    } else {
        email.classList.remove("outline-red-800");
        email.classList.add("outline-Grey-500");
        email_error.classList.add("hidden");
        valid_email_error.classList.add("hidden");
    }

    // Message
    if (!message.value.trim()) {
        message.classList.add("outline-red-800");
        message.classList.remove("outline-Grey-500");
        message_error.classList.remove("hidden");
        isValid = false;
    } else {
        message.classList.remove("outline-red-800");
        message.classList.add("outline-Grey-500");
        message_error.classList.add("hidden");
    }

    // Consent
    if (!consent.checked) {
        consent_error.classList.remove("hidden");
        isValid = false;
    } else {
        consent_error.classList.add("hidden");
    }

    // Query Type
    const query = document.querySelector(
        'input[name="queryType"]:checked'
    );

    if (!query) {
        queryType_error.classList.remove("hidden");
        isValid = false;
    } else {
        queryType_error.classList.add("hidden");
    }

    return isValid;
}

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    console.log("Submit clicked");

    const valid = validateForm();

    console.log(valid);

    if (valid) {
        console.log("Success");
        success.classList.remove("hidden");
        form.reset();
    } else {
        console.log("Validation failed");
        success.classList.add("hidden");
    }
}
