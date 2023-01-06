/**
 * @param {number} n
 * @param {number[][]} artifacts
 * @param {number[][]} dig
 * @return {number}
 */

var digArtifacts = function(n, artifacts, dig) {
  let map = [];
  let arr;
  for (let i = 0; i < n + 6; i++) {
    arr = new Array(n + 6).fill(-1);
    map.push(arr);
  }

  let r1, c1, r2, c2;
  for (let i = 0; i < artifacts.length; i++) {
    r1 = artifacts[i][0] + 3;
    c1 = artifacts[i][1] + 3;
    r2 = artifacts[i][2] + 3;
    c2 = artifacts[i][3] + 3;

    map[c1][r1] = i;
    map[c2][r2] = i;
    if (r2 === r1 + 1 && c2 === c1 + 1) {
      map[c1][r2] = i;
      map[c2][r1] = i;
    } else if (r2 === r1 + 3) {
      map[c1][r1 + 1] = i;
      map[c1][r1 + 2] = i;
    } else if (c2 === c1 + 3) {
      map[c1 + 1][r1] = i;
      map[c1 + 2][r1] = i;
    } else if (r2 === r1 + 2) {
      map[c1][r1 + 1] = i;
    } else if (c2 === c1 + 2) {
      map[c1 + 1][r1] = i;
    }
  }

  let ans = 0;
  let x, y, artifact;
  for (let i = 0; i < dig.length; i++) {
    x = dig[i][0] + 3;
    y = dig[i][1] + 3;
    artifact = map[y][x];
    if (artifact !== -1) {
      map[y][x] = -1;
      if (
        !(map[y - 1][x - 1] === artifact
        || map[y - 1][x] === artifact
        || map[y - 1][x + 1] === artifact
        || map[y][x - 1] === artifact
        || map[y][x + 1] === artifact
        || map[y + 1][x - 1] === artifact
        || map[y + 1][x] === artifact
        || map[y + 1][x + 1] === artifact
        || map[y][x - 3] === artifact
        || map[y][x - 2] === artifact
        || map[y][x + 2] === artifact
        || map[y][x + 3] === artifact
        || map[y - 3][x] === artifact
        || map[y - 2][x] === artifact
        || map[y + 2][x] === artifact
        || map[y + 3][x] === artifact
        )
      ) {
        ans++;
      }
    }
  }

  return ans;
};