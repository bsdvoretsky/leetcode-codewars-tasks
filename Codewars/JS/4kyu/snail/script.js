/*
Snail Sort.

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
*/

snail = function(array) {
  let n = array.length;
  let wasHere = {};
  let res = [];
  let dir = "R";
  
  if (array[0].length === 0) return res;
  
  const travel = (x, y) => {
    wasHere[[x, y]] = true;
    res.push(array[y][x]);
    
    if (dir === "R") {
      if (x + 1 < n & !wasHere[[x + 1, y]]) {
        travel(x + 1, y);
      } else {
        dir = "D"
        if (y + 1 < n & !wasHere[[x, y + 1]]) {
          travel(x, y + 1);
        }
      }
    } else if (dir === "D") {
        if (y + 1 < n & !wasHere[[x, y + 1]]) {
          travel(x, y + 1);
        } else {
          dir = "L"
          if (x - 1 >= 0 & !wasHere[[x - 1, y]]) {
            travel(x - 1, y);
          }
        }
    } else if (dir === "L") {
        if (x - 1 >= 0 & !wasHere[[x - 1, y]]) {
          travel(x - 1, y);
        } else {
          dir = "U"
          if (y - 1 >= 0 & !wasHere[[x, y - 1]]) {
            travel(x, y - 1);
          }
        }
    } else if (dir === "U") {
        if (y - 1 >= 0 & !wasHere[[x, y - 1]]) {
          travel(x, y - 1);
        } else {
          dir = "R"
          if (x + 1 < n & !wasHere[[x + 1, y]]) {
            travel(x + 1, y);
          }
        }
    }
  }
  
  travel(0, 0);
  return res;
}