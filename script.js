// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

function generatePassword() {

  // These are all possible characters
  var upper = "QWERTYUIOPASDFGHJKLZXCVBNM"
  var lower = "qwertyuiopasdfghjklzxcvbnm"
  var number = "0123456789"
  var special = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var pool = "";
  var newPasswordLength = prompt("Please Select Your Password Length (8-128 Characters).", "16");
  var chooseOneAtLeast = false;

  // Check if length is valid
  if (newPasswordLength < 8 || newPasswordLength > 128 || isNaN(newPasswordLength)) {
    var startOver = confirm("Please select a numeric length between 8 and 128. Start Over?");
    if (startOver) {
      generatePassword();
    } else {
      return;
    }
  }

  // var newPasswordUpper = confirm("Do you want to include Uppercase Characters?");
  // var newPasswordLower = confirm("Do you want to include Lowercase Characters?");
  // var newPasswordNumbers = confirm("Do you want to include Numbers in your Characters?");
  // var newPasswordSpecial = confirm("Do you want to include Special Characters?");

  if (confirm("Do you want to include Uppercase Characters?")) {
    var pool = pool + upper;
    chooseOneAtLeast = true;
  }
  if (confirm("Do you want to include Lowercase Characters?")) {
    var pool = pool + lower;
    chooseOneAtLeast = true;
  }
  if (confirm("Do you want to include Numbers in your Characters?")) {
    var pool = pool + number;
    chooseOneAtLeast = true;
  }
  if (confirm("Do you want to include Special Characters?")) {
    var pool = pool + special;
    chooseOneAtLeast = true;
  }
  if (!chooseOneAtLeast) {
    var startOver = confirm("Please Select at Least one Character Group. Start Over?");
    if (startOver) {
      generatePassword();
    } else {
      return;
    }
  }
  
  var Password = "";
  while (Password.length < newPasswordLength) {
    Password = Password + pool[Math.floor((Math.random() * pool.length))]
  }

  return Password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
