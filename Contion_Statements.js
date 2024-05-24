
function largerInt(num1,num2) { // varaiables have been declared in the function

    if(num1>num2){
        return num1; // If the first number is bigger it will be displayed
    }
    else{
        return num2; // will be displayed if the first number is smaller
    }
}

//example
//let num1 = 31;
//let num2 = 80;
//console.log("The lager number is ", largerInt(num1,num2));
// num2 will be displayed since it has a bigger value.
//let num1 = 100;
//let num2 = 59;
//console.log("The lager number is ", largerInt(num1,num2));
// num1 will be displayed cause it is bigger


//-------------------------------------------------------------------------------------------------

function oddOrEven(num0){
    if(num0 % 2 ==0 ){ // a number that can be dived in half without any decimals is an even number

        return "Even"; 
    }
    else{ // if a diveded number has decimals it is an odd number
        return "Odd"; 
    }
}

//example
let num0 = 9;
console.log("The given number", num0," is ", oddOrEven(num0));