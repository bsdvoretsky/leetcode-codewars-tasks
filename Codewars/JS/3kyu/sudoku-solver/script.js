function sudoku(puzzle) {
  let values;
  let solve;
  
  function solveSudoku(puzzle, row, col) { 
    if (puzzle[row][col] === 0) {
      values = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      
      for (let i = 0; i < 9; i++) {
        values.delete(puzzle[row][i]);
        values.delete(puzzle[i][col]);
      }
      
      if (
        row >= 0 && row <= 2
        && col >= 0 && col <= 2
      ) {
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            values.delete(puzzle[i][j]);
          }
        }
      } else if (
        row >= 3 && row <= 5
        && col >= 0 && col <= 2
      ) {
        for (let i = 3; i < 6; i++) {
          for (let j = 0; j < 3; j++) {
            values.delete(puzzle[i][j]);
          }
        }
      } else if (
        row >= 6 && row <= 8
        && col >= 0 && col <= 2
      ) {
        for (let i = 6; i < 9; i++) {
          for (let j = 0; j < 3; j++) {
            values.delete(puzzle[i][j]);
          }
        }
      } else if (
        row >= 0 && row <= 2
        && col >= 3 && col <= 5
      ) {
        for (let i = 0; i < 3; i++) {
          for (let j = 3; j < 6; j++) {
            values.delete(puzzle[i][j]);
          }
        }
      } else if (
        row >= 3 && row <= 5
        && col >= 3 && col <= 5
      ) {
        for (let i = 3; i < 6; i++) {
          for (let j = 3; j < 6; j++) {
            values.delete(puzzle[i][j]);
          }
        }
      } else if (
        row >= 6 && row <= 8
        && col >= 3 && col <= 5
      ) {
        for (let i = 6; i < 9; i++) {
          for (let j = 3; j < 6; j++) {
            values.delete(puzzle[i][j]);
          }
        }
      } else if (
        row >= 0 && row <= 2
        && col >= 6 && col <= 8
      ) {
        for (let i = 0; i < 3; i++) {
          for (let j = 6; j < 9; j++) {
            values.delete(puzzle[i][j]);
          }
        }
      } else if (
        row >= 3 && row <= 5
        && col >= 6 && col <= 8
      ) {
        for (let i = 3; i < 6; i++) {
          for (let j = 6; j < 9; j++) {
            values.delete(puzzle[i][j]);
          }
        }
      } else if (
        row >= 6 && row <= 8
        && col >= 6 && col <= 8
      ) {
        for (let i = 6; i < 9; i++) {
          for (let j = 6; j < 9; j++) {
            values.delete(puzzle[i][j]);
          }
        }
      }
      
      if (values.size === 0) return null;
      
      for (let value of values.values()) {
        puzzle[row][col] = value;
 
        if (row === 8 && col === 8) {
          return puzzle;
        } else if (col === 8) {
          solve = solveSudoku(puzzle, row + 1, 0);
          if (solve) return solve;
        } else {
          solve = solveSudoku(puzzle, row, col + 1);
          if (solve) return solve;
        }
      }
      
      puzzle[row][col] = 0;
      return null;
    }
    
    if (row === 8 && col === 8) {
      return puzzle;
    } else if (col === 8) {
      return solveSudoku(puzzle, row + 1, 0);
    } else {
      return solveSudoku(puzzle, row, col + 1);
    }
  }
  
  return solveSudoku(puzzle, 0, 0);
}