/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var characterReplacement = function(s, k) {
  const distancesBetweenLetters = new Map();
  const lengthOfStringS = s.length;

  let temp; // used for fill map
  let bufferOfDistances;
  let sumOfNumsInBuffer;
  let longestSubstringLength = 1;
  let currentLongestSubstringLength;
  let currentDistancesLength;

  for (let i = 0; i < lengthOfStringS; i++) {
    if (distancesBetweenLetters.has(s[i])) {
      temp = distancesBetweenLetters.get(s[i]);
      temp.push(i - temp.pop() - 1);
      temp.push(i);
    } else {
      distancesBetweenLetters.set(s[i], [i]);
    }
  }

  for (let currentDistances of distancesBetweenLetters.values()) {
    currentDistances.pop();
  }

  for (let currentDistances of distancesBetweenLetters.values()) {
    bufferOfDistances = [];
    sumOfNumsInBuffer = 0;
    currentLongestSubstringLength = 1;
    currentDistancesLength = currentDistances.length;

    for (let i = 0; i < currentDistancesLength; i++) {
      bufferOfDistances.push(currentDistances[i]);
      sumOfNumsInBuffer += currentDistances[i];
      currentLongestSubstringLength += 1;

      while (sumOfNumsInBuffer > k) {
        sumOfNumsInBuffer -= bufferOfDistances.shift();
        currentLongestSubstringLength -= 1;
      }

      if (currentLongestSubstringLength + k >= lengthOfStringS) {
        return lengthOfStringS;
      }

      if (currentLongestSubstringLength + k > longestSubstringLength) {
        longestSubstringLength = currentLongestSubstringLength + k;
      }
    }

    if (currentLongestSubstringLength + k >= lengthOfStringS) {
      return lengthOfStringS;
    }

    if (currentLongestSubstringLength + k > longestSubstringLength) {
      longestSubstringLength = currentLongestSubstringLength + k;
    }
  }

  return longestSubstringLength;
};