
/*specifics1Btn.addEventListener('click', function includeNumbersToggle() {
    if (includeNumbers === false) {
        specifics1Btn.style.backgroundColor = "#10B981";
        includeNumbers = true
    } else {
        specifics1Btn.style.backgroundColor = "#da364c";
        includeNumbers = false
    }
});

specifics2Btn.addEventListener('click', function includeSpecialCharactersToggle() {
    if (includeSpecialCharacters === false) {
        specifics2Btn.style.backgroundColor = "#10B981";
        includeSpecialCharacters = true
    } else {
        specifics2Btn.style.backgroundColor = "#da364c";
        includeSpecialCharacters = false
    }
}); */


const upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const characters = upperCaseCharacters.concat(lowerCaseCharacters)

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"]

//Concat constants
const includingNumbers = characters.concat(numbers)
const includingSpecialCharacters = characters.concat(specialCharacters)
const includingAll = characters.concat(numbers, specialCharacters)
const numbersAndSpecial = numbers.concat(specialCharacters)
const lowerNumbers = lowerCaseCharacters.concat(numbers)
const upperNumbers = upperCaseCharacters.concat(numbers)
const lowerSpecial = lowerCaseCharacters.concat(specialCharacters)
const upperSpecial = upperCaseCharacters.concat(specialCharacters)
const lowerNumberSpecial = lowerCaseCharacters.concat(numbers, specialCharacters)
const upperNumberSpecial = upperCaseCharacters.concat(numbers, specialCharacters)

//Booleans
let includeNumbers = false
let includeSpecialCharacters = false 
let upperCase = false
let lowerCase = false

//Document Elements
const numbersBtn = document.getElementById("numbers-btn");
const specialCharactersBtn = document.getElementById("specialcharacters-btn");

let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")

//Include Numbers
function includeNumbersToggle() {
    if (includeNumbers === false) {
        includeNumbers = true
        document.getElementById("numbers-btn").style.background = "#10B981"
    } else {
        includeNumbers = false
        document.getElementById("numbers-btn").style.background = "#da364c"
    }
    
}

//Include Special Characters
function includeSpecialcharactersToggle() {
    if (includeSpecialCharacters === false) {
        includeSpecialCharacters = true
        document.getElementById("specialcharacters-btn").style.background = "#10B981"
    } else {
        includeSpecialCharacters = false
        document.getElementById("specialcharacters-btn").style.background = "#da364c"
    }
}

//Include Upper Case Characters
function upperCaseToggle() {
    if (upperCase === false) {
        upperCase = true
        document.getElementById("uppercase-btn").style.background = "#10B981"
    } else {
        upperCase = false
        document.getElementById("uppercase-btn").style.background = "#da364c"
    }
}

//Include Lower Case Characters
function lowerCaseToggle() {
    if (lowerCase === false) {
        lowerCase = true
        document.getElementById("lowercase-btn").style.background = "#10B981"
    } else {
        lowerCase = false
        document.getElementById("lowercase-btn").style.background = "#da364c"
    }
}

//Number of Characters
let characterNumber = 0

function makeCharacters8() {
    characterNumber = 8
    document.getElementById("eight-btn").style.background = "#10B981"
    document.getElementById("twelve-btn").style.background = "#da364c"
    document.getElementById("sixteen-btn").style.background = "#da364c"
    document.getElementById("twentyfour-btn").style.background = "#da364c"
}
function makeCharacters12() {
    characterNumber = 12
    document.getElementById("twelve-btn").style.background = "#10B981"
    document.getElementById("eight-btn").style.background = "#da364c"
    document.getElementById("sixteen-btn").style.background = "#da364c"
    document.getElementById("twentyfour-btn").style.background = "#da364c"
}
function makeCharacters16() {
    characterNumber = 16
    document.getElementById("sixteen-btn").style.background = "#10B981"
    document.getElementById("twelve-btn").style.background = "#da364c"
    document.getElementById("eight-btn").style.background = "#da364c"
    document.getElementById("twentyfour-btn").style.background = "#da364c"

}
function makeCharacters24() {
    characterNumber = 24
    document.getElementById("twentyfour-btn").style.background = "#10B981"
    document.getElementById("twelve-btn").style.background = "#da364c"
    document.getElementById("sixteen-btn").style.background = "#da364c"
    document.getElementById("eight-btn").style.background = "#da364c"
}

//Generate Passwords
function generatePasswords() {
    password1El.textContent = ""
    password2El.textContent = ""

    if (includeNumbers === true && includeSpecialCharacters === false && upperCase === false && lowerCase === false) {
        for (let i = 0; i < characterNumber; i++){
            let arrayIndex = Math.floor(Math.random()*numbers.length)
            password1El.textContent += numbers[arrayIndex]
            password2El.textContent += numbers[arrayIndex]
        }
    } else if (includeNumbers === false && includeSpecialCharacters === true && upperCase === false && lowerCase === false) {
        for (let i = 0; i < characterNumber; i++){
            let arrayIndex = Math.floor(Math.random()*specialCharacters.length)
            password1El.textContent += specialCharacters[arrayIndex]
            password2El.textContent += specialCharacters[arrayIndex]
        }
    } else if (includeNumbers === false && includeSpecialCharacters === false && upperCase === true && lowerCase === false) {
        for (let i = 0; i < characterNumber; i++){
            let arrayIndex = Math.floor(Math.random()*upperCaseCharacters.length)
            password1El.textContent += upperCaseCharacters[arrayIndex]
            password2El.textContent += upperCaseCharacters[arrayIndex]
        }
    } else if (includeNumbers === false && includeSpecialCharacters === false && upperCase === false && lowerCase === true) {
        for (let i = 0; i < characterNumber; i++){
            let arrayIndex = Math.floor(Math.random()*lowerCaseCharacters.length)
            password1El.textContent += lowerCaseCharacters[arrayIndex]
            password2El.textContent += lowerCaseCharacters[arrayIndex]
        }
    } else if (includeNumbers === true && includeSpecialCharacters === true && upperCase === false && lowerCase === false) {
        for (let i = 0; i < characterNumber; i++){
            let arrayIndex = Math.floor(Math.random()*numbersAndSpecial.length)
            password1El.textContent += numbersAndSpecial[arrayIndex]
            password2El.textContent += numbersAndSpecial[arrayIndex]
        }
    } else if (includeNumbers === false && includeSpecialCharacters === true && upperCase === true && lowerCase === false) {
        for (let i = 0; i < characterNumber; i++){
            let arrayIndex = Math.floor(Math.random()*upperSpecial.length)
            password1El.textContent += upperSpecial[arrayIndex]
            password2El.textContent += upperSpecial[arrayIndex]
        }
    } else if (includeNumbers === false && includeSpecialCharacters === false && upperCase === true && lowerCase === true) {
        for (let i = 0; i < characterNumber; i++){
            let arrayIndex = Math.floor(Math.random()*characters.length)
            password1El.textContent += characters[arrayIndex]
            password2El.textContent += characters[arrayIndex]
        }
    } else if (includeNumbers === true && includeSpecialCharacters === false && upperCase === false && lowerCase === true) {
        for (let i = 0; i < characterNumber; i++){
            let arrayIndex = Math.floor(Math.random()*lowerNumbers.length)
            password1El.textContent += lowerNumbers[arrayIndex]
            password2El.textContent += lowerNumbers[arrayIndex]
        }
    } else if (includeNumbers === false && includeSpecialCharacters === true && upperCase === false && lowerCase === true) {
        for (let i = 0; i < characterNumber; i++){
            let arrayIndex = Math.floor(Math.random()*lowerSpecial.length)
            password1El.textContent += lowerSpecial[arrayIndex]
            password2El.textContent += lowerSpecial[arrayIndex]
        }
    } else if (includeNumbers === true && includeSpecialCharacters === false && upperCase === true && lowerCase === false) {
        for (let i = 0; i < characterNumber; i++){
            let arrayIndex = Math.floor(Math.random()*upperNumbers.length)
            password1El.textContent += upperNumbers[arrayIndex]
            password2El.textContent += upperNumbers[arrayIndex]
        }
    } else if (includeNumbers === true && includeSpecialCharacters === true && upperCase === true && lowerCase === false) {
        for (let i = 0; i < characterNumber; i++){
            let arrayIndex = Math.floor(Math.random()*upperNumberSpecial.length)
            password1El.textContent += upperNumberSpecial[arrayIndex]
            password2El.textContent += upperNumberSpecial[arrayIndex]
        }
    } else if (includeNumbers === false && includeSpecialCharacters === true && upperCase === true && lowerCase === true) {
        for (let i = 0; i < characterNumber; i++){
            let arrayIndex = Math.floor(Math.random()*includingSpecialCharacters.length)
            password1El.textContent += includingSpecialCharacters[arrayIndex]
            password2El.textContent += includingSpecialCharacters[arrayIndex]
        }
    } else if (includeNumbers === true && includeSpecialCharacters === false && upperCase === true && lowerCase === true) {
        for (let i = 0; i < characterNumber; i++){
            let arrayIndex = Math.floor(Math.random()*includingNumbers.length)
            password1El.textContent += includingNumbers[arrayIndex]
            password2El.textContent += includingNumbers[arrayIndex]
        }
    } else if (includeNumbers === true && includeSpecialCharacters === true && upperCase === false && lowerCase === true) {
        for (let i = 0; i < characterNumber; i++){
            let arrayIndex = Math.floor(Math.random()*lowerNumberSpecial.length)
            password1El.textContent += lowerNumberSpecial[arrayIndex]
            password2El.textContent += lowerNumberSpecial[arrayIndex]
        }
    } else if (includeNumbers === true && includeSpecialCharacters === true && upperCase === true && lowerCase === true) {
        for (let i = 0; i < characterNumber; i++){
            let arrayIndex = Math.floor(Math.random()*includingAll.length)
            password1El.textContent += includingAll[arrayIndex]
            password2El.textContent += includingAll[arrayIndex]
        }
    } else {
        password1El.textContent += "No input"
        password2El.textContent += "No input"
    }
}