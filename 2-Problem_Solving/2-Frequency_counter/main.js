// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   const obj1 = {};
//   const obj2 = {};

//   for (val of arr1) obj1[val] = (obj1[val] || 0) + 1;
//   for (val of arr2) obj2[val] = (obj2[val] || 0) + 1;

//   for (key in obj1) {
//     if (!(key ** 2 in obj2)) return false;
//     if (obj2[key ** 2] !== obj1[key]) return false;
//   }

//   return true;
// }

// console.log(same([1, 2, 3], [4, 1, 9])); // true
// console.log(same([1, 2, 3], [1, 9])); // false
// console.log(same([1, 2, 1], [4, 4, 1])); // false

///////////////////////////////////////////////////////////////////////////

// function valid(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   const obj1 = {};
//   const obj2 = {};

//   for (val of str1) obj1[val] = (obj1[val] || 0) + 1;
//   for (val of str2) obj2[val] = (obj2[val] || 0) + 1;

//   for (key in obj1) {
//     if (!(key in obj2)) return false;
//     if (obj1[key] !== obj2[key]) return false;
//   }

//   return true;
// }

function valid(str1, str2) {
  if (str1.length !== str2.length) return false;

  const obj = {};

  for (let i = 0; i < str1.length; i++) {
    const letter = str1[i];
    obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
  }

  for (let k = 0; k < str2.length; k++) {
    const letter = str2[k];

    if (!obj[letter]) return false;
    else obj[letter] -= 1;
  }

  return true;
}

console.log(valid("", "")); // true
console.log(valid("aaz", "zza")); // false
console.log(valid("anagram", "nagaram")); // true
console.log(valid("rat", "cat")); // false
console.log(valid("awesome", "awesom")); // false
console.log(valid("qwerty", "qeywrt")); // true
console.log(valid("texttwisttime", "timetwisttext")); // true
