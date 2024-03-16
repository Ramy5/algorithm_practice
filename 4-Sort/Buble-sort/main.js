const bubleSort = (arr) => {
  const swap = (arr, firstIndex, secondIndex) => {
    [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
};

console.log(bubleSort([37, 45, 29, 8, 12, 88, -3]));
