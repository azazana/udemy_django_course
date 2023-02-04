var allCells = document.querySelectorAll(".cell")
function click(event){
    var cell = event.target
    if (cell.textContent == ""){
        cell.textContent = "X";
    }
    else if (cell.textContent == "X") {
        cell.textContent = "O";
    }
    else{
        cell.textContent = "";
    }
}

for (var i = 0; i< allCells.length;i++) {
    allCells[i].addEventListener("click", click);
};

var button = document.querySelector("#refresh");

button.addEventListener("click", function(){
    for (var i = 0; i< allCells.length;i++) {
        allCells[i].textContent="";
    };
})
