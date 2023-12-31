/**
LEETCODE #21 - MERGE TWO SORTED LISTS **** CHANGED TO LISTS RATHER THAN LINKED

You are given the heads of two sorted lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged list.


EXAMPLE 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

EXAMPLE 2:
Input: list1 = [], list2 = []
Output: []

 */




/**
 * 
 * @param {number []} list1 
 * @param {number []} list2 
 * @returns {numner []} mergedList
 */

function mergeTwoSortedLists(list1, list2) {
    let mergedList =[];

    // loop through list1
    for (let i = 0; i < list1.length; i++) {
        mergedList.push(list1[i]);
    }

    //loop through list2
    for (let k = 0; k <list2.length; k++) {
        mergedList.push(list2[k]);
    }

    // .sort to mergedList
    mergedList.sort();

    return mergedList;
}



// TEST IT OUT!
console.log(mergeTwoSortedLists([1,2,4], [1,3,4])) // expect: [1,1,2,3,4,4]
console.log(mergeTwoSortedLists([], [])) // expect:[]
console.log(mergeTwoSortedLists([], [0])) // expect: [0]