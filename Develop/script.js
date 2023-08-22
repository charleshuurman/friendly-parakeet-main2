// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
document.querySelector("#generate").addEventListener("click", generatePassword);

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
function generatePassword() {
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var passwordLength = prompt("Enter password length (between 8 and 128):");
  
  // Convert password length input to an integer
  passwordLength = parseInt(passwordLength);

  // Validate the password length
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Password length must be between 8 and 128 characters.");
    return; // Exit the function
  }

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    return; // Exit the function
  }

  // Define character sets based on selected criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+";

  // Combine selected character sets into a single string
  var charset = "";
  if (includeLowercase) charset += lowercaseChars;
  if (includeUppercase) charset += uppercaseChars;
  if (includeNumeric) charset += numericChars;
  if (includeSpecial) charset += specialChars;

  // Generate the password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  // Update the password textarea
  var passwordTextArea = document.querySelector("#password");
  passwordTextArea.value = password;
}
