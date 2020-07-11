//Tic Tac Toe Dawgs
let turnCount = 0;
const dashboard = document.getElementById('dashboard');
const reset = document.getElementById('reset');

  window.onload = function(){
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
        //incrementing turnCount as turnCount distiguishes players
        turnCount++;
        
        let playerBannerX = document.getElementById('playerX');
        let playerBannerO = document.getElementById('playerO');

        //even turn numbers & 0 is Player X
        if (turnCount % 2 === 1 && e.target.innerText === '') {
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
        else if (turnCount % 2 === 0 && e.target.innerText === ''){
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
          /*
          e.target.innerText = playerO;
          makeTurn(columnValue, rowValue, playerO);
          playerBannerO = document.getElementById('playerO');
          if (!playerBannerO.classList.contains("playerO")) {
            playerBannerO.classList.toggle("playerO");
          }
          */
          //add check for already clicked square
          //check internal JS array using rows and cols to see if a mark's already there
        } 
        
        else {
          console.log('Error');
        }
    })
    reset.addEventListener("click", function(e){
      //alert('Game Draw!');
      boardArray = createTheBoard();
      console.log('Reset Clicked')
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

function makeTurn(row, column, player) {
  //if given cell is empty
  if (boardArray[row][column] === '-') {
    if (turnCount === 9) {
      for(let j = 0; j < 3; j++){
        for (let i = 0; i < 3; i++) {
          //check if board cell is empty
          if (boardArray[row][column] === '-') {
            //continue game
          }
        }
      }
      alert("You're both winners!");
    }
    boardArray[row][column] = player;
    if (didIWin(boardArray, player)) {

      console.log('Winner winner chicken dinner: Player ' + player);
      alert('Winner winner chicken dinner: Player' + player);
      //call some function to reset board
      //boardArray = createTheBoard();
    } 
    //alert('You're both winners, it's a draw)
    // else {
    //   for(let j = 0; j < 3; j++){
    //     for (let i = 0; i < 3; i++) {
    //       //check if board cell is empty
    //       if (boardArray[row][column] === '-') {
    //         //continue game
    //       }
    //     }
    //   }
    //   alert("You're both winners!");
    // }
    return true;
  }
  else {
    console.log('No winner yet.')
    return false;
  }
}


//JS Console Testing Area (ie visually ugly)
let boardArray = createTheBoard();
//console.log(boardArray);
