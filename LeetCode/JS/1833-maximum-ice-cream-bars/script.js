/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
  const compare = (a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    return -1;
  }

  let iceCreamBars = 0;
  let index = 0;

  costs.sort(compare);
  
  for(;;) {
    coins -= costs[index];
    if (coins < 0) break;
    index++;
    iceCreamBars++;
    if (index === costs.length) break;
  }

  return iceCreamBars;
};