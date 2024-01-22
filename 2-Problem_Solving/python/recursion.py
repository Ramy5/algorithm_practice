def sum(num):
  """
  Calculates the sum of numbers from 1 to the given number.

  Parameters:
  num (int): The number up to which the sum is calculated.

  Returns:
  int: The sum of numbers from 1 to the given number.
  """
  if num == 1: return 1
  return num + sum(num - 1)


print(sum(10)) # 55

# SECOND
def factorial(num):
  if num == 1: return 1
  return num * factorial(num - 1)

print(factorial(4)) # 24
print(factorial(10)) # 3628800



def collect(arr):
  list = []

  def helper(listing):
    if (len(listing) == 0): return
    if (listing[0] % 2 != 0): list.append(listing[0])

    return helper(listing[1:])

  helper(arr)
  return list


print(collect([1,2,3,4,5,6,7,8,9,10]))


def pure_recursion(arr):
  new_array = []
  
  if (len(arr) == 0): return new_array
  
  if (arr[0] % 2 != 0): new_array.append(arr[0])
  
  new_array = new_array + pure_recursion(arr[1:])
  
  return new_array

print(pure_recursion([1,2,3,4,5,6,7,8,9,10]))