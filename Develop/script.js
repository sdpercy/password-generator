// Assignment code here

//arrays of various password characters
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*_+-=";

//Declare variables
var passwordLength = "";
var lowercaseChoice;
var uppercaseChoice;
var numbersChoice;
var specialcharChoice;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//On click of generate button present user with series of questions to generate
generateBtn.onclick = function() {
    //Please choose password length between 8 - 128 characters?
    var passwordLength = (prompt("Please choose a password length between 8 and 128 characters in length"))
    while (passwordLength < 8 || passwordLength > 128) {
      window.alert("Invalid choice.  Please choose a password length between 8 and 128 characters")
      var passwordLength = (prompt("Please choose a password length between 8 and 128 characters in length"))
    }    
    // If lower than 8 characters or greater than 128 - return message "please choose a password length between 8 and 128 characters"
    var lowercaseChoice = confirm("Would you like your password to have lowercase letters?");
    //Would you like to include uppercase letters?
    var uppercaseChoice = confirm("Would you like your password to have uppercase letters?");
    // Do you want to include numbers?
    var numbersChoice = confirm("Would you like your password to include numbers?");
    //Would you like to include special characters?
    var specialcharChoice = confirm("Would you like your password to include special characters?");
    //If answer to prompt questions are all no - return message "please choose at least one character type to generate password"
    while (lowercaseChoice === false && uppercaseChoice === false && numbersChoice === false && specialcharChoice === false){
      window.alert("Please choose at least one character type to generate password.")
      var lowercaseChoice = confirm("Would you like your password to have lowercase letters?");
      var uppercaseChoice = confirm("Would you like your password to have uppercase letters?");
      var numbersChoice = confirm("Would you like your password to include numbers?");
      var specialcharChoice = confirm("Would you like your password to include special characters?");
    }
}






