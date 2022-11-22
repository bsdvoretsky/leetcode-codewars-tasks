/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let symbolsCounts = new Map();
  let bulls = 0;
  let cows = 0;
  let symbolCount;

  for (let i = 0; i < secret.length; i++) {
    if (symbolsCounts.has(secret[i])) {
      symbolCount = symbolsCounts.get(secret[i]);
      symbolsCounts.set(secret[i], symbolCount + 1);
    } else {
      symbolsCounts.set(secret[i], 1);
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (symbolsCounts.has(guess[i]) && secret[i] === guess[i]) {
      bulls++;
      symbolCount = symbolsCounts.get(guess[i]);
      symbolsCounts.set(guess[i], symbolCount - 1);
      if (symbolCount - 1 === 0) {
        symbolsCounts.delete(guess[i]);
      }
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (symbolsCounts.has(guess[i]) && secret[i] !== guess[i]) {
      cows++;
      symbolCount = symbolsCounts.get(guess[i]);
      symbolsCounts.set(guess[i], symbolCount - 1);
      if (symbolCount - 1 === 0) {
        symbolsCounts.delete(guess[i]);
      }
    }
  }

  return `${bulls}A${cows}B`;
};