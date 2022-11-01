/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    const binSearch = (begin, end) => {
      if (begin === end) return begin;
      
      let mid = Math.floor((begin + end) / 2);
      
      if (!isBadVersion(mid)) return binSearch(mid + 1, end);
      return binSearch(begin, mid);
    }
    
    return binSearch(0, n + 1);
  };
};