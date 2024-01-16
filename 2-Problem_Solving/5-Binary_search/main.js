// THIS IS AN EXAMPLE OF BINARY SEARCH ALGORITHM
// Binary search is a much faster form of search
// Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
// Binary search only works on sorted arrays!

// Pseudocode:
// This function accepts a sorted array and a value
// Create a left pointer at the start of the array, and a right pointer at the end of the array
// While the left pointer comes before the right pointer:

/**
 * Performs binary search on a sorted array to find the index of a given value.
 * @param {Array} arr - The sorted array to search in.
 * @param {*} val - The value to search for.
 * @returns {number} - The index of the value in the array, or -1 if not found.
 */
const binarySearch = (arr, val) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const middle = Math.floor((min + max) / 2);
    const currentElement = arr[middle];

    if (currentElement < val) min = middle + 1;
    else if (currentElement > val) max = middle - 1;
    else return middle;
  }

  return -1;
};

console.log(
  binarySearch(
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23,
    ],
    19
  )
); // 18
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8)); // 7

const binarySearch2 = (arr, val) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const middle = Math.floor((min + max) / 2);
    const currentElement = arr[middle];

    if (currentElement < val) min = middle + 1;
    else if (currentElement > val) max = middle - 1;
    else return middle;
  }

  return -1;
};

console.log(binarySearch2([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch2([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch2([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch2([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearch2([1, 2, 3, 4, 5], 0)); // -1
console.log(binarySearch2([1, 2, 3, 4, 5], 11)); // -1
