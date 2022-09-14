// There are four types of Loops
// 1.For Loop
// 2.While Loop/Do while loop
// 3. Switch
// ForEach Loop

// ForLoop
function firstLoop(){
for(var item =0; item <= 10; ++item){
    console .log(item);
}
}
// let num = 0;
function secondLoop(){
for(let num = 0; num <= 20; ++num){
    if(num % 2 != 0){
        console .log(num)
    }
}
}
// WhileLoop (whileloop is the least used)
function thirdLoop(){
let num = 0;
while(num <= 20){
    if(num % 2 != 0){
        console.log(num);
    }
}
}
// Switch (used when we have many conditions to be executed)
// let day = "Thursday"
// Function call
// firstLoop();
secondLoop();
