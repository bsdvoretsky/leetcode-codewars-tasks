/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const binSearch = (begin, end) => {
      if (begin === end & nums[begin] !== target) return -1;
      
      let mid = Math.floor((begin + end) / 2);
      
      if (nums[mid] === target) return mid;
      else if (nums[mid] < target) return binSearch(mid + 1, end);
      else if (nums[mid] > target) return binSearch(begin, mid);
    }
    
    return binSearch(0, nums.length);
};