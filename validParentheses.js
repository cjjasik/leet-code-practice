/**
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example #1:

Input: s = "()"
Output: true


Example #2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */



/**
 * 
 * @param {string} s
 * @returns {boolean} true if valid - else is false
 */

function validParentheses (s) {
    
    let stack = [];

    for (let i = 0; i < s.length; i++){
        if (s[i] === "(" || s[i] === "{" || s[i] ==="[") {
            stack.push(s[i]);
        } else {
            // edge case ()) & if starts with a closing )}] & return false if it doesn't match the most recent thing on the stack
            if (stack.length === 0) {
                return false;
            }
            // checking for closing parentheses
            if (s[i] === ")" && stack[stack.length - 1] !== "(") {
                return false;
            }
            // checking for closing curly
            if (s[i] === "}" && stack[stack.length - 1] !== "{") {
                return false;
            }
            // checking for closing bracket
            if (s[i] === "]" && stack[stack.length - 1] !== "[") {
                return false;
            }

            // they do match. will .pop to remove the last item of the array to assess the next char.
            stack.pop();
        }
    }
    // if stack empty?
    if (stack.length > 0){
        return false;
    }


    return true;
}




// TEST IT OUT!
console.log(validParentheses("()")); // expect true
console.log(validParentheses("()[]{}")); // expect true
console.log(validParentheses("(]")); // expect false
console.log(validParentheses("[}}")); // expect false