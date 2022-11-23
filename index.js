const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


const includingNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const includingSpecialCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const includingAll = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")

let includeNumbers = false
let includeSpecialCharacters = false 

const specifics1Btn = document.getElementById("specifics1-btn");
const specifics2Btn = document.getElementById("specifics2-btn");

function includeNumbersToggle() {
    if (includeNumbers === false) {
        includeNumbers = true
        document.getElementById("specifics1-btn").style.background = "#10B981"
    } else {
        includeNumbers = false
        document.getElementById("specifics1-btn").style.background = "#da364c"
    }
    
}

function includeSpecialcharactersToggle() {
    if (includeSpecialCharacters === false) {
        includeSpecialCharacters = true
        document.getElementById("specifics2-btn").style.background = "#10B981"
    } else {
        includeSpecialCharacters = false
        document.getElementById("specifics2-btn").style.background = "#da364c"
    }
}

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


function generatePasswords() {
    password1El.textContent = ""
    password2El.textContent = ""

    if (includeNumbers === true && includeSpecialCharacters === false) {
        for (let i = 0; i < 16; i++){
            let arrayIndex = Math.floor(Math.random()*characters.length)
            password1El.textContent += includingNumbers[arrayIndex]
            password2El.textContent += includingNumbers[arrayIndex]
        }
    } else if (includeNumbers === false && includeSpecialCharacters === true) {
        for (let i = 0; i < 16; i++){
            let arrayIndex = Math.floor(Math.random()*characters.length)
            password1El.textContent += includingSpecialCharacters[arrayIndex]
            password2El.textContent += includingSpecialCharacters[arrayIndex]
        }
    } else if (includeNumbers === true && includeSpecialCharacters === true){
        for (let i = 0; i < 16; i++){
            let arrayIndex = Math.floor(Math.random()*characters.length)
            password1El.textContent += includingAll[arrayIndex]
            password2El.textContent += includingAll[arrayIndex]}
    } else {
        for (let i = 0; i < 16; i++){
            let arrayIndex = Math.floor(Math.random()*characters.length)
            password1El.textContent += characters[arrayIndex]
            password2El.textContent += characters[arrayIndex]
        }
    }


}