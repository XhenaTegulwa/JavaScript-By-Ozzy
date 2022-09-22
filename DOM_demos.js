const h1 = document.getElementsByTagName("h1")[0];
const p = document.getElementsByTagName("p")[0];
const ul = document.getElementsByTagName("ul")[0];
const html = document.documentElement;

// Finding the parentNode
console.log(p.parentNode);
console.log(p.parentNode.parentNode);
console.log(html.parentNode);
// Finding the childNode for the Ul
console.log(ul.childNodes);

ul.firstElementChild.style.background = "yellow"
for(let element of ul.children){
    element.style.background = "pink"
}
ul.firstElementChild.style.background = "yellow"

document.body.children[3].lastElementChild.style.background = "fuchsia"

const tiger = ul.children[1]
tiger.nextElementSibling.style.background = "coral"
tiger.previousElementSibling.style.background = "aquamarine"

