var player1 = prompt('Input name player one, you will be blue:')
var player2 = prompt('Input name player two, you will be red:')
var first = true
//
////$('h3').text(player1+this.text())
//$('h3').text(player1+' '+$('h3').text())
//
////
//changeColor(first);
//if (first){
//    var first=false;
//} else {
//    var first=true};

//}
//$(document).ready(function(){
//$('.circle').on('click',function() {
//    var columnIndex = $(this).index();
//    alert("Индекс колонки: " + columnIndex);
//
//})
//})
$(document).ready(function() {
  $("#myTable tbody td").click(function() {
    var columnIndex = $(this).index();
    var i = 7
    while (i<=7 && i!==0) {
        i--;
        var button = $('#myTable tr:eq('+i+")" ).find('td:eq('+columnIndex+')').find('button');
        var color = button.css("background-color");
        if (color==='rgb(128, 128, 128)'){
                if (first){
                    button.toggleClass('turnBlue');
                }else{
                    button.toggleClass('turnRed');
                }
                first = !first
             break;
            }
    };


  });
});