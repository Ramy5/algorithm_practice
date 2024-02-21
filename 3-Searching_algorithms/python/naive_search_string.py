def naive_search(long, short):
  count = 0
  long_length = len(long)
  short_length = len(short)

  for i in range(long_length - short_length + 1):    
    for j in range(short_length):
      if short[j] != long[j + i]:
        break

      if j == short_length - 1:
        count += 1

  return count

print(naive_search("ant nat antantnta tna ntaant", "ant"))
