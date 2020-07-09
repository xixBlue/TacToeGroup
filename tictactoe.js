
//I think this will work:
/* 
var dashboard = document.getElementById('dashboard');
  window.onload = function(){
    dashboard.addEventListener("click", function(e){
      console.log(e.target);
    })
  } 
*/
//Tic Tac Toe Dawgs

//2d array - each sub-array is a row
function createTheBoard() {

   /*  const boardHtml = document.getElementById('dashboard');
    const rowsHtml = boardHtml.children;
    //const cellsHtml = rowsHtml.children;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        rowsHtml[i][j].addEventListener() = function() {

        }
      }
    } */
    


    //create board
    const boardArray = new Array(3);
    //Create each row
    for (let i = 0; i < boardArray.length; i++){
        boardArray[i] = new Array(3).fill('-');
    }


    return boardArray;
}

const didIWin = (arr, player) => {
  //check for column win
  if (arr[0][0] === player && arr[1][0] === player && arr[2][0] === player) return true;
  if (arr[0][1] === player && arr[1][1] === player && arr[2][1] === player) return true;
  if (arr[0][2] === player && arr[1][2] === player && arr[2][2] === player) return true;


  //check for row win
  for (let i = 0; i < arr.length; i++){
      if (arr[i][0] === player && arr[i][1] === player && arr[i][2] === player) return true;
  }

  //check for diagonals
  if (arr[0][0] === player && arr[1][1] === player && arr[2][2] === player) return true;
  if (arr[0][2] === player && arr[1][1] === player && arr[2][0] === player) return true;

  //no win
  return false;
}

function makeTurn(row, column, player) {

  boardArray[row][column] = player;
  if (didIWin(boardArray, player)) {
    console.log('Winner winner chicken dinner: Player ' + player);
  } else return console.log('No winner yet.')
}


//JS Console Testing Area (ie visually ugly)
const boardArray = createTheBoard();
console.log(boardArray);

//make mark
makeTurn(0, 0, 'X');
makeTurn(0, 1, 'X');
makeTurn(0, 2, 'X');