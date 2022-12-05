/**
 * @param {number[]} nums
 * @return {number}
 */

class Num {
  constructor(val) {
    this.val = val;
    this.seenBefore = false;
  }

  visit() {
    this.seenBefore = true;
  }
}

var arrayNesting = function(nums) {
  let res = -1;
  let tempNum;
  let tempLength;
  let newNums = [];

  for (let num of nums) {
    newNums.push(new Num(num));
  }

  for (let k = 0; k < newNums.length; k++) {
    if (!newNums[k].seenBefore) {
      tempNum = newNums[k]
      tempLength = 0;
      while (!tempNum.seenBefore) {
        tempNum.seenBefore = true;
        tempLength++;
        tempNum = newNums[tempNum.val];
      }
      if (tempLength > res) res = tempLength;
    }
  }

  return res;
};