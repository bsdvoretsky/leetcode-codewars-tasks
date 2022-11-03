/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let costs = [cost[0], cost[1]];
  
  for (let i = 2; i < cost.length; i++) {
    costs.push(cost[i] + Math.min(costs[i - 2], costs[i - 1]));
  }
  
  console.log(costs);
  
  return Math.min(costs[cost.length - 2], costs[cost.length - 1]);
};