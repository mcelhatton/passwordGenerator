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

  // validate isUppercase 
  if (useUppercase) {
    var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const random = Math.floor(Math.random() * upperCaseArray.length);
    console.log(random, upperCaseArray[random]);
  } 

  // validate isSpecialCharacter
  if (useSpecialCharacter) {

  }

  // validate length
  if (passwordLength.length >= 8 && passwordLength <= 129) {
    
  } else {
    window.prompt("Please enter a proper length for your password.  Minimum of 8 characters and Maximum of 128.");
  }

  // password array builder

}

// display the generated password



