// Operators are things or characters or symbols that tell a computer what to do with an operand
// Arithematic Operators 
var num1 = 20;
var num2 = 50;

var num3 = 200; var num4 = 300;
// Addition Operator
console .log (num1 + num2);
// Subtraction Operator
console .log (num2 - num1);
// Multiplication Operators
console .log (num1 * num2);
// Division Operator
console .log (num1 / num2);
// Remainder operator (Modulus Operator)
console .log (num1 % num2);

// Concatenating Operator 
let firstname = "Xhena ";
let lastname = "Tegulwa";
console .log (firstname + lastname);

// Assignment Operators
var rose_age = 26;
var jaden_age = 37;

console .log (rose_age += 10)
console .log (jaden_age -= 10)
console .log (jaden_age *= 10)

// Logical Operators
 var numbr = 10;
 var numbr2 = 20;
//  There are three Logical Operators ie Not, Add and Add OR
//  Not equal to Logical Operator
console .log (numbr != numbr2);
// Add Logic (True&&true = True, True&&False=False, False&&false=False)
console .log ((numbr < numbr2) && (numbr2 > numbr));
console .log ((numbr > numbr2) && (numbr2 < numbr));
console .log ((numbr < numbr2) && (numbr2 < numbr));
// OR Logical (One of the conditions should be true for the output to be true)
console .log ((numbr < numbr2) || (numbr2 > numbr));
console .log ((numbr < numbr2) || (numbr2 < numbr));
console .log ((numbr > numbr2) || (numbr2 < numbr));

// Comparison OPerators
var number = 100;
var number2 = 200;
var number3 = "100"
var gender = "Female";
// Equal {==} Comparison Operator (The statement must be true for the output to be true and VV)
console .log (number == number2)
console .log (number == gender)
console .log (number == number3)
// With the Strick Equal  (===) the values should be equal and of the same kind eg they should both be integers or strings but not a string and an integer
console .log (number === number3) //Strick Equal Operator
console .log (number < number2) //Less than Operator
console .log (number > number2) //Greater than operator
console .log (number <= number2) //Less than or equal to 
console .log (number >= number2) //Greater than or equal to
console .log (number != number2) //Not equal to

// Ternary Operator
var a = 10, b = 5;
var c = a > b? a : b; //The value of C is depedent on the conditions, if "a" is greater that "b" the assign "c" the value of "a" but if the condition is wrong then assign "c" the value of "b"
// Output the Value of C
console .log (c)
// When "a" is less than "b"
var c = a < b? a : b;
// Output the value of "c"
console .log (c)
// An expression is an operand that gives a value for example (Num / num2)

// INCREMENT OPERATORS
let xNum = 20;
let yNum = 30;
// This called a post Increment
console .log (xNum++)
console .log (xNum)
// Pre-Increment (First Add One on the value of xNum)
console .log (++xNum)
console .log (xNum)

// Decrement Operators
console .log (xNum--) //Post Decrement
console .log (--xNum) //Pre Decrement

console .log (xNum+=10)