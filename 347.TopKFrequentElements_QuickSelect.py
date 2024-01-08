import random

"""
快速选择算法,选择最大的k个数字(无需按照顺序),运用了和快速排序一样的思路
"""
def QuickSelect(table, k):
    r = len(table) - 1
    pivot_index = random.randrange(0, r + 1) #注意randrange的范围是不包括结束值的,所以结束值是r+1,r 为最左侧值的index
    pivot = table[pivot_index][1]
    table[0], table[pivot_index] = table[pivot_index], table[0]
    j = 0

    for i in range(1, r+1):
        if table[i][1] >= pivot:
            j += 1
            table[i], table[j] = table[j], table[i]

    if j == k - 1: # 当 j+1 == k 时，表明 index从0（这是pivot）到j的元素（一共j+1个元素）正好是最大的k个元素
        return (table[0:k])
    else:
        if j > k - 1 :
            return (QuickSelect(table[1: j+1], k)) # 当 j+1 > k 需要在0到j元素中重新选择最大的k个，此时可以先排除pivot
        else:
             # 当 j+1 < k 时，可以先将0到j的元素选择到答案内，再在小于pivot的元素中挑选k-(j+1)个元素
            return (table[0:j+1] + QuickSelect(table[j+1:r+1], k-j-1))

nums = [int(n) for n in input().split()]
k = int(input())
hashtable = {}

for i in range(0, len(nums)):
    if nums[i] in hashtable:
        hashtable[nums[i]] += 1
    else:
        hashtable[nums[i]] = 1

UnsortedTable = list(hashtable.items())

answer = []
for item in QuickSelect(UnsortedTable, k):
    answer = answer + [item[0]]
print(answer)