/*
392. Is Subsequence.

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

var isSubsequence = function(s, t) {
    if (s === "") {
        return true;
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[0]) {
            return isSubsequence(s.slice(1, s.length), t.slice(i + 1, t.length));
        }
    }
    return false;
};