var allCells = document.querySelectorAll("td")
function click(){
    if (this.textContent === ""){
        this.textContent = "X";
    }
    else if (this.textContent === "X") {
        this.textContent = "O";
    }
    else{
        this.textContent = "";
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
