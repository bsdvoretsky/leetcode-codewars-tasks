/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const dp = new Array(prices.length);
  for (let i = 0; i < prices.length; i++) {
    dp[i] = new Array(2).fill(-1);
  }

  const f = (index, status) => {
    if (index >= prices.length) return 0;

    if (dp[index][status] !== -1) return dp[index][status];

    if (status === 1) {
      return dp[index][status] = Math.max(
        -prices[index] + f(index + 1, 0),
        0 + f(index + 1, 1)
      );
    }
    
    return dp[index][status] = Math.max(
      prices[index] + f(index + 2, 1),
      0 + f(index + 1, 0)
    );
  }

  return f(0, 1);
};