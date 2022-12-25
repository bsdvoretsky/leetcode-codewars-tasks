/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */

var answerQueries = function(nums, queries) {
  let res = [];
  let tempSum;
  let index;
  let count;

  const compare = (a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  nums.sort(compare);

  for (let i = 0; i < queries.length; i++) {
    tempSum = 0;
    index = 0;
    count = 0;

    while (index < nums.length && tempSum < queries[i]) {
      if (tempSum + nums[index] > queries[i]) break;
      tempSum += nums[index++];
      count++;
    }

    res.push(count);
  }

  return res;
};