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