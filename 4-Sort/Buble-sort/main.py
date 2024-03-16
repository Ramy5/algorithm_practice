def bubble_sort(arr):
  def swap(arr, index1, index2):
    arr[index1], arr[index2] = arr[index2], arr[index1]
    
  n = len(arr)
  
  for i in range(n):
    for j in range(0, n - i - 1):
      if arr[j] > arr[j+1]:
        swap(arr, j, j+1)
        
  return arr


print(bubble_sort([37, 45, 29, 8, 12, 88, -3]))
