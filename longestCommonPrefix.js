/**
LEETCODE: #14: LONGEST COMMON PREFIX

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example #1:

Input: strs = ["flower","flow","flight"]
Output: "fl"


Example #2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

*/



/**
 * @param {String} strings
 * @returns {String} longest common prefix
 */

function longestCommonPrefix(strings) {
    // sorts the array of Strings into alphabetical order
    strings.sort();

    // loop through the chars of the first word
    for (let i = 0; i < strings[0].length; i++){
        
        // if first char of first word !== first char of LAST word...
        if (strings[0][i].toLowerCase() !== strings[strings.length-1][i].toLowerCase()){
            // ... return the chars of FIRST word until it does align with the chars of LAST word.
            return strings[0].slice(0, i).toLowerCase();
        }
    }

    // EDGE CASE: [flow, flower, flowers]
        // return the first word if it is present in every word
    return strings[0].toLowerCase();
}


// TEST IT OUT!
console.log(longestCommonPrefix(["flower","flow","flight"])); // expect: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])) // expect: 
console.log(longestCommonPrefix(["Flow", "flower", "flowers"])) // expect: "flow"