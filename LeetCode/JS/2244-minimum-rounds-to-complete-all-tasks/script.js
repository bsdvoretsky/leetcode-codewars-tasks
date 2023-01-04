/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
  let occurrences = new Map();
  let ans = 0;
  let notPossible = false;

  for (let i = 0; i < tasks.length; i++) {
    if (occurrences.has(tasks[i])) {
      occurrences.set(tasks[i], occurrences.get(tasks[i]) + 1);
    } else {
      occurrences.set(tasks[i], 1);
    }
  }

  occurrences.forEach((value) => {
    if (value === 1) {
      notPossible = true;
      return -1;
    }
    while (value % 3 !== 0) {
      value -= 2;
      ans++;
    }
    ans += value / 3;
  });

  return notPossible ? -1 : ans;
};