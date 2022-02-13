var generateBtn = document.querySelector("#generate");

var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "?", "%", "*"];
var passChar = [];

function writePassword() {
  //is this part the problem? vvvvv
  var password = generatePassword();

  //All of this appears to work vvvvv
  function generatePassword() {
    var numChar = prompt("How long should your password be? (Please choose a number between 8-128");
    if (numChar < 8 || numChar > 128 || numChar == null) {
      alert("Invalid entry. Please pick a number between 8-128.");
      generatePassword();
      } else console.log(numChar);

    var incLC = confirm("Would you like to include lowercase characters?");
    if (incLC === true) {
      passChar = passChar.concat(lowercase);
    }
    var incUC = confirm("Would you like to include uppercase characters?");
    if (incUC === true) {
      passChar = passChar.concat(uppercase);
    }
    var incNum = confirm("Would you like to include numbers?");
    if (incNum === true) {
      passChar = passChar.concat(num);
    }
    var incSC = confirm("Would you like to include special characters?");
    if (incSC === true) {
      passChar = passChar.concat(special);
    }
    if (passChar.length === 0) {
      console.log("Array is empty.");
      alert("You can't generate a password if you don't select any characters. Please try again.");
    }
    console.log(passChar);
    //All of this part seems to work ^^^^^^^^^^   
  
    for (var i = 0; i < numChar; i++) {
      password += passChar[Math.floor(Math.random() * passChar.length)];
    }
    console.log(password);
    return password;
  }
}

  var passwordText = document.querySelector("#password");
      passwordText.value = password;

generateBtn.addEventListener("click", writePassword);
