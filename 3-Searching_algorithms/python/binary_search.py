def binary_search(sort_arr, target_val): 
  low = 0
  high = len(sort_arr) - 1
  
  while low <= high: 
    mid = (low + high) // 2
    mid_value = sort_arr[mid]
    
    if (target_val > mid_value):
      low = mid + 1
    elif (target_val < mid_value):
      high = mid - 1
    else:
      return mid
  
  return -1


arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
target = 12

index = binary_search(arr, target)

print(index)