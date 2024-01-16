// How many characters in the sentence
// spaces not included
// ignore cases

/* 
  - inputs => string
  - outputs => number of string length
*/

/* 
  simple example
  - (sss) => 3
  - (hello) => 5

  complex example
  - (hello my name is ramy) => 17
  - (Hello hi) => => 6  h is repeated

  empty inputs
  - () => 0

  invalid inputs
  - (2)
  -([1.3, 4])
*/

// function chartCounter(str = "") {
//   if (typeof str !== "string") return "please give me a string type";
//   return str.trim().replace(/\s/g, "").toLowerCase().length;
// }

function chartCounter(str = "") {
  // 1) WRONG INPUT TYPE
  if (typeof str !== "string") return "Please give me a string type";

  // 2) CONVERT THE ALL SENTENCE TO LOWERCASE AND REMOVE THE SPACES
  const strLower = str.toLowerCase().replace(/\s/g, "");

  // 3) CREATE AN OBJECT TO ADD THE VALUE IN IT
  let charObj = {};

  // 4) LOOP OF THE STR
  for (let character of strLower)
    charObj[character] = ++charObj[character] || 1;

  // 5) RETURN THE OBJECT
  return charObj;
}

console.log(chartCounter("sss"));
console.log(chartCounter("hello"));
console.log(chartCounter("hello my name is     ramy        "));
console.log(chartCounter("Hello hi"));
console.log(chartCounter());
console.log(chartCounter(2));
console.log(chartCounter([23, 53]));
