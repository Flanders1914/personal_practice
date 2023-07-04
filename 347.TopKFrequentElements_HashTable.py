nums = [int(n) for n in input().split()]
k = int(input())
hashtable = {}

for i in range(0, len(nums)):
    if nums[i] in hashtable:
        hashtable[nums[i]] += 1
    else:
        hashtable[nums[i]] = 1

# list.sort()只为列表定义而 sorted()函数接受任何可迭代对象
# dictionary没有顺序，不能用index索引，所以需要转换为list；list(dict)与list(dict.keys())相同只取keys作为元素；
# list(dict.values())只取values为元素；list(dic.items())取键和值为一个元组放入list中
sortedtable = sorted(list(hashtable.items()), key = lambda n:n[1], reverse = True)
answers = []
for i in range(0,k):
    answers = answers + [sortedtable[i][0]]
print(answers)
# 这道题不需要对输出的元素进行排序，所以可以用QuickSelect降低时间复杂度