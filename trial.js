// // Conditional statement syntax
// /*

// if(condition){
//     statement
// }
// */
// // Condition is either true or false.
// // Statement/s this is what is executed if the condition is true.
// // The If statement will only be executed when the condition is true.

// // Example
// let age = 17;
// if(age >= 18){
//     console.log("You are an adult");
// }else{
//     console.log("You are not an adult");
// }

// let weight = 100;
// if(weight <= 100){
//     console.log("You are not overweight");
// }else if(weight >= 101 && weight <= 110){
//     console.log("Your weight is minimal");
// }
// else{
//     console.log("You are over weight")
// }

// // Example 3
// let number = 7;
// if(number > 9){
//     console.log("Number is greater 8");
//     if(number % 2 == 0){
//         console.log("And it's an even number");
//     }else{
//         console.log("And it's Prime Number")
//     }
// }else{
//     console.log("Number is less than 8");
//     if(number % 2 == 0){
//         console.log("And it's an even number");
//     }else{
//         console.log("And it's a Prime number")
//     }
// }   

// WhileLoop

// JS Challenges by Janz
// Area of a rectangle using class and objects

function Rectangle (rwidth, rlength, color){
    this.rwidth = rwidth;
    this.rlength = rlength;
    this.color = color

    Area = function(){
        return rwidth * rlength
    }
}
let rect = new Rectangle (5, 2, "purple");

console.log("Width is " + rect.rwidth);
console.log("Length is " + rect.rlength);
// console.log(rect.color);
console.log( "The area of a rectangle is " + Area());


// Perimeter of a circle
function Circle(radius){
    this.radius = radius;
    Area = function(){
        return Math.PI * (radius * radius)
    }

    Perimeter = function(){
        return 2*Math.PI * radius
    }
}
let circular = new Circle(5);
console.log("Area of a circle = " + Area());
console.log("Therefore Perimeter = " , Perimeter());


// Delete Operator
function Student(sname, sclass, rollno){
    this.sname = sname,
    this.sclass = sclass,
    this.rollno = rollno    
}
let pupil = new Student("David", "2", 12)
console.log(pupil.sname + " is a Primary " + pupil.sclass + " student and his RollNo is " + pupil.rollno);
console.log(pupil);
console.log(delete pupil.rollno);
console.log(pupil);

// Reading status of book
function Library(title, author, reading_status){
    this.title = title,
    this.author = author,
    this.reading_status = reading_status
}
let book1 = new Library("The Road Ahead", "Bill Gates", "True");
let book2 = new Library("Harry Potter", "JK Rowling", "True");
let book3 = new Library("Lord of the rings", "J.R.R. Tolkien", "False");
console.log(book1.title + "writed by " + book1.author + "is it out")

// CORECTIONS
function Rectangle() {

}

Rectangle.prototype.area = function(height, width) {
    return height * width;
}

let rec1 = new Rectangle();
// console.log(rec1.area(4,6));
// CLASS SYNTAX
class Rect {
    area(height, width) {
        return height * width;
    }
}

let rec2 = new Rect();
console.log(rec2.area(4,6))

// STUDENT
var student = {
    name: "David",
    sclass: "2",
    rollno: 12
}

console.log(student);
delete student.rollno;
console.log(student);

// LIBRARY ARRAY
// class Library {

//     authorNameBookTitle(arr) {
//         let storeBooks = []
//         for(let i = 0; i < arr.length; i++) {
//             storeBooks[i] = arr[i];
            
//         }
//         return storeBooks;
//     }
// }

let lib = [
    {
        title: 'Bill Gates',
        author: 'The Road ahead',
        readingStatus: true
    },
    {
        title: 'Harry Porter',
        author: 'Jk Rowling',
        readingStatus: true
    },
     {
        title: 'Lord of the rings',
        author: 'J.R.R',
        readingStatus: false
    }
]

// const lib1 = new Library();

// console.log(lib1.authorNameBookTitle(lib));

// console.log(lib[0].title);
// console.log(lib[1].title);

for(let arrPosition = 0; arrPosition < lib.length; arrPosition++) {
    if(lib[arrPosition].readingStatus) 
        console.log(lib[arrPosition].title + " by " + lib[arrPosition].author);
    }
