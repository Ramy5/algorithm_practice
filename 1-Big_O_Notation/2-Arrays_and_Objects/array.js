const arr1 = [
  1, 2, 3, 5, 6, 7, 8, 9, 88, 77, 666, 555, 3454, 3234, 23423, 4234, 5645,
  634535, 34242343, 342342342, 4231131, 90878,
];

const t1 = performance.now();
arr1.sort((a, b) => a - b);
const t2 = performance.now();

console.log(`====== ${t2 - t1} seconds =======`, arr1);
