// RECURSIVE FUNCTION 1
/**
 * Recursively counts down from a given number.
 * @param {number} count - The number to count down from.
 * @returns {undefined}
 */
const countDown = (count) => {
  if (count <= 0) return;
  console.log(count);
  return countDown(count - 1);
};

countDown(3);

// RECURSIVE FUNCTION 2
/**
 * Calculates the sum of numbers from 1 to the given number recursively.
 *
 * @param {number} number - The number to calculate the sum up to.
 * @returns {number} The sum of numbers from 1 to the given number.
 */
// This is a recursive function that calculates the sum of all numbers from 1 to the input number.
const sum = (number) => {
  // Base case: if the number is 1, the function returns 1 and stops executing.
  if (number === 1) return 1;

  // Recursive case: if the number is not 1, the function returns the sum of the current number and the result of a recursive call to `sum` with `number - 1` as the argument.
  // This means the function will keep adding the current number to the sum of all numbers less than it until it reaches 1.
  return number + sum(number - 1);
};

console.log(sum(4));
// return 4 + sum(3)
// return 3 + sum(2)
// return 2 + sum(1)
// return 1

// 4 + 3 + 2 + 1 = 10

const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(4)); // 24 === 4!
console.log(factorial(10)); // 3628800 === 10!

// HELPER RECURSION
const outer = (arr) => {
  const list = [];

  function helper(listing) {
    if (listing.length === 0) return;

    if (listing[0] % 2 !== 0) list.push(listing[0]);

    return helper(listing.slice(1));
  }

  helper(arr);
  return list;
};

console.log(outer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const pureRecursion = (arr) => {
  let newArray = [];

  if (arr.length === 0) return newArray;

  if (arr[0] % 2 !== 0) newArray.push(arr[0]);

  newArray = newArray.concat(pureRecursion(arr.slice(1)));

  return newArray;
};

console.log(pureRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
