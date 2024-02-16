function binarySearch(sortedArray, value) {
  let low = 0;
  let high = sortedArray.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midValue = sortedArray[mid];

    if (midValue === value) {
      return mid;
    } else if (midValue < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const targetValue = 23;
const index = binarySearch(sortedArray, targetValue);

if (index !== -1) {
  console.log(`Found ${targetValue} at index ${index}`);
} else {
  console.log(`${targetValue} not found in the array`);
}
