/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
  let countOfIslands = 0;
  let m = grid.length;
  let n = grid[0].length;
  
  const numIslandsRec = (row, col) => {
    grid[row][col] = "was here";
    
    if (
      row - 1 >= 0
      && grid[row - 1][col] === "1"
    ) numIslandsRec(row - 1, col);
    if (
      row + 1 < m
      && grid[row + 1][col] === "1"
    ) numIslandsRec(row + 1, col);
    if (
      col - 1 >= 0
      && grid[row][col - 1] === "1"
    ) numIslandsRec(row, col - 1);
    if (
      col + 1 < n
      && grid[row][col + 1] === "1"
    ) numIslandsRec(row, col + 1);
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        countOfIslands++;
        numIslandsRec(i, j);
      }
    }
  }
  
  return countOfIslands;
};