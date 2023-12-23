/**

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example #1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example #2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * [1,2,3,4]
 * [4]
 */

function twoSum (nums, target) {
    // loop through each value nums
    // loop through nums + 1 to loop through next value
        // if num1 + num2 = target
            // return index of num1 & num2
    //
    // know to loop though the next index +1

    for (let i = 0; i < nums.length; i++) {
        for (let k = i + 1; k < nums.length; k++) {
            if (nums[i] + nums[k] == target) {
                return ([i, k]);
            }
        }
    }
}

// TRY QUICK TESTING IT!
console.log(twoSum([1, 2, 3, 4], 7)); //expect: [2,3]
console.log(twoSum([3, 4, 7, 9], 7)); //expect: [2,3]
console.log(twoSum([-1, 1, 2, 3], 6)); //expect: undefined