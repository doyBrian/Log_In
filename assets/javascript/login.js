var attempt = 3; // Variable to count number of attempts.

// flags for password validation
var number_flag = false;
var lowercase_letter_flag = false;
var uppercase_letter_flag = false;

// When the user starts to type something inside the password field
function check_char() {
    var user_input = document.getElementById("password");

    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(user_input.value.match(lowerCaseLetters))
        lowercase_letter_flag = true;
    else
        lowercase_letter_flag = false;
  
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(user_input.value.match(upperCaseLetters))  
        uppercase_letter_flag = true;
    else
        uppercase_letter_flag = false;
  
    // Validate numbers
    var numbers = /[0-9]/g;
    if(user_input.value.match(numbers))
        number_flag = true;
    else 
        number_flag = false;

    // if password passes validation, then clear out message; if not, retain message
    if (number_flag == true && uppercase_letter_flag == true && lowercase_letter_flag == true)
        document.getElementById("message").innerHTML = "";
    else 
        document.getElementById("message").innerHTML = "Password must contain a number, a lowercase and uppercase letter. This message will clear if password is validated.";
}

// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // clear values after submit button is pressed
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    if ( username == "level" && password == "Access123"){
        alert ("Login successfully");
        window.location = "success.html"; // Redirecting to other page.
        return false;
    }
    else {
        attempt --; // Decrementing by one.
        alert("Log in failed. Attempts left: " + attempt );
        // Disabling fields after 3 attempts.
        if( attempt == 0) {
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
        }
    }
}