function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10}$/; 
    return phoneRegex.test(phoneNumber);
}

const validateButton = document.getElementById("validateButton");
validateButton.addEventListener("click", function() {
    const emailInput = document.getElementById("emailInput");
    const emailError = document.getElementById("emailError");
    const phoneInput = document.getElementById("phoneInput");
    const phoneError = document.getElementById("phoneError");

    const email = emailInput.value;
    const phoneNumber = phoneInput.value;

    if (!validateEmail(email)) {
        emailInput.style.border = "1px solid red";
    } else {
        emailInput.style.border = "1px solid #0068ff";
    }

    if (!validatePhoneNumber(phoneNumber)) {
        phoneInput.style.border = "1px solid red";
    } else {
        phoneInput.style.border = "1px solid #0068ff";
    }
});