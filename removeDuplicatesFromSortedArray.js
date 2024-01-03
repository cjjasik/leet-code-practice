/**
LEETCODE #26 - REMOVE DUPLICATES FROM SORTED ARRAY

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

EXAMPLE #1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

*/



/**
 * 
 * @param {number[]} nums 
 * @return {number} // returns the number of unique elements in nums.
 */

function removeDuplicates (nums) {
    
    // create an empty array to push values to
    let stack = [];
    let count = 0;

    // for loop to assess all the values within array
    for (let k = 0; k < nums.length; k++) {

        // evaluate if next value in array is the same as first value. If yes, push _ to end of array.
        if (nums[k] === nums[k -1]) {
            // push _ to end of array
            stack.push("_");
        } else {
            // push the value to the array
            stack.push(nums[k]);
            count++;
        }
    }

    stack.sort();

    // return number of unique elements in stack
    return count;

}



// TEST IT OUT!
console.log(removeDuplicates([1,1,2])) // expect 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) // expect 5