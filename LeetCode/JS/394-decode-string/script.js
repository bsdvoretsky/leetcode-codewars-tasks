/**
 * @param {string} s
 * @return {string}
 */

var decodeString = function(s) {
  let res = "";
  let times = "";
  let subStr = "";
  let decodeSubStr;
  let index = 0;
  let bracesIndex = 0;
  if (s === "") return "";
  if (s[index] >= '0' && s[index] <= '9') {
    while (s[index] >= '0' && s[index] <= '9') {
      times += s[index];
      index++;
    }

    index++;
    while (!(bracesIndex === 0 && s[index] === ']')) {
      if (s[index] === '[') bracesIndex++; 
      else if (s[index] === ']') bracesIndex--;
      subStr += s[index];
      index++;
    }
    
    decodeSubStr = decodeString(subStr);
    for (let i = 0; i < parseInt(times); i++) res += decodeSubStr;
  } else {
    while (index < s.length && !(s[index] >= '0' && s[index] <= '9')) {
      subStr += s[index];
      index++;
    }

    res += subStr;

    index--;
  }

  res += decodeString(s.slice(index + 1, s.length));
  return res;
};