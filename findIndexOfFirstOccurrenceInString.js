/**
LEETCODE #28: FIND THE INDEX OF THE FIRST OCCURRENCE IN A STRING

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 
Example #1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example #2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 */

/**
 * @param {String} haystack 
 * @param {String} needle 
 * @returns {number} index of where needle begins in haystack
 */

function indexOfFirstOccurrence (haystack, needle) {
    if (haystack.includes(needle)) {
        for (let i = 0; i < haystack.length; i++) {
            if (haystack.slice(i, i + needle.length) === needle){
                return i;
            }
        }
    } else {
        return -1;
    }

}

console.log(indexOfFirstOccurrence("sadbutsad", "sad")); // expect: 0
console.log(indexOfFirstOccurrence("leetcode", "leeto")); // expect: -1
console.log(indexOfFirstOccurrence("hello", "ell")); // expect: 1