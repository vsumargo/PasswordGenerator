// sync the slider range input with the number input
let rangeOfCharacter = document.getElementById('range-of-characters');
let numberOfCharacter = document.getElementById('number-of-characters');

rangeOfCharacter.addEventListener('input', sync);
numberOfCharacter.addEventListener('input', sync);

function sync(x){
    let value = x.target.value;
    rangeOfCharacter.value = value;
    numberOfCharacter.value = value;
}
// 

// grouping each type of characters into its own category
let includeLowercase = document.getElementById('include-lowercase');
let includeUppercase = document.getElementById('include-uppercase');
let includeNumerics = document.getElementById('include-numerics');
let includeSymbols = document.getElementById('include-symbols');
let passwordBtn = document.getElementById('generate-password-btn');
// 


// create array for lowercase, uppercase, numerics and symbols
// using ASCII character codes
function createArray(a,b){
    let charactersArray = [];
    for (let i = a; i <= b ; i++){
        charactersArray.push(i);
    }
    return charactersArray;
}

let lowercaseArray = createArray(97,122);
let uppercaseArray = createArray(65,90);
let numericsArray = createArray(48,57);
let symbolsArray = createArray(33,47).concat(
                    createArray(58,64)).concat(
                    createArray(91,96)).concat(
                    createArray(123,126));
// 

// create function for generating random password
function generatePassword(amountChar,lowercaseChar, uppercaseChar, numericsChar, symbolsChar){
    let genPassword = [];
    
    if (lowercaseChar){
        genPassword = genPassword.concat(lowercaseArray);
    }
    if (uppercaseChar){
        genPassword = genPassword.concat(uppercaseArray);
    }
    if (numericsChar){
        genPassword = genPassword.concat(numericsArray);
    }
    if (symbolsChar){
        genPassword = genPassword.concat(symbolsArray);
    }


    let passwordArray = [];
    for (let i = 0; i < amountChar; i++){
        let length = genPassword.length;
        let character = genPassword[Math.floor(Math.random() * length)];
        passwordArray.push(String.fromCharCode(character));
    }
    return passwordArray.join('');
}
// 

// create event when clicking the generate password button to return result
let generatedPassword = document.getElementById('generated-password');
passwordBtn.addEventListener("click", function(event){
    event.preventDefault();
    console.log(event);
    

    
    let amountChar = parseFloat(rangeOfCharacter.value);
    let lowercaseChar = includeLowercase.checked;
    let uppercaseChar = includeUppercase.checked;    
    let numericsChar = includeNumerics.checked;
    let symbolsChar = includeSymbols.checked;

    if (lowercaseChar !== true && 
        uppercaseChar !== true &&
        numericsChar !== true &&
        symbolsChar !== true) {
            alert('please CHOOSE ONE or more criteria for the password!');
            generatedPassword.textContent = "Generated Password";
    }
    else{
        let password = generatePassword(amountChar,lowercaseChar, uppercaseChar, numericsChar, symbolsChar);
        generatedPassword.innerText = password;
    }   
});
// 


