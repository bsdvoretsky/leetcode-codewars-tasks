/**
 * @param {string[]} strs
 * @return {number}
 */

var minDeletionSize = function(strs) {
  let ans = 0;
  let isSorted;
  let maxLetter;

  for (let i = 0; i < strs[0].length; i++) {
    isSorted = true;
    maxLetter = 'a';

    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] < maxLetter) {
        isSorted = false;
        break;
      }
      maxLetter = strs[j][i];
    }

    if (!isSorted) ans++;
  }

  return ans;
};