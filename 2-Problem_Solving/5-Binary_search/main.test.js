// Test case 1: Value exists in the array
const arr1 = [1, 3, 5, 7, 9];
const val1 = 5;
console.log(binarySearch(arr1, val1)); // Output: 2

// Test case 2: Value does not exist in the array
const arr2 = [2, 4, 6, 8, 10];
const val2 = 7;
console.log(binarySearch(arr2, val2)); // Output: -1

// Test case 3: Value is the first element in the array
const arr3 = [3, 6, 9, 12, 15];
const val3 = 3;
console.log(binarySearch(arr3, val3)); // Output: 0

// Test case 4: Value is the last element in the array
const arr4 = [2, 4, 6, 8, 10];
const val4 = 10;
console.log(binarySearch(arr4, val4)); // Output: 4

// Test case 5: Empty array
const arr5 = [];
const val5 = 5;
console.log(binarySearch(arr5, val5)); // Output: -1
