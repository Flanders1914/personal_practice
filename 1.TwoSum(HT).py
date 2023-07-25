nums = [int(n) for n in input().split()]
target = int(input())
hashtable = {}
for i in range(0,len(nums)):
    hashtable[nums[i]] = i
for i in range(0, len(nums)):
    complement = target - nums[i]
    if (complement in hashtable) and (hashtable[complement] != i):
#由于输入数据中可能存在相同的数字，所以要用索引来避免引用自身，不能从complement和nums[i]的值来判断
#另外对于2sum问题,遇到碰撞只需要更新index即可
#两个循环可以合并为一个循环
        print([i,hashtable[complement]])
        break