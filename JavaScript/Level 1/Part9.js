var name=prompt("What is your name?")
var surname=prompt("What is your surname?")
var age=prompt("How old are you?")
var higth = prompt("How tall are you?")
var patName=prompt("What is name of your pat?")

if (name[0]===surname[0]&&age<=30&&
    age>=20&&higth>170&&patName[patName.length-1]=="y"){
console.log("For spy")
}else{
console.log("Nothing for you")}
