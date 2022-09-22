const paragraph = document.createElement("p");

paragraph.textContent = "A brand new paragraph"
paragraph.innerHTML = "I am Paragraph with <strong>bold</strong>."


console.log(paragraph);

const toDoList = document.querySelector("ul");
const newToDo = document.createElement("li");

// Adding the newToDo list
newToDo.textContent = "Do Homework";
// Keyword appendchind is used when we want to add something
toDoList.appendChild(newToDo);

// Inserting/adding a new Element
anotherToDo = document.createElement("li");
anotherToDo.textContent = "Pay Bills";
toDoList.insertBefore(anotherToDo, toDoList.firstElementChild);

// Replacing the 2nd element in arrays (feed the cat)
const modifyToDo = document.createElement("li");
modifyToDo.textContent = "Feed the dog";
toDoList.replaceChild(modifyToDo, toDoList.children[2]);

// Removing an element
toDoList.removeChild(toDoList, lastElementChild);
