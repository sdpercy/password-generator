// Assignment code here

//arrays of various password characters
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "+", "-", "="] ;
var userChoices;


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
  var password = generatePassword;
  var passwordText = document.querySelector("#password");
    
    for (var i = 0; i < passwordLength;  i++){
      var generatePassword = userChoice[Math.floor(Math.random() * userChoice.length)];
      return generatePassword;
    }
    
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//On click of generate button present user with series of questions to generate
generateBtn.onclick = function() {
    //Please choose password length between 8 - 128 characters?
    passwordLength = (prompt("Please choose a password length between 8 and 128 characters in length"))
    while (passwordLength < 8 || passwordLength > 128) {
      // If lower than 8 characters or greater than 128 - return message "please choose a password length between 8 and 128 characters"
      window.alert("Invalid choice.  Please choose a password length between 8 and 128 characters")
      passwordLength = (prompt("Please choose a password length between 8 and 128 characters in length"))
    }    
    lowercaseChoice = confirm("Would you like your password to have lowercase letters?");
    //Would you like to include uppercase letters?
    uppercaseChoice = confirm("Would you like your password to have uppercase letters?");
    // Do you want to include numbers?
    numbersChoice = confirm("Would you like your password to include numbers?");  
    //Would you like to include special characters?
    specialcharChoice = confirm("Would you like your password to include special characters?");

    //If answer to prompt questions are all no - return message "please choose at least one character type to generate password"
    while (lowercaseChoice === false && uppercaseChoice === false && numbersChoice === false && specialcharChoice === false){
      window.alert("Please choose at least one character type to generate password!");
      lowercaseChoice = confirm("Would you like your password to have lowercase letters?");
      uppercaseChoice = confirm("Would you like your password to have uppercase letters?");
      numbersChoice = confirm("Would you like your password to include numbers?");
      specialcharChoice = confirm("Would you like your password to include special characters?");
    }
    //If all options selected password
    if (lowercaseChoice && uppercaseChoice && numbersChoice && specialcharChoice){
      userChoice = specialCharacters.concat(lowercaseLetters, uppercaseLetters, numbers);
    }

  //call writePassword function to generate password and display on screen
  writePassword();
}






