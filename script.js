// Function to validate form inputs
function validateForm() {
    var fullName = document.getElementById('fullname').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var gender = document.querySelector('input[name="gender"]:checked');

    if (fullName === "") {
        alert("Please enter your full name.");
        return false;
    }

    if (age === "" || isNaN(age) || age < 0 || age > 120) {
        alert("Please enter a valid age between 0 and 120.");
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (phone === "" || isNaN(phone)) {
        alert("Please enter a valid phone number.");
        return false;
    }

    if (gender === null) {
        alert("Please select your gender.");
        return false;
    }

    return true;
}

// Animation for the submit button
var submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('mouseover', function() {
    submitBtn.style.transform = 'scale(1.1)';
    submitBtn.style.transition = 'transform 0.2s ease';
});

submitBtn.addEventListener('mouseout', function() {
    submitBtn.style.transform = 'scale(1)';
});
