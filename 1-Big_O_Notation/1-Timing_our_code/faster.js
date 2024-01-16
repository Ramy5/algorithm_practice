function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

// 6 * (6 + 1) / 2 = 6 * 7 / 2 = 42 / 2 = 21

const t3 = performance.now();
console.log(addUpTo2(1000000000));
const t4 = performance.now();

console.log(`${(t4 - t3) / 1000} seconds`);
