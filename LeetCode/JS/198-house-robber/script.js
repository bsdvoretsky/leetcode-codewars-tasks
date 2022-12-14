/**
 * @param {number[]} nums
 * @return {number}
 */

let memo = new Map();
let temp;

var rob = function(nums) {
  if (memo.has(nums)) return memo.get(nums);
  else if (nums.length === 0) return 0;
  else if (nums.length === 1) return nums[0];
  else if (nums.length === 2) {
    temp = Math.max(nums[0], nums[1]);
    memo.set(nums, temp);
    return temp;
  } else if (nums.length === 3) {
    temp = Math.max(nums[1], nums[0] + nums[2]);
    memo.set(nums, temp);
    return temp;
  } else {
    let m = Math.floor(nums.length / 2);
    temp = Math.max(rob(nums.slice(0, m - 2)) + nums[m - 1] + rob(nums.slice(m + 1, nums.length)), 
                    rob(nums.slice(0, m - 1)) + nums[m] + rob(nums.slice(m + 2, nums.length)), 
                    rob(nums.slice(0, m)) + nums[m + 1] + rob(nums.slice(m + 3, nums.length)));
    memo.set(nums, temp);
    return temp;
  }
};