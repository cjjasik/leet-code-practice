/**

Given an integer x, return true if x is a palindrome, and false otherwise.

Example #1:
Input: x = 121
Output: true

Example #2:
Input: x = -121
Output: false

*/

/**
 * 
 * @param {number} x
 * @return {boolean}
 */

function palindromeNumber(x){
    // take x and .toString
    // take new x value and .split into an array of Strings
    // make a copy
    // reverse the copy
    // compare reversed copy value to the initial value
    // return true if palindome, false if not.

    let stringX = x.toString();
    let arrayX = stringX.split("");
    let reversedArrayX = arrayX.reverse();
    let joinedArrayX = reversedArrayX.join("");

    if (stringX == joinedArrayX) {
        return true;
    } else {
        return false;
    }
}


// TRY QUICK TESTING IT!
console.log(palindromeNumber(121)); // expect true
console.log(palindromeNumber(-121)); // expect false
console.log(palindromeNumber(123454321)); // expect true
console.log(palindromeNumber(123)); // expect false