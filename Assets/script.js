
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
  var useLowercase = window.confirm("Use lower case in your password? OK = YES.");
  var useNumeric = window.confirm("Use numbers in your password? OK = YES.");
  var useSpecialCharacter = window.confirm("Use special characters in your password? OK = YES.");
  var passwordLength = window.prompt("How many characters do you want in your password? Minimum length 8, Maximum length 128.");
  console.log(useUppercase);
  console.log(useLowercase);
  console.log(useNumeric);
  console.log(useSpecialCharacter);
  console.log(passwordLength);

  while (useUppercase === false && useLowercase === false && useNumeric === false) {
      var useUppercase = window.confirm("Use upper case in your password? OK = YES.");
      var useLowercase = window.confirm("Use lower case in your password? OK = YES.");
      var useNumeric = window.confirm("Use numbers in your password? OK = YES.");
  }
  while (passwordLength < 8) {
      var passwordLength = window.prompt("Please enter a number between 8 and 128.");
    }
    // check for selected criteria
  if (useUppercase) {
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    uppercase = "";
  }
  if (useLowercase) {
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
  } else {
    lowercase = "";
  }
  if (useNumeric) {
    var numeric = "0123456789";
  } else {
    numeric = "";
  }
  // check for special characters
  if (useSpecialCharacter) {
    var specialCharacter = "!@#$%^&*()"
  } else {
    specialCharacter = "";
  }

  var passCharacters = uppercase + lowercase + numeric + specialCharacter;
  var password = "";

  // create password
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * passCharacters.length);
    password += passCharacters.substring(randomNumber, randomNumber +1);
    console.log(password);
  }

  // verify password criteria matches users input
  if (password.search(uppercase > 0) && password.search(lowercase > 0) && password.search(numeric > 0) && password.search(specialCharacter >0)) {
    return password;
  } else {
    generatePassword();
  }
  

}



