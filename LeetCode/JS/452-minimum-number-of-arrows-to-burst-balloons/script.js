/**
 * @param {number[][]} points
 * @return {number}
 */

var findMinArrowShots = function(points) {
  const compare = (a, b) => {
    if (a[0] > b[0]) return 1;
    if (a === b) return 0;
    return -1;
  }

  points.sort(compare);

  let arrowCounter = 1;
  let minRightCorner = points[0][1];
  let index = 1;

  while (index < points.length) {
    if (minRightCorner >= points[index][0]) {
      if (points[index][1] < minRightCorner) {
        minRightCorner = points[index][1];
      }
    } else {
      minRightCorner = points[index][1];
      arrowCounter++;
    }
    index++;
  }

  return arrowCounter;
};