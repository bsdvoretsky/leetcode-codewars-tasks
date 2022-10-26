/*
Rail Fence Cipher: Encoding and Decoding.

Create two functions to encode and then decode a string using the Rail Fence Cipher. This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails". First start off moving diagonally and down. When you reach the bottom, reverse direction and move diagonally and up until you reach the top rail. Continue until you reach the end of the string. Each "rail" is then read left to right to derive the encoded string.

For example, the string "WEAREDISCOVEREDFLEEATONCE" could be represented in a three rail system as follows:

W       E       C       R       L       T       E
  E   R   D   S   O   E   E   F   E   A   O   C  
    A       I       V       D       E       N    

The encoded string would be:
WECRLTEERDSOEEFEAOCAIVDEN

Write a function/method that takes 2 arguments, a string and the number of rails, and returns the ENCODED string.

Write a second function/method that takes 2 arguments, an encoded string and the number of rails, and returns the DECODED string.

For both encoding and decoding, assume number of rails >= 2 and that passing an empty string will return an empty string.

Note that the example above excludes the punctuation and spaces just for simplicity. There are, however, tests that include punctuation. Don't filter out punctuation as they are a part of the string.
*/

function encodeRailFenceCipher(string, numberRails) {
  let arr = [];
  for (let i = 0; i < numberRails; i++) {
    arr.push([]);
  }
  let curRail = 0;
  let dir = "D";
  
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < numberRails; j++) {
      if (j === curRail) {
        arr[j].push(string[i]);
      }
    }
    if (dir === "D") {
      if (curRail + 1 >= numberRails) {
        dir = "U";
        curRail--;
      } else {
        curRail++;
      }
    } else if (dir === "U") {
      if (curRail - 1 < 0) {
        dir = "D";
        curRail++;
      } else {
        curRail--;
      }
    }
  }
  
  res = "";
  for (let i = 0; i < numberRails; i++) {
    res += arr[i].join("");
  }
  
  return res;
}

function decodeRailFenceCipher(string, numberRails) {
  let arr1 = [];
  for (let i = 0; i < numberRails; i++) {
    arr1.push(0);
  }
  let curRail = 0;
  let dir = "D";
  for (let i = 0; i < string.length; i++) {
    arr1[curRail]++;
    if (dir === "D") {
      if (curRail + 1 >= numberRails) {
        curRail--;
        dir = "U";
      } else {
        curRail++;
      }
    } else if (dir === "U") {
      if (curRail - 1 < 0) {
        curRail++;
        dir = "D";
      } else {
        curRail--;
      }
    }
  }
  let arr2 = [];
  let b = 0;
  let e;
  while (arr1.length !== 0) {
    e = arr1.shift();
    arr2.push(string.slice(b, b + e).split(""));
    b = b + e;
  }
  
  curRail = 0;
  dir = "D";
  let res = "";
  
  for (;;) {
    let fl = false;
    
    if (arr2[curRail].length !== 0) {
      res += arr2[curRail].shift();
      fl = true;
    }
    
    if (dir === "D") {
      if (curRail + 1 >= numberRails) {
        curRail--;
        dir = "U";
      } else {
        curRail++;
      }
    } else if (dir === "U") {
      if (curRail - 1 < 0) {
        curRail++;
        dir = "D";
      } else {
        curRail--;
      }
    }
    
    if (!fl) {
      break;
    }
  }
  
  return res;
}