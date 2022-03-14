// Assignment code here


// series of questions, password length, special characters, upper and lower case?
// questions / prompts


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

// generatePassword function
function generatePassword() {
  var isUppercase = window.prompt("Use upper case in your password? Enter YES or NO.");
  var isSpecialCharacter = window.prompt("Use special characters in your password? Enter YES or NO.");
  var passwordLength = window.prompt("How many characters do you want in your password? Minimum length 8, Maximum length 128.");
  console.log(isUppercase);
  console.log(isSpecialCharacter);
  console.log(passwordLength);

  // validate isUppercase 
  if (isUppercase === Yes || isUppercase === yes || isUppercase === YES) {
    isUppercase = true;
  } else if (isUppercase === NO || isUppercase === no || isUppercase === No) {
    isUppercase = false;
  } else {
    var isUppercase = window.prompt("Use upper case in your password? Enter YES or NO.");
  }
  // validate isSpecialCharacter
  if (isSpecialCharacter === Yes || isSpecialCharacter === yes || isSpecialCharacter === YES) {
    isSpecialCharacter = true;
  } else if (isSpecialCharacter === NO || isSpecialCharacter === no || isSpecialCharacter === No) {
    isSpecialCharacter = false;
  } else {
    var isSpecialCharacter = window.prompt("Use special characters in your password? Enter YES or NO.");
  }

  // validate length
  if (passwordLength.length >= 8 && passwordLength <= 129) {

  } else {
    window.prompt("Please enter a proper length for your password.  Minimum of 8 characters and Maximum of 128.");
  }

}

// display the generated password



