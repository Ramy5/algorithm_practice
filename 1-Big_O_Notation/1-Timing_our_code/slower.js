const addUpTo = (n) => {
  let number = 0;

  for (let i = 1; i <= n; i++) {
    number += i;
  }

  return number;
};

const t1 = performance.now();
console.log(addUpTo(1000000000));
const t2 = performance.now();

console.log(`${(t2 - t1) / 1000} seconds`);
