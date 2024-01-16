// let maxValue = 0;

// function maxSubarraySum(arr, count) {
//   if (arr.length < count) return null;

//   if (count === 0) {
//     return maxValue;
//   } else {
//     const index = arr.indexOf(Math.max(...arr));
//     maxValue += Math.max(...arr);

//     const newArr = arr.slice(0, index).concat(arr.slice(index + 1));
//     const newCount = count - 1;

//     return maxSubarraySum(newArr, newCount);
//   }
// }

// function maxSubarraySum(arr, count) {
//   let maxValue = 0;
//   if (arr.length < count) return null;

//   for (let i = 0; i < count; i++) {
//     const index = arr.indexOf(Math.max(...arr));
//     maxValue += Math.max(...arr);

//     arr.splice(index, 1);
//   }
//   return maxValue;
// }

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 13
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 20
// console.log(maxSubarraySum([1, 4, 2, 1, 6], 1)); // 6
// console.log(maxSubarraySum([1, 2, 1, 6, 2], 4)); // 11
// console.log(maxSubarraySum([], 4)); // null

function maxSubarraySum(arr, count) {
  let maxValue = 0;
  let tempValue = 0;

  if (arr.length < count) return null;

  for (let i = 0; i < count; i++) maxValue += arr[i];

  tempValue = maxValue;

  for (let i = count; i < arr.length; i++) {
    tempValue = tempValue - arr[i - count] + arr[i];
    maxValue = Math.max(tempValue, maxValue);
  }

  return maxValue;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([1, 4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([1, 2, 1, 6, 2], 4)); // 11
console.log(maxSubarraySum([], 4)); // null
