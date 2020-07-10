
//I think this will work:
let turnCount = 0;
const dashboard = document.getElementById('dashboard');
  
  window.onload = function(){
    dashboard.addEventListener("click", function(e){
        //console.log(e.target.id); //e.target."getID"
        let coordinatesString = e.target.id;
        let coordStringArray = coordinatesString.split('');
        let columnValue = coordStringArray[1];
        let rowValue = coordStringArray[2];
        const playerX = 'X';
        const playerO = 'O';
        turnCount++;
        
        //even turn numbers & 0
        if (turnCount % 2 === 1 && e.target.innerText === '') {
          e.target.innerText = playerX;
          makeTurn(columnValue, rowValue, playerX);
        } 
        //odd turn numbers 
        else if (turnCount % 2 === 0 && e.target.innerText === ''){
          e.target.innerText = playerO;
          makeTurn(columnValue, rowValue, playerO);
        } 
        
        else {
          console.log('Error');
        }
    })
  }

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
    
    //empty HTML representation
    //dashboard.children
    for(let j = 0; j < 3; j++){
      for (let i = 0; i < 3; i++) {

        const boardCell = document.getElementById('c' + j + i);
        boardCell.innerText = '';
      }
    }

    //reset turnCount (back to 0)
    turnCount = 0;
    
    //create board 
    const boardArray = new Array(3);
    //Create each row and fill
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
    alert('Winner winner chicken dinner: Player' + player);
    //call some function to reset board
    boardArray = createTheBoard();
  } else return console.log('No winner yet.')
}


//JS Console Testing Area (ie visually ugly)
let boardArray = createTheBoard();
console.log(boardArray);

//make mark
// makeTurn(0, 0, 'X');
// makeTurn(0, 1, 'X');
// makeTurn(0, 2, 'X');
