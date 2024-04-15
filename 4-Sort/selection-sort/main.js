const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let elementIndex = 0;

    for (let k = i + 1; k < arr.length; k++) {
      console.log(arr[elementIndex], arr[k]);
      if (arr[elementIndex] > arr[k]) {
        console.log("inside condition", arr[elementIndex], arr[k]);
        [arr[elementIndex], arr[k]] = [arr[k], arr[elementIndex]];
        console.log(arr);
        elementIndex = k;
      } else {
        elementIndex = i;
      }
    }
  }

  return arr;
};

console.log(selectionSort([6, 3, 1, 4, 2, 90, 10])); // [1, 2, 3, 4, 6, 10, 90]
