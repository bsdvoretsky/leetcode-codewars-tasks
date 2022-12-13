/**
 * @param {number[][]} matrix
 * @return {number}
 */

var minFallingPathSum = function(matrix) {
  let n = matrix.length;
  let tempSums = [];
  let minSum = 10000;

  for (let i = 0; i < n; i++) {
    let row = [];

    for (let j = 0; j < n; j++) {
      if (i === 0) {
        row.push(matrix[i][j]);
      } else {
        row.push(null);
      }
    }

    tempSums.push(row);
  }
  
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j - 1 >= 0 && j + 1 <= n - 1) {
        tempSums[i][j] = Math.min(tempSums[i - 1][j - 1], tempSums[i - 1][j], tempSums[i - 1][j + 1]) + matrix[i][j];
      } else if (j - 1 >= 0) {
        tempSums[i][j] = Math.min(tempSums[i - 1][j - 1], tempSums[i - 1][j]) + matrix[i][j];
      } else if (j + 1 <= n - 1) {
        tempSums[i][j] = Math.min(tempSums[i - 1][j], tempSums[i - 1][j + 1]) + matrix[i][j];
      }
    }
  }

  for (let j = 0; j < n; j++) {
    if (tempSums[n - 1][j] < minSum) minSum = tempSums[n - 1][j];
  }

  return minSum;
};