// const sumZero = (sortArr) => {
//   let first: number = 0;
//   let last: number = sortArr.length - 1;
//   let sum = sortArr[first] + sortArr[last];

//   while (first < last) {
//     if (sum > 0) last--;
//     else if (sum < 0) first++;
//     else return [sortArr[first], sortArr[last]];
//   }
// };

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero([-2, 0, 1, 3]));
// console.log(sumZero([1, 2, 3]));

// const countUniqueValues = (arr) => [...new Set(arr)].length;

const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

/*
       i
[1, 2, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]
          j
*/

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
