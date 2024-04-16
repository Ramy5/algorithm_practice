// const selectionSort = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;

//     for (let k = i + 1; k < arr.length; k++) {
//       if (arr[minIndex] > arr[k]) minIndex = k;
//     }

//     if (minIndex !== i) {
//       [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
//     }
//   }

//   return arr;
// };

// console.log(selectionSort([6, 3, 1, 4, 2, 90, 10])); // [1, 2, 3, 4, 6, 10, 90]
// // [1, 3, 6, 4, 2, 90, 10]
// // [1, 2, 6, 4, 3, 90, 10]
// // [1, 2, 3, 4, 6, 90, 10]
// // [1, 2, 3, 4, 6, 10, 90]

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let k = i + 1; k < arr.length; k++) {
      if (arr[minIndex] > arr[k]) minIndex = k;
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
};

console.log(selectionSort([36, 2, 1, 20, 15, 30, 80, 25])); // [1, 2, 15, 20, 25, 30, 36, 80]
