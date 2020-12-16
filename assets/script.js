// Assignment Code
var generateBtn = document.querySelector("#generate");
//array of lowercase letters to be included in the soup
var lowercase = [
    "a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    ];
//array of uppercase letters to be included in the soup
var uppercase = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    ];
//array of numbers to be included in the soup
var numbers = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ];
  //array of special characters to be included in the soup
  var specialCharacters = [
    "!", "@", "#", "$", "%", "^", "&", "*",
    ];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

    
//function to prompt user for password length
    function getPassword(){
     
// variable to store length of password from user input
      var length = parseInt(
        prompt('How long would you like your password?')
      );
      if (isNaN(length) === true) {
        alert('Length of password must be provided as a number');
        return;
      }
      // conditional statement to make sure the password is at least 8 characters long. Prompt ends if this evaluates false
      if (length < 8) {
        alert('Your password must be at least 8 characters long');
        return;
      }
      // conditional statement to check if the password has more than 128 characters. Prompt ends if this evaluates false
      if (length > 128) {
        alert('Your password is too long!');
        return;
      }
      //variable to store boolean regarding the inclusion of lowercase
      var haslowercase = confirm(
        'click OK to include lowercase letters'
      );
      //variable to store boolean regarding the inclusion of uppercase
      var hasuppercase = confirm(
        'click OK to include UPPERCASE letters'
      );
      //variable to store boolean regarding the inclusion of numbers
      var hasnumbers = confirm(
        'click OK to include numbers'
      );
      //variable to store boolean regarding the inclusion of
      var hasspecialCharacters = confirm(
        'click OK to include special characters'
      );
      // conditional statement to check if user does not include any types of characters. Password maker ends if all variables evaluate to false
      if (
        haslowercase === false &&
        hasuppercase === false &&
        hasnumbers === false &&
        hasspecialCharacters === false
      ) {
          alert('Must select at least one character type');
          return;
        }
      // object to store user input
        var passwordCharacters = {
          length: length,
          haslowercase: haslowercase,
          hasuppercase: hasuppercase,
          hasnumbers: hasnumbers,
          hasspecialCharacters: hasspecialCharacters,
        };
        return passwordCharacters;
      }
      
    // function for getting a random element from an array
    function getRandom(arr) {
      var randIndex = Math.floor(Math.random() * arr.length);
      var randElement = arr[randIndex];
      return randElement;
    }
    //function to generate password with user input
    function generatePassword() {
      var characters = getPassword();
      //variable to store password as it's being concatenated
      var finalPassword = [];
      // array to store types of characters to include in the password
      var possibleCharacters = [];
      //array to contain one of each type of chosen characters to ensure each will be used
      var guaranteedCharacters = [];
      // conditional statement that adds array of lowercase into array of possible characters based on user input
      // push new random lowercase to guaranteedCharacters
      if (characters.haslowercase) {
        possibleCharacters = possibleCharacters.concat(lowercase);
        guaranteedCharacters.push(getRandom(lowercase));
      }
      // conditional statement that adds array of uppercase into array of possible characters based on user input
      // push new random upper to guaranteedCharacters
      if (characters.hasuppercase) {
        possibleCharacters = possibleCharacters.concat(uppercase);
        guaranteedCharacters.push(getRandom(uppercase));
      }
      // conditional statement that adds array of numbers into array of possible characters based on user input
      // push new random numbers to guaranteedCharacters
      if (characters.hasnumbers) {
        possibleCharacters = possibleCharacters.concat(numbers);
        guaranteedCharacters.push(getRandom(numbers));
      }
      // conditional statement that adds array of specialCharacters into array of possible characters based on user input
      // push new random specialCharacters to guaranteedCharacters
      if (characters.hasspecialCharacters) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        guaranteedCharacters.push(getRandom(specialCharacters));
      }
      // for loop to iterate over the password length from the characters object, selecting random indices from the array of possible characters and concatenating those characters into the finalPassword variable.
      for (var i = 0; i < characters.length; i++) {
        var addCharacters = getRandom(possibleCharacters);
        finalPassword.push(addCharacters);
      }
      // mix in at least one of each guaranteed character in the finalPassword
      for (var i = 0; i < guaranteedCharacters.length; i++) {
        finalPassword[i] = guaranteedCharacters[i];
      }
      //transform the finalPassword into a string and pass into writePassword
      return finalPassword.join(' ');
    }
    // get references to the #make-password element
    var generateBtn = document.querySelector('#generate');
    // write password to the #password input
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector('#password');
      passwordText.value = password;
    }
    // added event listener to generate button
    generateBtn.addEventListener("click", writePassword);
