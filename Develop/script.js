// Assignment code here

//arrays of various password characters
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQSTUVWXYZ';
var numbers = '0123456789';
var specialCharacters = "!#$%&'()*+,-.:;<=>?@[]^_`{|}~";



//Declare variables
var passwordLength = "";
var lowercaseChoice;
var uppercaseChoice;
var numbersChoice;
var specialcharChoice;
var userChoice;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(){
 
  var passwordText = document.querySelector("#password");
  var password ='';
    for (var i = 0; i < passwordLength; i++){
      var generatePassword = Math.floor(Math.random() * userChoice.length + 1);
    
    password += userChoice.charAt(generatePassword);
    passwordText.value = password;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//On click of generate button present user with series of questions to generate
generateBtn.onclick = function() 
{
    //Please choose password length between 8 - 128 characters?
    passwordLength = parseInt(prompt("Please choose a password length between 8 and 128 characters in length"))
    while (passwordLength < 8 || passwordLength > 128) {
      // If lower than 8 characters or greater than 128 - return message "please choose a password length between 8 and 128 characters"
      window.alert("Invalid choice.  Please choose a password length between 8 and 128 characters")
      passwordLength = parseInt(prompt("Please choose a password length between 8 and 128 characters in length"))
    } 
    lowercaseChoice = confirm("Would you like your password to have lowercase letters?");
    //Would you like to include uppercase letters?
    uppercaseChoice = confirm("Would you like your password to have uppercase letters?");
    // Do you want to include numbers?
    numbersChoice = confirm("Would you like your password to include numbers?");  
    //Would you like to include special characters?
    specialcharChoice = confirm("Would you like your password to include special characters?");

    //If answer to prompt questions are all no - return message "please choose at least one character type to generate password"
    while (!lowercaseChoice && !uppercaseChoice && !numbersChoice && !specialcharChoice){
      window.alert("Please choose at least one character type to generate password!");
      lowercaseChoice = confirm("Would you like your password to have lowercase letters?");
      uppercaseChoice = confirm("Would you like your password to have uppercase letters?");
      numbersChoice = confirm("Would you like your password to include numbers?");
      specialcharChoice = confirm("Would you like your password to include special characters?");
    }
    //Different choice options from user input
    //If all options selected password - works
    if (lowercaseChoice && uppercaseChoice && numbersChoice && specialcharChoice){
      userChoice = specialCharacters.concat(lowercaseLetters, uppercaseLetters, numbers);
    }
    //No special characters - works
    else if (lowercaseChoice && uppercaseChoice && numbersChoice){
      userChoice = lowercaseLetters.concat(uppercaseLetters, numbers);
    }
    //No uppercase characters - works
    else if (lowercaseChoice && numbersChoice && specialcharChoice){
      userChoice = lowercaseLetters.concat(numbers, specialCharacters);
    }
    //No numbers - works
    else if (lowercaseChoice && uppercaseChoice && specialcharChoice){
      userChoice = lowercaseLetters.concat(uppercaseLetters, specialCharacters);
    }
    //No lowercase - works
    else if (uppercaseChoice && numbersChoice && specialcharChoice){
      userChoice = uppercaseLetters.concat(numbers, specialCharacters);
    }
    //only lowcase and uppercase letters - works
    else if (lowercaseChoice && uppercaseChoice){
      userChoice = lowercaseLetters.concat(uppercaseLetters);
    }
    //only lowercase letters and numbers - works
    else if (lowercaseChoice && numbersChoice){
      userChoice = lowercaseLetters.concat(numbers);
    }
    //only lowercase letters and special characters
    else if (lowercaseChoice && specialcharChoice){
      userChoice = lowercaseLetters.concat(specialCharacters);
    }
    //only uppercase letters and numbers - works
    else if (uppercaseChoice && numbersChoice){
      userChoice = uppercaseLetters.concat(numbers);
    }
    //only uppercase letters and special characters
    else if (uppercaseChoice && specialcharChoice){
      userChoice = uppercaseLetters.concat(specialCharacters);
    }
    //only numbers and special characters - works
    else if (numbersChoice && specialcharChoice){
      userChoice = numbers.concat(specialCharacters);
    }
    //Only lowercase letters - works
    else if (lowercaseChoice){
      userChoice = lowercaseLetters;
    }
    //Only uppercase Letters - works
    else if (uppercaseLetters){
      userChoice = uppercaseLetters;
    }
    //Only special characters - not working
    else if (specialcharChoice){
      userChoice = specialCharacters;
      console.log(userChoice);
    }
    //Only numbers - not working
    else if (numbersChoice){
      userChoice = numbers;

    }
    
  //call writePassword function to generate password and display on screen
  
  writePassword();
}

