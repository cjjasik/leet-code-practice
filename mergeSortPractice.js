/**
 * Implement Mergesort
 * 
 */

function merge(arrayOne, arrayTwo) {
    let sortedArray = [];

    while (arrayOne.length && arrayTwo.length) {
        if (arrayOne[0] < arrayTwo[0]) {
            sortedArray.push(arrayOne.shift())
        } else {
            sortedArray.push(arrayTwo.shift())
        }
    }

    return [...sortedArray, ...arrayOne, ...arrayTwo];
}

function mergeSort(arr) {
  // quick check for length at its simplest form
  if (arr.length <= 1){
    return arr;
  }

  // finding the middle of the array
  let mid = Math.floor(arr.length / 2)
  // calls left array and right array
  // calling mergeSort breaks left and right down
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))

  return merge(left, right)
}

console.log(mergeSort([3, 5, 8, 5, 99, 1]))