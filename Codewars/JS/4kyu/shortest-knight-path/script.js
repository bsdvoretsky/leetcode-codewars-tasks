function knight(start, finish) {
  let board = new Array(8);
  for (let i = 0; i < 8; i++) {
    board[i] = new Array(8).fill(-1);
  }
  let xCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  
  board[parseInt(start[1]) - 1][xCoords.indexOf(start[0])] = 0;

  for (let step = 1; step <= 6; step++) {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (board[i][j] === -1) {
          if (
            i - 2 >= 0 
            && j - 1 >= 0 
            && board[i - 2][j - 1] === step - 1
            ||
            i - 2 >= 0 
            && j + 1 <= 7 
            && board[i - 2][j + 1] === step - 1
            ||
            i - 1 >= 0 
            && j - 2 >= 0 
            && board[i - 1][j - 2] === step - 1
            ||
            i - 1 >= 0 
            && j + 2 <= 7 
            && board[i - 1][j + 2] === step - 1
            ||
            i + 2 <= 7 
            && j - 1 >= 0 
            && board[i + 2][j - 1] === step - 1
            ||
            i + 2 <= 7 
            && j + 1 <= 7 
            && board[i + 2][j + 1] === step - 1
            ||
            i + 1 <= 7 
            && j - 2 >= 0 
            && board[i + 1][j - 2] === step - 1
            ||
            i + 1 <= 7 
            && j + 2 <= 7 
            && board[i + 1][j + 2] === step - 1
          ) board[i][j] = step;
        }
      }
    }
  }
  return board[parseInt(finish[1]) - 1][xCoords.indexOf(finish[0])];
}