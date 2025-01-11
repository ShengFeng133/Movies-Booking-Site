
function validateForm() {
    'use strict';

    var username = document.getElementById('username').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var password = document.getElementById('password').value.trim();
    var email = document.getElementById('email').value.trim();


    console.log(username);
    console.log(phone);
    console.log(password);
    console.log(email);


    if (!validateUsername(username)) {
        alert('Please enter a valid username with alphabets, digits and character spaces only.');
        return false;
    }

    if (!validatePhone(phone)) {
        alert('Please enter a valid 8 digits phone no., with the example format 1234 5678.');
        return false;
    }

    if (!validatePassword(password)) {
        alert('Please enter a valid password with at least one uppercase letter, one lowercase letter, one number and one special character.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address with the example format abc@hotmail.com or abc@hotmail.uk.');
        return false;
    }

    if ((username.length > 0) && (phone.length > 0) && (password.length > 0) && (email.length > 0)) {
        return true;   
    }
    else {
        alert('Please complete the form!');
        return false;	 
    }

}

function validateUsername(username) {
    var name = /^[A-Za-z\d ]+$/
    if (name.test(username)) {
        return true;
    }
    else {
        return false;
    }
}

function validatePhone(phone) {
    var phonenum = /^[\d]{4}\s[\d]{4}$/;
     

     
    if (phonenum.test(phone)) {
        return true;
    }
    else {
        return false;
    }
}

function validatePassword(password) {
    var passcode = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#^-])[A-Za-z\d@$!%*?]{4,}$/;

    if (passcode.test(password)) {
        return true;
    }
    else {
        return false;
    }
}


function validateEmail(email) {
    var emailPattern1 = /^[\w.-]+@[\w]+\.[a-zA-Z]{2,3}$/
    var emailPattern2 = /^[\w.-]+@[\w]+\.[\w]+\.[a-zA-Z]{2,3}$/
    var emailPattern3 = /^[\w.-]+@[\w]+\.[\w]+\.[\w]+\.[a-zA-Z]{2,3}$/

    if (emailPattern3.test(email)) {
        return true;
    } else if (emailPattern2.test(email)) {
        return true;
    } else if (emailPattern1.test(email)) {
        return true;
    } else {
        return false;
    }

     



     
     
     
     
     
     
     
     

     
     
     
     
     

}


function init() {
    'use strict';

     
    if (document && document.getElementById) {
        var registerForm = document.getElementById('registerform');
        registerForm.onsubmit = validateForm;
    }

}  

 
window.onload = init;