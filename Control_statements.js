let weight = 10;
// IF Statement
if(weight < 50){
    console .log("You are underweight to donate blood")
}
else if(weight > 50 || weight <= 100){
    console.log("You can donate blood");
}


let salary = 700000;
let PAYEE = 30;

if(salary < 300000){
    console .log("You are not Taxable")
}

if(salary > 300000){
    console .log(0.3*700000)
}

let price1 = 2000;
if(price1 <= 2000){
    console .log("This product is entitled to VAT")
}else{
    console .log("This product is not entitled to VAT")

}
// Nested if, a condition that is based on other conditions.
const number = 7;
if(number >= 0){
    if(number == 0){
        console .log("Your Number is 0");
    }else if(number % 2 == 0){
        console.log("Your Number is an even number");
    }else{
        console.log("Your Number is an Odd Number")
    }
}else{
    console.log("Your Number is Negative");
}

// If..Else..If
var mySal = 700000 
var yourSal = 500000

if(mySal > yourSal){
    console.log("I earn more than you");
}
else if(mySal < yourSal){
    console .log("You earn more than me");
}
else if(mySal == yourSal){
    console .log("We earn the same amount");
}