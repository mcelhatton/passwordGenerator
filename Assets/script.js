// Assignment code here


// series of questions, password length, special characters, upper and lower case?
// questions / prompts
var isUppercase = window.prompt("Use upper case in your password?");
var isSpecialCharacter = window.prompt("Use special characters in your password?");
var passwordLength = window.prompt("How many characters do you want in your password? Minimum length 8, Maximum length 128.");
console.log(isUppercase);
console.log(isSpecialCharacter);
console.log(passwordLength);

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



