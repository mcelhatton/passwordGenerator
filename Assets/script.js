// Assignment code here
var isUppercase = false;
var isSpecialCharacter = false;
var passwordLength = 0;

// series of questions, password length, special characters, upper and lower case?
// questions / prompts
var isUppercase = window.prompt("Use upper case in your password?");

// password validation length, criteria 

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

// display the generated password



