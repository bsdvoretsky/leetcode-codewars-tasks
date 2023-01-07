/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let start, j;
  let n = gas.length;
  let tank;

  for (let i = 0; i < n; i++) {
    if (gas[i] >= cost[i] && gas[i] !== 0) {
      start = i;
      j = start + 1;
      tank = gas[i] - cost[i]

      while (j % n !== start) {
        tank += gas[j % n];
        tank -= cost[j % n];
        j++;

        if (tank < 0) break;
      }

      if (tank < 0) continue;
      return start;
    }
  }

  return -1;
};