function hello(){
console.log("hello world");
}

function helloYou(name){
console.log("hello "+name);
}

function addNum(num1,num2){
console.log(num1+num2)}

var v = "Global V "
var stuff = "Global stuff "

function fun(stuff) {
console.log(v)
//stuff = "Reassign stuff insige func"
console.log(stuff)
}
fun()
console.log(stuff)