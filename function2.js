function sum(){
    let a = 12;
    let b = 20;
    let c = a + b;
    console.log(c)
}
sum();
// Dynamic Function(Parameterised Function), this function has variables that can take on any value.
// variables in this function eg gross, tax are called parameters.
// The values to these parameters are called arguements or actual parameters. 
function sum2(a, b){
    let c = a + b;
    console.log(c);
}
sum2(30, 50);
sum2(100, 200);

function payee(gross, tax){
    let netPay =gross - (gross*tax);
    console.log(netPay);
}
// Arguements/actual parameters.
payee(1000000, 0.3);

// Define three Parameterizes functions that are calling one another and post it on git/