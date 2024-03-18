/**
 * Implement Mergesort
 * 
 */

function mergeSort(arrayOne, arrayTwo) {
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


console.log(mergeSort([1, 4, 5], [2, 3, 35, 84]));