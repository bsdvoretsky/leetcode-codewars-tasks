function getGeneration(cells, generations) {
  let top, left, right, bottom;
  let aliveNeighbours;
  let tmpCells;
  let resCells = JSON.parse(JSON.stringify(cells));
  let mapExpansion1 = new Array(generations + 1).fill(0);
  let mapExpansion2 = new Array(2 * generations + 2 + resCells[0].length).fill(0);
  
  // expanding our universe
  for (let i = 0; i < resCells.length; i++) {
    resCells[i] = mapExpansion1.concat(resCells[i]).concat(mapExpansion1);
  }
  for (let i = 0; i < generations + 1; i++) {
    resCells = [mapExpansion2].concat(resCells);
    resCells.push(mapExpansion2);
  }

  left = resCells[0].length;
  right = -1;
  
  // computing the steps
  for (let n = 0; n < generations; n++) {
    tmpCells = JSON.parse(JSON.stringify(resCells));
    for (let i = 1; i < resCells.length - 1; i++) {
      for (let j = 1; j < resCells[i].length - 1; j++) {
        aliveNeighbours = 
          resCells[i - 1][j - 1] + 
          resCells[i - 1][j] +
          resCells[i - 1][j + 1] + 
          resCells[i][j - 1] + 
          resCells[i][j + 1] +
          resCells[i + 1][j - 1] + 
          resCells[i + 1][j] +
          resCells[i + 1][j + 1];
        if (
          resCells[i][j] === 1
          && (aliveNeighbours < 2 || aliveNeighbours > 3)
        ) tmpCells[i][j] = 0;
        if (resCells[i][j] === 0 && aliveNeighbours === 3) {
          tmpCells[i][j] = 1;
        }
      }
    }
    resCells = JSON.parse(JSON.stringify(tmpCells));
  }

  // computing border of result cells
  for (let i = 1; i < resCells.length - 1; i++) {
    if (resCells[i].reduce((a, b) => a + b, 0) !== 0) {
      top = i;
      break;
    }
  }
  for (let i = resCells.length - 2; i >= 1; i--) {
    if (resCells[i].reduce((a, b) => a + b, 0) !== 0) {
      bottom = i;
      break;
    }
  }
  for (let i = 1; i < resCells.length - 1; i++) {
    for (let j = 1; j < resCells[i].length - 1; j++) {
      if (resCells[i][j] === 1) {
        if (j < left) left = j;
        if (j > right) right = j;
      }
    }
  }

  if (
    top === undefined
    || right === -1
  ) return [[]];

  // cropping our universe
  resCells = resCells.slice(top, bottom + 1);
  for (let i = 0; i < resCells.length; i++) {
    resCells[i] = resCells[i].slice(left, right + 1);
  }

  return resCells;
}