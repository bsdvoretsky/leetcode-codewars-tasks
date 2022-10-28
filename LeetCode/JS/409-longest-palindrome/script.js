/*
409. Longest Palindrome.

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
*/

/**
 * @param {string} s
 * @return {number}
 */
 
var longestPalindrome = function(s) {
    let map = new Map();
    
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) !== undefined) map.set(s[i], map.get(s[i]) + 1);
        else map.set(s[i], 1);
    }
    
    let res = 0;
    let grepOdd = false;
    
    map.forEach((value) => {
        if (value % 2 === 0) {
            res += value;
        } else {
            if (!grepOdd) {
                res += value;
                grepOdd = true;
            } else {
                if (value > 1) res += value - 1;
            }
        }
    });
    
    return res;
};