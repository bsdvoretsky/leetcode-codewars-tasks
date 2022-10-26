/*
1480. Running Sum of 1d Array.

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
*/

var runningSum = function(nums) {
    let curSum = 0;
    let res = [];
    
    for (let i = 0; i < nums.length; i++) {
        curSum += nums[i];
        res.push(curSum);
    }
    
    return res;
};