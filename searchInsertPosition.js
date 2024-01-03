/**
LEETCODE #35: SEARCH INSERT POSITION

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example #1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example #2:

Input: nums = [1,3,5,6], target = 2
Output: 1

Example #3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
 * 
 */


/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number} // index location || where it should be
 */

function searchInsertPosition(nums, target) {
    // find if target value is in nums array
        // if yes, return index in array
           // if not, identify where it should be.
        // should be greater than the value of the element before, && less than the value of the next

    let foundTarget = nums.indexOf(target);
    if (foundTarget === -1) {
        for (let i = 0; i < nums.length; i++) {
            // if statement which evaluates the conditions
            if (nums[i] > target && nums[i + 1] > target){
                return i + 1;
            }
        }
        return nums.length;
    } else {
        return foundTarget;
    }
}


// TEST IT OUT!
console.log(searchInsertPosition([1,3,5,6], 5)) //expect: 2
console.log(searchInsertPosition([1,3,5,6], 2)) //expect: 1
console.log(searchInsertPosition([1,3,5,6], 7)) //expect: 4