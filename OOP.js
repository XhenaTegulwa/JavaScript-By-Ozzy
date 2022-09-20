// // Object Orientated Programming(OOP)
// // Its  concept or an ideology that is advocating on developing software based on real world objects.

// // CLASS vs OBJECTS
// /*
//    >A class is a blueprint of an object
//    >An object is an instance of a class
//    >Objects have properties
// */
// // X-tics of Objects
// /*
// 1. Inheritance-Ability to take on some/ all properties and methods of a superclass
// 2. Abstraction-Level of representation/hierarcy of a class(extent of definition of the classes)
// 3. Polymophism- objects of the class taking on many forms
// 4. Encapsulation- ability of objects/classes to group their methods (Ability to put things together but in a hidden way and treated differently).
// */
// // Variables in OOP are called properties
// let dance = {
//     style: "rhythm",
//     tempo: "5",
//     name: "butterfly",
//     music: "rnb",
//     age: "30",
//     type: "cultural"
// }
// // log() is a function that belongs to a console class
// console.log(dance.name);
// console.log(dance.style);

// let school = {
//     teachers: 15,
//     students: 30,
//     subjects: 4,
//     name: "Green Hill",
//     buildings: 3,
//     // Methods (functions in OOP are reffered to as methods)
//     performance: function(){
//         console.log("We always pass our students in first class")
//     },
//     sports: function(){
//         console.log("We are the soccer champions of Kampala")
//     }
// }
// school.performance();
// console.log(school.students);

// // Objects have behaviors and methods
// // methods-define what an object do to itself or others
// // Behaviors are found in the methods

// // Dynamic Class
// function Book(name, author, pages, year){
//     // "this" is a keyword used to identify a property of a class
//     this.name = name,
//     this.author = author,
//     this.pages = pages,
//     this.year = year
// }
// let book1 = new Book("outliers", "Malcolm Gladwell", 1112, 1995);
// let book2 = new Book("How to make friends", "Xhena", 2111, 2021);
// console.log(book1.name + " Written by " + book1.author);

// // Class Shoes
// function Shoe(name, color, label){
//     this.name = name,
//     this.color = color,
//     this. label = label
// }
// let shoe1 = new Shoe("Sneaker", "Grey", "Puma");
// let shoe2 = new Shoe("Gentle", "Black", "Clarks");
// console.log(shoe1.name + " brand of "+ shoe1.label)

// Dynamic functions
function Country(name, president, population, size, climate){
    this.cName = name;
    this.cPresident = president;
    this.cPopulation = population;
    this.cSize = size;
    this.cClimate = climate;
}
// Keyword "new" turns a funtion call into an instance or object of a class
// Instance refers to the values of a class
// "new" is a contractor used to initialize an instantiated object.
let uganda = new Country("Uganda", "Tibuhabura", 43000000, 15000, "Tropical")
let kenya = new Country("Kenya", "Ruto", 53000000, 49000, "Tropical");

// Another way to write functions
function baby(name, weight, gendar, yob){
    this.babyName = name;
    this.babyWeight = weight;
    this.babyGendar = gendar;
    this.babyYob = yob;
}
// this a parameter that some babies will have when others dont have
// let father = baby.this.father = "Ssekyanzi";
let baby1 = new baby("Lucy", "girl", 4, 2022);
console.log(baby1);

// 
