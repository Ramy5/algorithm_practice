const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      console.log("in there");
    } else {
      console.log("not in there");
    }
  }
};

linearSearch([1, 2, 3, 4, 5, 6], 2);
