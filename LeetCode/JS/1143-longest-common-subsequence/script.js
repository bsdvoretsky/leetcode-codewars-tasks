/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

var longestCommonSubsequence = function(text1, text2) {
  let dp = [];

  for (let i = 0; i < text1.length; i++) {
    let row = new Array(text2.length).fill(0);

    dp.push(row);
  }

  if (text1[0] === text2[0]) dp[0][0] = 1;

  for (let i = 1; i < text2.length; i++) {
    if (dp[0][i - 1] === 1) dp[0][i] = 1;
    else {
      if (text2[i] === text1[0]) dp[0][i] = 1;
    }
  }

  for (let i = 1; i < text1.length; i++) {
    if (dp[i - 1][0] === 1) dp[i][0] = 1;
    else {
      if (text1[i] === text2[0]) dp[i][0] = 1;
    }
  }

  for (let i = 1; i < text1.length; i++) {
    for (let j = 1; j < text2.length; j++) {
      if (text1[i] === text2[j]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[text1.length - 1][text2.length - 1];
};