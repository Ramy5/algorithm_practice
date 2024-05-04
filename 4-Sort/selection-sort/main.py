def selection_sort(arr): 
  length = len(arr)

  for i in range(length):
    minIndex = i

    for k in range(i + 1, length):
        if arr[minIndex] > arr[k]: 
          minIndex = k

    if minIndex != i: 
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]

  return arr 


print(selection_sort([36, 20, 15, 1, 2, 10, 15]))