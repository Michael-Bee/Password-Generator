var generateBtn = document.querySelector("#generate");

//Make the arrays to pull characters from
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

// Write password to the #password input here

//This asks for number of characters
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function generatePassword() {
    var numChar = prompt(
      "How long should your password be? (Please choose a number between 8-128"
    );
    //this makes sure the number of characters are within the required range
    if (numChar >= 8 && numChar <= 128) {
      console.log(numChar);
      //what if second entry is also invalid?
    } else if (numChar < 8 || numChar > 128 || numChar == null) {
      prompt("Invalid entry. Please pick a number between 8-128.");
      console.log(numChar);
    } //need to do something here to redirect back through first part if second entry also not within range
    //try a while loop here, or have the function call itself again

    //This confirms whether to include lowercase, returns a boolean true/false
    var incLC = confirm("Would you like to include lowercase characters?");
    if (incLC === true) {
      // this adds the lowercase array
      passChar = passChar.concat(lowercase);
    }
    var incUC = confirm("Would you like to include lowercase characters?");
    if (incUC === true) {
      passChar = passChar.concat(uppercase);
    }
    var incNum = confirm("Would you like to include lowercase characters?");
    if (incNum === true) {
      passChar = passChar.concat(num);
    }
    var incSC = confirm("Would you like to include lowercase characters?");
    if (incSC === true) {
      passChar = passChar.concat(special);
    }
//if none selected and passChar = null, need something that alerts user to select something and the restart

    for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}
    //repeat with for loop for numChar amount of iterations
    //passChar.length
    //return password
  }
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(numChar));


// event listener for generate button - when clicked, this starts the writePassword function
generateBtn.addEventListener("click", writePassword);
