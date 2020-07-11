//Tic Tac Toe Dawgs
let turnCount = 0;
let boardArray = createTheBoard();
const dashboard = document.getElementById('dashboard');
const reset = document.getElementById('reset');


window.onload = function() {
  
  let playerBannerX = document.getElementById('playerX');
  let playerBannerO = document.getElementById('playerO');
  //adding event listener to dashboard
  dashboard.addEventListener("click", function(e){
      //splitting the dashboard cordinates to array
      let coordinatesString = e.target.id;
      let coordStringArray = coordinatesString.split('');
      //assigning the coordinates to columns and rows for later piping to makeTurn()
      let columnValue = coordStringArray[1];
      let rowValue = coordStringArray[2];
      const playerX = 'X';
      const playerO = 'O';  

      //even turn numbers & turn0 is Player X
      if (turnCount % 2 === 0 && e.target.innerText === '') {
        //check for already clicked square
        //if makeTurn returns false
        if (makeTurn(columnValue, rowValue, playerX)) {
          e.target.innerText = playerX;
          playerBannerX = document.getElementById('playerX');
          if (!playerBannerX.classList.contains("playerX")) {
            playerBannerX.classList.toggle("playerX");
          }
          if (playerBannerO.classList.contains("playerO")) {
            playerBannerO.classList.toggle("playerO");
          }
        } 
      }
      //odd turn numbers is Player O
      else if (turnCount % 2 === 1 && e.target.innerText === ''){
        //check for already clicked square
        //if makeTurn returns false
        if (makeTurn(columnValue, rowValue, playerO)) {
          e.target.innerText = playerO;
          playerBannerO = document.getElementById('playerO');
          if (!playerBannerO.classList.contains("playerO")) {
            playerBannerO.classList.toggle("playerO");
          }
          if (playerBannerX.classList.contains("playerX")) {
            playerBannerX.classList.toggle("playerX");
          }
        }
      } 
      else {
        console.log('Error');
      }
  })
  reset.addEventListener("click", function(e){
  
    boardArray = createTheBoard();
    console.log('Reset Clicked')

    if (playerBannerX.classList.contains("playerX")) {
      playerBannerX.classList.toggle("playerX");
    }
    if (playerBannerO.classList.contains("playerO")) {
      playerBannerO.classList.toggle("playerO");
    }
  });
}

//2d array - each sub-array is a row
function createTheBoard() {

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

const makeTurn = (row, column, player) => {
  //if given cell is empty
  if (boardArray[row][column] === '-') {
  
    boardArray[row][column] = player;
    //incrementing turnCount as turnCount distiguishes players
    turnCount++;
    if (didIWin(boardArray, player)) {

      console.log('Winner winner chicken dinner: Player ' + player);
      alert('Winner winner chicken dinner: Player ' + player);
      
      //fill the board w/ random marks
      for(let j = 0; j < 3; j++){
        for (let i = 0; i < 3; i++) {
          //check if board cell is empty
          if (boardArray[i][j] === '-') {
            //fill w/ marks
            boardArray[i][j] = 'Z';
          }
        }
      }
    }
    else if (turnCount === 9) {
      alert("Draw! You're both winners!");
    } 
    return true;
  }
}

