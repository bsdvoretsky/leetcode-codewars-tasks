/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

var wordPattern = function(pattern, s) {
  let bijection1 = new Map();
  let bijection2 = new Map();
  let words = s.split(' ');

  if (pattern.length !== words.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (
      bijection1.has(pattern[i])
      && bijection1.get(pattern[i]) !== words[i]
      ||
      bijection2.has(words[i])
      && bijection2.get(words[i]) !== pattern[i]
    ) {
      return false;
    } else if (
      !bijection1.has(pattern[i])
      && !bijection2.has(words[i])
    ) {
      bijection1.set(pattern[i], words[i]);
      bijection2.set(words[i], pattern[i]);
    }
    }

  return true;
};