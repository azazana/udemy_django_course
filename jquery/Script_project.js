var player1 = prompt('Input name player one, you will be blue:')
var player2 = prompt('Input name player two, you will be red:')
var first = true;
var classButton = 'n';
var text =': it is your turn, please pick a column to drop your '
namePlayer()
var finish = false
function namePlayer(){
if (first) {
        $('h3').text(player1+text+'blue chip.')
    }else{
        $('h3').text(player2+text+'red chip.')
    }
}
function checkFinish(countColor){
if (countColor>=4) {
    text = "has won! Refresh your browser to play again!"
    if (!first){
    $('h3').text("Player One "+text);
    }
    else{
    $('h3').text("Player Two "+text);
    }
    finish = true
    }
}

//function changeColor(rowIndex,colIndex,class){
//    var currentButton = $('#myTable tr:eq('+rowIndex+")" ).find('td:eq('+colIndex+')').find('button');
//    currentButton.toggleClass(class);
//}
//function getColor(rowIndex,colIndex){
//    var currentButton = $('#myTable tr:eq('+rowIndex+")" ).find('td:eq('+colIndex+')').find('button').css('background-color');
//}
//function checkBottom(colIndex){
//var colorReport = getColor(5,colIndex)
//for (var row = 5;row=0;row--)
//}
$(document).ready(
function() {
  $("#myTable tbody td").click(function() {
    var columnIndex = $(this).index();
    var i = 6
    while (i<=6 && i!==0 && !finish) {
        i--;
        var currentButton = $('#myTable tr:eq('+i+")" ).find('td:eq('+columnIndex+')').find('button');
        var color = currentButton.css("background-color");
        if (color==='rgb(128, 128, 128)'){
                if (first){

                    currentButton.toggleClass('turnBlue');
                    classButton = 'turnBlue'
                }else{
                    currentButton.toggleClass('turnRed');
                    classButton = 'turnRed'
                }
                first = !first
                namePlayer(first)
             break;
            }

    };
    var countColor = 1
    var downI=i
    if (downI<=3 && !finish){
        while (downI<=5){
            downI++
            var downButton = $('#myTable tr:eq('+downI+")" ).find('td:eq('+columnIndex+')').find('button');
            if (downButton.hasClass(classButton)){
                countColor++
                checkFinish(countColor)
            }
            }
        }
     // horizontal
     countColor = 1
     var columnIndexRight = columnIndex
     var columnIndexLeft = columnIndex

     while ((countColor<4||columnIndexRight>=7)&& !finish){
         //right
         columnIndexRight++
         var horizontalButton = $('#myTable tr:eq('+i+")" ).find('td:eq('+columnIndexRight+')').find('button');
         if (horizontalButton.hasClass(classButton)){
         countColor++
          }
         else{
         break;
         }
     }
      while ((countColor<4||columnIndexLeft<0)&& !finish){
         //left
         columnIndexLeft--
         var horizontalButton = $('#myTable tr:eq('+i+")" ).find('td:eq('+columnIndexLeft+')').find('button');
         if (horizontalButton.hasClass(classButton)){
         countColor++
         }
         else{
         break;
         }
     }
     checkFinish(countColor)
     countColor=1
     var columnIndexObliquelyLeft = columnIndex
     var lineIndexObliquelyLeft = i
     while ((countColor<4||columnIndexObliquelyLeft<0||lineIndexObliquelyLeft<0||
     lineIndexObliquelyLeft>=6||columnIndexObliquelyLeft>=7)&& !finish){
         //left
        columnIndexObliquelyLeft--
        lineIndexObliquelyLeft++
        if ( lineIndexObliquelyLeft>=6||columnIndexObliquelyLeft>=7||columnIndexObliquelyLeft<0||lineIndexObliquelyLeft<0) {
        break
        }
       var ObliquelyButton = $('#myTable tr:eq('+lineIndexObliquelyLeft+")" ).find('td:eq('+columnIndexObliquelyLeft+')').find('button');
        if (ObliquelyButton.hasClass(classButton)){
         countColor++
         }
         else{
         break;
         }
     }
     var columnIndexObliquelyRight = columnIndex
     var lineIndexObliquelyRight = i
     while ((countColor<4||columnIndexObliquelyRight<0||lineIndexObliquelyRight<0||
     lineIndexObliquelyRight>=6||columnIndexObliquelyRight>=7)&& !finish){
         //right
         columnIndexObliquelyRight++
         lineIndexObliquelyRight--
         if ( columnIndexObliquelyRight<0||lineIndexObliquelyRight<0||
     lineIndexObliquelyRight>=6||columnIndexObliquelyRight>=7) {
        break
        }
        var ObliquelyButton = $('#myTable tr:eq('+lineIndexObliquelyRight+")" ).find('td:eq('+columnIndexObliquelyRight+')').find('button');
         if (ObliquelyButton.hasClass(classButton)){
         countColor++
         }
         else{
         break;
         }
    }
     checkFinish(countColor)
    //obliquely - 2
     countColor=1
     var columnIndexObliquelyLeft = columnIndex
     var lineIndexObliquelyLeft = i
     console.log('currentButton')
     while ((countColor<4||columnIndexObliquelyLeft<0||lineIndexObliquelyLeft<0||
     lineIndexObliquelyLeft>=6||columnIndexObliquelyLeft>=7)&& !finish){
         //left
        columnIndexObliquelyLeft++
        lineIndexObliquelyLeft++
        if ( lineIndexObliquelyLeft>=7||columnIndexObliquelyLeft>=7||columnIndexObliquelyLeft<0||lineIndexObliquelyLeft<0) {
        break
        }
       var ObliquelyButton = $('#myTable tr:eq('+lineIndexObliquelyLeft+")" ).find('td:eq('+columnIndexObliquelyLeft+')').find('button');
        if (ObliquelyButton.hasClass(classButton)){
         countColor++
         }
         else{
         break;
         }
     }
     var columnIndexObliquelyRight = columnIndex
     var lineIndexObliquelyRight = i
     while ((countColor<4||columnIndexObliquelyRight<0||lineIndexObliquelyRight<0||
     lineIndexObliquelyRight>=6||columnIndexObliquelyRight>=7)&& !finish){
         //right
         columnIndexObliquelyRight--
         lineIndexObliquelyRight--
         if ( columnIndexObliquelyRight<0||lineIndexObliquelyRight<0||
     lineIndexObliquelyRight>=6||columnIndexObliquelyRight>=7) {
        break
        }
        var ObliquelyButton = $('#myTable tr:eq('+lineIndexObliquelyRight+")" ).find('td:eq('+columnIndexObliquelyRight+')').find('button');
         if (ObliquelyButton.hasClass(classButton)){
         countColor++
         }
         else{
         break;
         }
    }
         checkFinish(countColor)
  });
});