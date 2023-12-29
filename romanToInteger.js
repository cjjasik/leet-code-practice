/**
LEETCODE: #13 ROMAN TO INTEGER

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example #1:

Input: s = "III"
Output: 3
Explanation: III = 3.

*/




/**
 * @param {String} numeral 
 * @returns {number}
 */


function romanToInteger(numeral) {
    const romanNumerals = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    // split the input numeral into an array.
    const numArray = numeral.split("");

    // add the sum of numbers to this value. return at the end.
    let total = 0;

    // loop through and evaluate each value in array.
    for (let i = 0; i < numArray.length; i++) {
        if(i < numArray.length -1 && romanNumerals[numArray[i]] < romanNumerals[numArray[i + 1]]){
            total = total - romanNumerals[numArray[i]]
        } else {
            total = total + romanNumerals[numArray[i]]
        }
    } 

    return total;

}

// TEST IT OUT!
console.log(romanToInteger("III")); // expect 3
console.log(romanToInteger("LVIII")); // expect 58
console.log(romanToInteger("MCMXCIV")); // expect 1994