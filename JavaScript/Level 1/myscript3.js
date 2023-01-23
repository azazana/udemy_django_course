var hot = false
var temp = 40
if (temp>80) {
    console.log("Hot outside")
}else if(temp<=80 && temp>=50){
console.log("Average temp outside")}
else if (temp<50 && temp>=32){
console.log("It is pretty cold out")
}else{
console.log("it is very cold")}

var ham = 0;
var cheese =4;

var report ="blank"

if (ham >=10 && cheese>=10){
report = "Strong sales of both ham and cheese"
}else if(ham ===0 && cheese===0){
report="Nothing to Sold"
}else{
report="We had some sales of items"
}
console.log(report)