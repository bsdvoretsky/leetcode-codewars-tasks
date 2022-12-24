/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
  let numbersOfWays = [1, 1];
  let modulo = Math.pow(10, 9) + 7;
  let curSum = 0;

  for (let i = 2; i <= n; i++) {
    numbersOfWays[i] = numbersOfWays[i - 2] + numbersOfWays[i - 1];
    
    if (i >= 3) {
      curSum += numbersOfWays[i - 3];

      curSum %= modulo;

      numbersOfWays[i] += curSum * 2;
    }

    numbersOfWays[i] %= modulo;
  }

  return numbersOfWays[n];
};