// Conditional statement syntax
/*

if(condition){
    statement
}
*/
// Condition is either true or false.
// Statement/s this is what is executed if the condition is true.
// The If statement will only be executed when the condition is true.

// Example
let age = 17;
if(age >= 18){
    console.log("You are an adult");
}else{
    console.log("You are not an adult");
}

let weight = 100;
if(weight <= 100){
    console.log("You are not overweight");
}else if(weight >= 101 && weight <= 110){
    console.log("Your weight is minimal");
}
else{
    console.log("You are over weight")
}

// Example 3
let number = 7;
if(number > 9){
    console.log("Number is greater 8");
    if(number % 2 == 0){
        console.log("And it's an even number");
    }else{
        console.log("And it's Prime Number")
    }
}else{
    console.log("Number is less than 8");
    if(number % 2 == 0){
        console.log("And it's an even number");
    }else{
        console.log("And it's a Prime number")
    }
}   
// WhileLoop
