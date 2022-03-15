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
  var useUppercase = window.confirm("Use upper case in your password? OK = YES.");
  var useSpecialCharacter = window.confirm("Use special characters in your password? OK = YES.");
  var passwordLength = window.prompt("How many characters do you want in your password? Minimum length 8, Maximum length 128.");
  console.log(useUppercase);
  console.log(useSpecialCharacter);
  console.log(passwordLength);
  if (useUppercase) {
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    uppercase = "";
  }
  if (useSpecialCharacter) {
    var specialCharacter = "!@#$%^&*()"
  } else {
    specialCharacter = "";
  }
  var characters = "0123456789abcdefghijklmnopqrstuvwxy";
  var passCharacters = uppercase + specialCharacter + characters;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * passCharacters.length);
    password += passCharacters.substring(randomNumber, randomNumber +1);
    console.log(password);
  }
  // validate isUppercase 
  

  // validate isSpecialCharacter
  if (useSpecialCharacter) {

  }

  // validate length
  if (passwordLength.length >= 8 && passwordLength <= 128) {
    
  } else {
    window.prompt("Please enter a proper length for your password.  Minimum of 8 characters and Maximum of 128.");
  }

  // password array builder

}

// display the generated password



