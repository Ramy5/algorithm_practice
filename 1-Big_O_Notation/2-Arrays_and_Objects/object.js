const obj1 = {
  firstName: "Ramy",
  age: 23,
  isAdult: true,
  lastName: "sabry",
  testing: false,
};

const t1 = performance.now();
const obj2 = Object.entries(obj1);
const t2 = performance.now();

console.log(`${t2 - t1} seconds`, obj2);
