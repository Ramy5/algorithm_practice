def linear_search(list, val): 
  for num, index in list: 
    if num == val: 
      return index

  return -1

print(linear_search([1,2,3,4,5,6,7], 6))