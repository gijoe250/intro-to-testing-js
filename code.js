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