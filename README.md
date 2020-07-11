TICTOCTOE PAIR CODING

Play Loop:
1. Player clicks
2. If Cell has object, block cell
3. Check if state is in any of 8 Winning States after each move
  A) Alert a Win
  B) Or continue play loop
  C) Or alert draw

General To-Do:
1. Store state of board internally
2. Update w/ each turn
3. Reset internal after win ... (w/ reset button)


JavaScript Internal Summary: 
- createBoard()
  - sets HTML cells' text back to empty
  - creates new 2D array for internal JS board representaion

- makeTurn()
  - checks if didIWin() 
    - fills all empty squares
    - alerts players
  - or if game was draw (alerts player)

- didIWin() [Juan's favorite!]
  - pass array and player type
  - check for three in a row for columns, rows, & diagonals
  - return immediately if three in a row of same kind are found

- window.onload()
  - click a square
    - sets banners
    - calls makeTurn and passes in player (based on current turnCount)
  - reset button
   - calls createBoard() to replace board
   - sets turnCount to 0
   - sets player banners styling back to default

  