def linear_search(list, val): 
  for num in list: 
    if num == val: 
      return list.index(num)

  return -1

print(linear_search([1,2,3,4,5,6,7], 6))