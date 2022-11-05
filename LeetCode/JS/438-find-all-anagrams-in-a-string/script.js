/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function(s, p) {
  if (s.length < p.length) return [];

  const checkIfMapsEqual = (q, r) => {
    let isEqual = true;

    q.forEach((val, key) => {
      if (
        !r.has(key)
        || r.get(key) !== val
      ) {
        isEqual = false;
        return;
      }
    });

    r.forEach((val, key) => {
      if (
        !q.has(key)
        || q.get(key) !== val
      ) {
        isEqual = false;
        return;
      }
    });

    return isEqual;
  }

  let resArr = [];
  let curSubStringMap = new Map();
  let MapOfStringP = new Map();

  for (char of p) {
    if (MapOfStringP.has(char)) {
      MapOfStringP.set(char, MapOfStringP.get(char) + 1);
    } else {
      MapOfStringP.set(char, 1);
    }
  }

  for (let i = 0; i < p.length; i++) {
    if (curSubStringMap.has(s[i])) {
      curSubStringMap.set(s[i], curSubStringMap.get(s[i]) + 1);
    } else {
      curSubStringMap.set(s[i], 1);
    }
  }

  for (let i = p.length; i < s.length + 1; i++) {
    if (
      checkIfMapsEqual(
        curSubStringMap, 
        MapOfStringP)
    ) resArr.push(i - p.length);

    if (curSubStringMap.get(s[i - p.length]) - 1 === 0) {
      curSubStringMap.delete(s[i - p.length]);
    } else {
      curSubStringMap.set(
        s[i - p.length], 
        curSubStringMap.get(s[i - p.length]) - 1);
    }

    if (curSubStringMap.has(s[i])) {
      curSubStringMap.set(s[i], curSubStringMap.get(s[i]) + 1);
    } else {
      curSubStringMap.set(s[i], 1);
    }
  }
  return resArr;
};