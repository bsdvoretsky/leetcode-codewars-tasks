/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */

var possibleBipartition = function(n, dislikes) {
  let group1 = new Set();
  let group2 = new Set();
  let mapDislikes = new Map();

  const distribute = (group, person) => {
    let arr = mapDislikes.get(person);
  
    if (group === 1 && !group1.has(person)) {
      group1.add(person);

      if (arr !== undefined) {
        for (let i = 0; i < arr.length; i++) {
          distribute(2, arr[i]);
        }
      }
    } else if (group == 2 && !group2.has(person)) {
      group2.add(person);
      
      if (arr !== undefined) {
        for (let i = 0; i < arr.length; i++) {
          distribute(1, arr[i]);
        }
      }
    }
  }

  for (let i = 0; i < dislikes.length; i++) {
    if (mapDislikes.has(dislikes[i][0])) {
      mapDislikes.get(dislikes[i][0]).push(dislikes[i][1]);
    } else {
      mapDislikes.set(dislikes[i][0], [dislikes[i][1]]);
    }

    if (mapDislikes.has(dislikes[i][1])) {
      mapDislikes.get(dislikes[i][1]).push(dislikes[i][0]);
    } else {
      mapDislikes.set(dislikes[i][1], [dislikes[i][0]]);
    }
  }

  for (let i = 1; i <= n; i++) {
    if (!group1.has(i) && !group2.has(i)) {
      distribute(1, i);
    }
  }

  for (let i = 1; i <= n; i++) {
    if (group1.has(i) && group2.has(i)) return false;
  }

  return true;
};
