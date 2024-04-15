const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let k = i + 1; k < arr.length; k++) {
      if (arr[minIndex] > arr[k]) minIndex = k;
    }

    if (minIndex !== i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }

  return arr;
};

console.log(selectionSort([6, 3, 1, 4, 2, 90, 10])); // [1, 2, 3, 4, 6, 10, 90]
// [1, 3, 6, 4, 2, 90, 10]
// [1, 2, 6, 4, 3, 90, 10]
// [1, 2, 3, 4, 6, 90, 10]
// [1, 2, 3, 4, 6, 10, 90]
