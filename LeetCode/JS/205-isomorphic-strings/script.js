/*
205. Isomorphic Strings.

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
*/

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

var isIsomorphic = function(s, t) {
    map = {};
    for (let i = 0; i < s.length; i++) {
        if ((map[s[i]] !== undefined & map[s[i]] !== t[i]) || (getKeyByValue(map, t[i]) !== undefined & getKeyByValue(map, t[i]) !== s[i])) {
            return false;
        }
        map[s[i]] = t[i];
    }
    return true;
};