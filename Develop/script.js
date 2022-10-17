// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var passwordLength = prompt('How long do you want your password to be');
  var wantsUppercase = confirm('Do you want Uppercase Characters?');
  var wantsLowercase = confirm(' Do you want lowercase Characters?');
  var numericValues = confirm('Do you want numbers in your password?');
  var specialCharacters = confirm(' Do you want special Characters in your password?');

  if (wantsUppercase === true){
    userOptions = userOptions.concat(upperCaseCharacters)

  }
  if (wantsLowercase === true){
    userOptions = userOptions.concat(alphaNumericCharacters)
  }
  if (numericValues === true){
    userOptions = userOptions.concat(numbers)

  }
  if (specialCharacters === true){
    userOptions = userOptions.concat(specialCharacterarray)
  }
  var password = ''
  for (var i = 0; i < passwordLength; i++){
    var varindex = Math.floor(Math.random()*userOptions.length)
    var RandomCharacter = userOptions[varindex]
    password = password + RandomCharacter
  }
  return password
}
// Add event listener to generate button
var alphaNumericCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')
var specialCharacterarray = '!@#$%^&*'.split('')
var numbers = '123456789'.split('')
var upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
var userOptions = []

//if (alphaNumericCharacters.includes(key)) {
// for (var i = 0; i < Elements.length; i++ ) {
//   elements[i].textcontent += Event.key; 
// }
//}
generateBtn.addEventListener('click', writePassword)


