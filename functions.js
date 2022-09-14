// Functions are named block of code that performs a specific task.
// Functions are self-contained meaning values within the function can not be accessed outside the function.
// Function Add
function add(){
    let num1 = 20;
    let num2 = 30;
    let ans = num1 + num2;
    console.log(ans)
    return num1; //Helps the function to expose something outside of itself ie mum1 value.
}
//This is a function call aslo technically referred to as a function invocation ( to invoke).
// add(); 
// console.log(add());

function evenNumbers(){
    for(num = 0; num <= 100; num+=10){
        if(num % 2 == 0){
            console.log(num)
        }
    }
}
// evenNumbers();
// Static Function is a function with already pre defined values.
function netpay(){
    let grossPay = 1000000;
    let taxPayable = grossPay * 0.3;
    let netPay = grossPay - taxPayable;
    // a return keyword also marks the end of the function execution.
    return netPay;
}
console.log(netpay())

function welfare(){
    let welFare = 50000;
    let takeHome = netpay() - welFare;
    console.log(takeHome)
}
welfare()