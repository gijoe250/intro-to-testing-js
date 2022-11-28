// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// function expression syntax (assigning an anonymous function to a variable)
// const helloWorld = function() {
//     return "Hello, World!";
// }

function sayHello(name){
    if (typeof name !== "string" || name === "" || !isNaN(name)){
        return "Hello, World!";
    }
    else {
        return `Hello, ${name}!`;
    }
}

function isFive(number){
    if(number == 5){
        return true;
    }
    else{
        return false
    }
}

function isEven(number){
    if (number % 2 === 0 && typeof number != "boolean"){
        return true;
    }
    return false;
}

function isVowel(vowel){
    if (typeof vowel == "string") {
        let vowelLower = vowel.toLowerCase();
        if (vowelLower === "a" || vowelLower === "e" || vowelLower === "i" || vowelLower === "o" || vowelLower === "u") {
            return true;
        }
        return false;
    } else {
        return false;
    }
}

function add(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
        return NaN;
    }
    return (parseInt(num1) + parseInt(num2));
}