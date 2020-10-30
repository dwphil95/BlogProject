function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}

function validateForm() {

    // Retrieving the values of form elements
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var message = document.contactForm.message.value;

    var nameErr = emailErr = mobileErr = messageErr = true

    if (name == "")
        printError("nameErr", "Please enter your name");
    else {
        var regex = /^[a-zA-z\s]+$/;
        if (regex.test(name) === false)
            printError("nameErr", "Please enter a valid name")
        else {
            printError("nameErr", "")
            nameErr = false
        }    
    }

    if (email == "")
        printError("emailErr", "Please enter your email address");
    else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false)
            printError("emailErr", "Please enter a valid email address");
        else {
            printError("emailErr", "")
            emailErr = false
        }
    }

    if (mobile == "")
        printError("mobileErr", "Please enter your mobile number");
    else {
        var regex = /^\d{10}$/;
        if (regex.test(mobile) === false)
            printError("mobileErr", "Please enter a valid mobile number");
        else {
            printError("mobileErr", "")
            mobileErr = false
        }
    }

    if (message == "")
        printError("messageErr", "Please enter your message");
    else
        messageErr = false
    

    if (nameErr || emailErr || mobileErr || messageErr == true)
        return false
    else
        alert("You have submitted the form!")
}